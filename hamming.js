function Hamming() {
    this.hammingDistance = 0;
}

Hamming.prototype.compute = function(dnaA, dnaB) {
    if (dnaA.length != dnaB.length) {
        throw new Error('DNA strands must be of equal length.');
    }

    this.hammingDistance = 0;
    for (var i = 0; i < dnaA.length; i++) {
        if (dnaA[i] != dnaB[i]) {
            this.hammingDistance++;
        }
    }
    return this.hammingDistance;
}

module.exports = Hamming;