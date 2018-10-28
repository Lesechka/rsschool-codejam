function sum(a, b) {
    return a + b;
}
module.exports = function make(...arguments) {
    const arrOfArgs = [];
    arrOfArgs.push(...arguments);
    return function result (...args) {
        if (typeof args[0] === 'function') {
            const func = args[0];
            return arrOfArgs.reduce((acc, num) => func(acc, num));
        }
        arrOfArgs.push(...args);
        return result;
    }
}
