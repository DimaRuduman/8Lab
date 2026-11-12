function contract(fn, ...types) {
    function contractItems(...args) {
    for (let i = 0; i < args.length; i++) {
        let type = types[i].name.toLowerCase()
         if (typeof args[i] != type) {
         throw new TypeError("Неправильний тип аргументу")
            }
        }
        let result = fn(...args)
        let resultType = types[types.length - 1].name.toLowerCase()
        if (typeof result != resultType) {
            throw new TypeError("Неправильний тип результату")
        }
    return result
    }
return contractItems
}
const add = (a, b) => a + b
const addNumbers = contract(add, Number, Number, Number)
let res = addNumbers(2, 3)
console.log(res)