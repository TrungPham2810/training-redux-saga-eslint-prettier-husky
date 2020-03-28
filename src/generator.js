console.log('generator');

function* hello() {
    yield 2019;
    yield 2222;
    return 'xxxxxxxxx';
    throw 'error';
    yield 2222;
}

// var result = hello();
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());


function * testloop() {
    while(true) {
        yield 'xxxxxxx'
    }
}

// var iterator =  testloop();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

function * one() {
    yield 11111;
    yield 2222;
    yield 3333;
}

function * two() {
    yield 'aaaaa';
    yield * one();
    yield 'bbbbb';
    yield 'ccccc';
}
var testnumber =  two();

console.log(testnumber.next());
console.log(testnumber.next());
console.log(testnumber.next());
console.log(testnumber.next());
console.log(testnumber.next());
console.log(testnumber.next());
