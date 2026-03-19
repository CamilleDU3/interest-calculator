//TODO: add calculation of income using future value of an ordinary annuity (interest calculation upon contribution)
//          then display it on the chart and the graph
export default function calculateIncomePerMonth(
    inputInitialCapital: number,
    inputMonthlyIncrement: number,
    inputInvestLengthYear: number,
    inputInvestLengthMonth: number,
    inputInterestRate: number,
    inputInterestRateCompoundTime: number,
    inputInflationRate: number
): number[][] {
    //1- We convert every string argument to number
    const initialCapital = Number(inputInitialCapital);
    const monthlyIncrement = Number(inputMonthlyIncrement);
    const investLengthYear = Number(inputInvestLengthYear);
    const investLengthMonth = Number(inputInvestLengthMonth);
    const interestRate = Number(inputInterestRate);
    const interestRateCompoundTime = Number(inputInterestRateCompoundTime);
    const inflationRate = Number(inputInflationRate);

    //2- followed by calculating the financial constant used for the simulation
    const totalMonths = investLengthYear * 12 + investLengthMonth;

    const monthlyInterestRate =
        1 + interestRate / 100 / interestRateCompoundTime;
    const monthlyInflationRate = 1 + inflationRate / 100 / 12;
    const monthlyNetRate = monthlyInterestRate / monthlyInflationRate;

    //3- then we simulate the income of each month
    const yearlyIncome: number[][] = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, initialCapital], //year 0 = only initial capital
    ];
    let currYear: number[] = [];
    let currBalance: number = initialCapital;
    for (let i = 1; i <= totalMonths; i++) {
        currBalance = (currBalance + monthlyIncrement) * monthlyNetRate;
        currYear.push(Number(currBalance.toFixed(2)));
        if (currYear.length === 12 || i === totalMonths) {
            yearlyIncome.push(currYear);
            currYear = [];
        }
    }

    //4- and finally trunc them before returning the values without floating part
    const yearlyIncomeInt: number[][] = yearlyIncome.map((yearData) =>
        yearData.map((monthlyIncome) => Math.trunc(monthlyIncome))
    );
    return yearlyIncomeInt;
}
