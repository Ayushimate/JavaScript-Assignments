function printTable()
{
    for(let i = 0; i <= 10; i++) {
        res = i*num;
        console.log(num, '*', i, '=', res);
    }
}
let num = prompt("Enter a number: ");
console.log('Table of', num, 'is as follows:');
// console.log('/n');
printTable(num);