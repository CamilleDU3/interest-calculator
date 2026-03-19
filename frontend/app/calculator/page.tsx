'use client';
import Button from '@/components/Button';
import InputNumber from '@/components/InputNumber';
import calculateIncomePerMonth from '@/lib/calculators/income';
import { useEffect, useState } from 'react';

//TODO: create the function to handle onChange event of inputs (=recalculation and update of the graph)
//TODO: add the graph
//TODO: add the compound type (before increment, after increment) input
//TODO: allow different compounding time for inflation rate
//TODO: update the UI so that investment length of year and month are next to each other with only one label : Investment Length
export default function CalculatorPage() {
    const [inputs, setInputs] = useState({
        initialCapital: 10000,
        monthlyIncrement: 1000,
        investLengthYear: 10,
        investLengthMonth: 6,
        interestRate: 7.52,
        compoundTime: 12,
        inflationRate: 2,
    });
    const [incomePerMonth, setIncomePerMonth] = useState<number[][]>([]);

    const handleChange = (e: { target: { name: any; value: any } }) => {
        setInputs((prevInputs) => {
            return {
                ...prevInputs,
                [e.target.name]: [e.target.value],
            };
        });
    };

    useEffect(() => {
        setIncomePerMonth(
            calculateIncomePerMonth(
                inputs.initialCapital,
                inputs.monthlyIncrement,
                inputs.investLengthYear,
                inputs.investLengthMonth,
                inputs.interestRate,
                inputs.compoundTime,
                inputs.inflationRate
            )
        );
    }, [inputs]);

    return (
        <main>
            <div className="mx-30 my-10">
                <p className="my-2 text-3xl text-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]">
                    Modes
                </p>
                <div>
                    <Button variant="secondary">Simple</Button>
                    <Button variant="secondary">Advanced</Button>
                    <Button hidden disabled variant="secondary">
                        Monte-Carlo
                    </Button>
                </div>
            </div>
            <div className="flex items-center space-x-40 gap-30">
                <fieldset className="mx-20">
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

                <div>
                    <table className="border-separate border-spacing-4 text-center ">
                        <thead className="sticky top-0">
                            <tr>
                                <th>Year</th>
                                <th>Total Income</th>
                            </tr>
                        </thead>
                        <tbody>
                            {incomePerMonth.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{value[value.length - 1]}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div>Future Graph</div>
            </div>
        </main>
    );
}
