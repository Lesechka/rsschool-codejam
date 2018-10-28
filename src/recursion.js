module.exports = function recursion(tree) {
    const resultArr = [];
    let stage = 0;
    (function throughTree(node) {
        if (node.left) {
            stage += 1;
            throughTree(node.left);
            stage -= 1;
        }
        if (node.right) {
            stage += 1;
            throughTree(node.right);
            stage -= 1;
        }
        if (!resultArr[stage]) {
            resultArr[stage] = [];
        }
        resultArr[stage].push(node.value);
    }(tree));
    return resultArr;
}
