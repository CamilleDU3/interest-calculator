'use client';
import Button from '@/components/Button';
import InputNumber from '@/components/InputNumber';
import LineGraph from '@/components/LineGraph';
import calcInvestmentGrowth, {
    InvestmentResult,
} from '@/lib/calculators/investmentGrowth';
import React from 'react';
import { useEffect, useState } from 'react';

//TODO: encapsulate the checks into functions and move them along with the inputRules elsewhere
//TODO: style the table and fix responsive issue
//TODO: encapsulate the table
//TODO: add tooltip on chart explaining the meaning of the values in each column
//TODO: add the compound type (before increment, after increment) input
//TODO: allow different compounding time for inflation rate
//TODO: update the UI so that investment length of year and month are next to each other with only one label : Investment Length
export default function CalculatorPage() {
    const inputRules: Record<string, { min?: number; max?: number }> = {
        investLengthYear: { min: 0, max: 100 },
        monthlyIncrement: { min: 0 },
        interestRate: { min: 0, max: 1000 },
        investLengthMonth: { min: 0, max: 12 },
        inflationRate: { min: 0, max: 100 },
    };

    const [inputs, setInputs] = useState({
        initialCapital: 10000,
        monthlyIncrement: 1000,
        investLengthYear: 10,
        investLengthMonth: 6,
        interestRate: 7.52,
        compoundTime: 12,
        inflationRate: 2,
    });
    const [investmentResults, setInvestmentResults] = useState<
        InvestmentResult[]
    >([]);
    const [openTableRow, setOpenTableRow] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;

        let correctedValue = parseFloat(value);
        if (type === 'number') {
            if (!isNaN(correctedValue)) {
                const rules = inputRules[name];
                if (rules) {
                    if (rules.min !== undefined)
                        correctedValue = Math.max(correctedValue, rules.min);
                    if (rules.max !== undefined)
                        correctedValue = Math.min(correctedValue, rules.max);
                }
            } else {
                correctedValue = 0;
            }
        }

        setInputs((prevInputs) => {
            return {
                ...prevInputs,
                [name]:
                    type === 'number' ? correctedValue || 0 : correctedValue,
            };
        });
    };

    useEffect(() => {
        const investmentResults: InvestmentResult[] = calcInvestmentGrowth(
            inputs.initialCapital,
            inputs.monthlyIncrement,
            inputs.investLengthYear,
            inputs.investLengthMonth,
            inputs.interestRate,
            inputs.compoundTime,
            inputs.inflationRate
        );

        setInvestmentResults(investmentResults);
    }, [inputs]);

    const toggleOpenTableRow = (indexYear: number | null) => {
        setOpenTableRow((prev: number | null) =>
            prev === indexYear ? null : indexYear
        );
    };
    const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    return (
        <main>
            <div className="mx-30 mt-5 mb-10">
                <p className="my-2 text-3xl text-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]">
                    Modes
                </p>
                <div className="flex">
                    <Button variant="secondary">Simple</Button>
                    <Button variant="secondary">Advanced</Button>
                    <Button hidden disabled variant="secondary">
                        Monte-Carlo
                    </Button>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row">
                <fieldset className="ml-15">
                    <InputNumber
                        id="initial-capital"
                        labelText="Initial Capital"
                        required
                        min="0"
                        step="1"
                        name="initialCapital"
                        value={inputs.initialCapital}
                        onChange={handleChange}
                    />
                    <InputNumber
                        id="monthly-increment"
                        labelText="Monthly Increment"
                        required
                        min="0"
                        name="monthlyIncrement"
                        value={inputs.monthlyIncrement}
                        onChange={handleChange}
                    />
                    <InputNumber
                        id="investment-length-year"
                        labelText="Investment Length Years"
                        required
                        min="0"
                        name="investLengthYear"
                        value={inputs.investLengthYear}
                        onChange={handleChange}
                    />
                    <InputNumber
                        id="investment-length-month"
                        labelText="Investment Length Months"
                        required
                        min="0"
                        name="investLengthMonth"
                        value={inputs.investLengthMonth}
                        onChange={handleChange}
                    />
                    <InputNumber
                        id="interest-rate-percent"
                        labelText="Interest Rate (%)"
                        required
                        min="0"
                        step="0.01"
                        name="interestRate"
                        value={inputs.interestRate}
                        onChange={handleChange}
                    />
                    <InputNumber
                        id="compound-time"
                        labelText="Compound every X months"
                        required
                        min="0"
                        name="compoundTime"
                        value={inputs.compoundTime}
                        onChange={handleChange}
                    />
                    <InputNumber
                        id="inflation-rate"
                        labelText="Annual Inflation Rate"
                        required
                        min="0"
                        name="inflationRate"
                        value={inputs.inflationRate}
                        onChange={handleChange}
                    />
                </fieldset>

                <div className="mt-10 ml-10 h-[70vh] w-[100vh]">
                    <LineGraph
                        investmentResults={investmentResults}
                    ></LineGraph>
                </div>

                <div className="h-[70vh] w-[50vh] overflow-auto mx-10">
                    <table className="text-center border-separate border-spacing-4">
                        <thead className="sticky top-0 backdrop-blur-[1.5px]">
                            <tr>
                                <th>Year</th>
                                <th>Total</th>
                                <th>Acc. Interest</th>
                                <th>Interest (yearly)</th>
                                <th>Interest Share (yearly)(%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {investmentResults
                                .filter(
                                    (_, index) =>
                                        index % 12 === 0 ||
                                        index == investmentResults.length - 1
                                )
                                .map((investmentResult, indexYear) => {
                                    //TODO: refactor and change the manuel alignment to something better and less fragile
                                    const startMonth = indexYear * 12 - 11;
                                    const endMonth = indexYear * 12 + 1;
                                    const months = investmentResults.slice(
                                        startMonth,
                                        endMonth
                                    );
                                    return (
                                        <React.Fragment key={indexYear}>
                                            <tr
                                                onClick={() => {
                                                    return toggleOpenTableRow(
                                                        indexYear
                                                    );
                                                }}
                                                key={indexYear}
                                            >
                                                <td className="flex items-center gap-3">
                                                    <span>
                                                        {openTableRow ===
                                                        indexYear
                                                            ? '▼'
                                                            : '▶'}
                                                    </span>
                                                    <span> {indexYear}</span>
                                                </td>
                                                <td>
                                                    {Math.trunc(
                                                        investmentResult.balance
                                                    ).toLocaleString('en-US')}
                                                </td>
                                                <td>
                                                    {Math.trunc(
                                                        investmentResult.accInterest
                                                    ).toLocaleString('en-US')}
                                                </td>
                                                <td>
                                                    {Math.trunc(
                                                        investmentResult.yearlyInterest
                                                    ).toLocaleString('en-US')}
                                                </td>
                                                <td>
                                                    {(
                                                        investmentResult.yearlyInterestShare *
                                                        100
                                                    ).toLocaleString('en-US')}
                                                </td>
                                            </tr>
                                            {openTableRow === indexYear &&
                                                months.map(
                                                    (month, indexMonth) => (
                                                        <tr
                                                            key={`${indexYear}-${indexMonth}`}
                                                        >
                                                            <td>
                                                                {
                                                                    monthNames[
                                                                        indexMonth
                                                                    ]
                                                                }
                                                            </td>
                                                            <td>
                                                                {Math.trunc(
                                                                    month.balance
                                                                ).toLocaleString(
                                                                    'en-US'
                                                                )}
                                                            </td>
                                                            <td>
                                                                {Math.trunc(
                                                                    month.accInterest
                                                                ).toLocaleString(
                                                                    'en-US'
                                                                )}
                                                            </td>
                                                            <td>
                                                                {Math.trunc(
                                                                    month.yearlyInterest
                                                                ).toLocaleString(
                                                                    'en-US'
                                                                )}
                                                            </td>
                                                            <td>
                                                                {(
                                                                    month.yearlyInterestShare *
                                                                    100
                                                                ).toLocaleString(
                                                                    'en-US'
                                                                )}
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                        </React.Fragment>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
