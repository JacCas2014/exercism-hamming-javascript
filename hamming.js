function Hamming() {

}

Hamming.prototype.compute = function(dnaA, dnaB) {
    if (dnaA.length != dnaB.length) {
        throw new Error('DNA strands must be of equal length.');
    }

    var hammingDistance = 0;
    for (var i = 0; i < dnaA.length; i++) {
        if (dnaA[i] != dnaB[i]) {
            hammingDistance++;
        }
    }
    return hammingDistance;
}

module.exports = Hamming;