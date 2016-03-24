function Hamming() {

}

Hamming.prototype.compute = function(dnaA, dnaB) {
    if(dnaA === dnaB) {
        return 0;
    } else {
        return 1;
    }
}

module.exports = Hamming;