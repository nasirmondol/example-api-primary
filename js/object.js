const shopping = {
    name: 'Product',
    products: ['laptop', 'mobile', 'watch', 'keyboard', 'Mouse', 'sound-box'],
    person: {
        first: 'Alia',
        second: 'Dalia',
    },
    budget: 360000,
    open: true,
    close: false,
}
// console.log(shopping);
const jsStringify = JSON.stringify(shopping);
// console.log(jsStringify);
const jsParse = JSON.parse(jsStringify);
console.log(jsParse);