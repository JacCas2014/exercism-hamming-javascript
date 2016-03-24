function Hamming() {

}

Hamming.prototype.compute = function(dnaA, dnaB) {
    if(dnaA === dnaB) {
        return 0;
    }
}

module.exports = Hamming;