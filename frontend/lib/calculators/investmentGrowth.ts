//TODO: remove all yearly aspect and only let month remain
//      then add a function that converts from month to year the values that are displayed
//TODO: move all types that are used at several places like this one in a single folder
export type InvestmentResult = {
    balance: number;
    accInvestment: number;
    yearlyInvestment: number;
    accInterest: number;
    yearlyInterest: number;
    yearlyInterestShare: number;
};
export default function calcInvestmentGrowth(
    initialCapital: number,
    monthlyIncrement: number,
    investLengthYear: number,
    investLengthMonth: number,
    interestRate: number,
    interestRateCompoundTime: number,
    inflationRate: number
): InvestmentResult[] {
    const inflationRateCompoundTime = 12;

    //1- we declare the constants used for the simulation
    const termMonths = investLengthYear * 12 + investLengthMonth;
    const monthlyInterestRate =
        1 + interestRate / 100 / interestRateCompoundTime;
    const monthlyInflationRate =
        1 + inflationRate / 100 / inflationRateCompoundTime;
    const monthlyNetRate = monthlyInterestRate / monthlyInflationRate;

    //3- then we simulate the balance of each month and return the result
    const investmentResults: InvestmentResult[] = [
        {
            balance: initialCapital,
            accInvestment: initialCapital,
            yearlyInvestment: 0,
            accInterest: 0,
            yearlyInterest: 0,
            yearlyInterestShare: 0,
        },
    ];
    let currBalance: number = investmentResults[0].balance;
    let accInvestment: number = investmentResults[0].accInvestment;
    let yearlyInvestment: number = investmentResults[0].yearlyInvestment;
    let accInterest: number = investmentResults[0].accInterest;
    let yearlyInterest: number = investmentResults[0].yearlyInterest;
    for (let index = 1; index <= termMonths; index++) {
        const prevBalance = currBalance;
        const newBalance = (currBalance + monthlyIncrement) * monthlyNetRate;

        currBalance = newBalance;
        accInvestment += monthlyIncrement;
        yearlyInvestment += monthlyIncrement;
        const interest = newBalance - (prevBalance + monthlyIncrement);
        accInterest += interest;
        yearlyInterest += interest;

        const yearlyInterestShare =
            yearlyInterest / (yearlyInterest + yearlyInvestment);

        investmentResults.push({
            balance: Number(currBalance.toFixed(2)),
            accInvestment: Number(accInvestment.toFixed(2)),
            yearlyInvestment: Number(yearlyInvestment.toFixed(2)),
            accInterest: Number(accInterest.toFixed(2)),
            yearlyInterest: Number(yearlyInterest.toFixed(2)),
            yearlyInterestShare: Number(yearlyInterestShare.toFixed(2)),
        });

        //We set yearlyInterest and yearlyInvestment to 0 on each new year (=12months)
        if (index % 12 === 0) {
            yearlyInterest = 0;
            yearlyInvestment = 0;
        }
    }
    return investmentResults;
}
