export default function calcInvestmentGrowth(
    inputInitialCapital: number,
    inputMonthlyIncrement: number,
    inputInvestLengthYear: number,
    inputInvestLengthMonth: number,
    inputInterestRate: number,
    inputInterestRateCompoundTime: number,
    inputInflationRate: number
): number[] {
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

    //3- then we simulate the balance of each month
    const balances: number[] = [initialCapital]; //year 0 = only initial capital
    let currBalance: number = initialCapital;
    for (let i = 1; i <= totalMonths; i++) {
        currBalance = (currBalance + monthlyIncrement) * monthlyNetRate;
        balances.push(Number(currBalance.toFixed(2)));
    }

    //4- and finally truncate them before returning the values without floating part
    return balances.map((monthlyBalance) => Math.trunc(monthlyBalance));
}
