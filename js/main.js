function collector(num) {
    num = prompt("sonni kiritmang birinchi bolib !")
    while (!isNaN(num)) {
        arr.push(num);
        num = prompt("kiritishdan tuxtamang")
    }
    return arr;
}
let arr = [];

console.log(collector(arr));