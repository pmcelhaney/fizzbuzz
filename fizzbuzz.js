for (let i = 1; i <= 100; i++) {

    console.log(fizzBuzz(i))
}

function fizzBuzz(i) {
    if (i % 3 === 0)  return 'fizz';
    return i;
}