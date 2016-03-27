function Hamming() {

}

Hamming.prototype.compute = function(dnaA, dnaB) {
    var hammingDistance = 0;
    for (var i = 0; i < dnaA.length; i++) {
        if (dnaA[i] != dnaB[i]) {
            hammingDistance++;
        }
    }
    return hammingDistance;
}

module.exports = Hamming;