let calculateIncome = function () {
    return 4000;
}
console.log(calculateIncome());

let calculateIncomeArrow = (allowance: number, tax: number) => 4500 + allowance - tax;

console.log(calculateIncomeArrow(200, 50));