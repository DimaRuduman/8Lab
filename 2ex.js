function store(value) {
    function read() {
    return value;
    }
    return read;
}
const myFunction = store(5);
console.log(myFunction());