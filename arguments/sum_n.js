function sum() {
    const argumentsArray = Array.from(arguments); // arguments is not an typical Array, huh.
    return argumentsArray.reduce((total, i) => total + i, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));