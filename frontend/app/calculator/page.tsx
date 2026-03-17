'use client';
import Button from '@/components/Button';
import InputNumber from '@/components/InputNumber';
import { useState } from 'react';

//TODO: create the function to handle onChange event of inputs (=recalculation and update of the graph)
//TODO: update the UI so that investment length of year and month are next to each other with only one label : Investment Length
//TODO: add the compound type (before increment, after increment) input
//TODO: add the graph
export default function calculator() {
    const [initialCapital, setInitialCapital] = useState('10000');
    const [monthlyIncrement, setMonthlyIncrement] = useState('1000');
    const [investLengthYear, setInvestLengthYear] = useState('10');
    const [investLengthMonth, setInvestLengthMonth] = useState('6');
    const [interestRate, setInterestRate] = useState('7.52');
    const [compoundTime, setCompoundTime] = useState('12');
    const [monthlyInflationRate, setMonthlyInflationRate] = useState('2');

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
            <div className="flex items-center space-x-40">
                <fieldset className="mx-20">
                    <InputNumber
                        id="initial-capital"
                        labelText="Initial Capital"
                        required
                        min="0"
                        step="1"
                        value={initialCapital}
                        onChange={(e) => {
                            setInitialCapital(e.target.value);
                        }}
                    />
                    <InputNumber
                        id="monthly-increment"
                        labelText="Monthly Increment"
                        required
                        min="0"
                        value={monthlyIncrement}
                        onChange={(e) => {
                            setMonthlyIncrement(e.target.value);
                        }}
                    />{' '}
                    <InputNumber
                        id="investment-length-year"
                        labelText="Investment Length Years"
                        required
                        min="0"
                        value={investLengthYear}
                        onChange={(e) => {
                            setInvestLengthYear(e.target.value);
                        }}
                    />{' '}
                    <InputNumber
                        id="investment-length-month"
                        labelText="Investment Length Months"
                        required
                        min="0"
                        value={investLengthMonth}
                        onChange={(e) => {
                            setInvestLengthMonth(e.target.value);
                        }}
                    />{' '}
                    <InputNumber
                        id="interest-rate-percent"
                        labelText="Interest Rate (%)"
                        required
                        min="0"
                        step="0.01"
                        value={interestRate}
                        onChange={(e) => {
                            setInterestRate(e.target.value);
                        }}
                    />{' '}
                    <InputNumber
                        id="compound-time"
                        labelText="Compound every X months"
                        required
                        min="0"
                        value={compoundTime}
                        onChange={(e) => {
                            setCompoundTime(e.target.value);
                        }}
                    />
                    <InputNumber
                        id="monthly-inflation-rate"
                        labelText="Monthly Inflation Rate"
                        required
                        min="0"
                        value={monthlyInflationRate}
                        onChange={(e) => {
                            setMonthlyInflationRate(e.target.value);
                        }}
                    />
                </fieldset>

                <div>Future Graph</div>
            </div>
        </main>
    );
}
