function reverse(input) {
    var outString = '';
    for (let i=input.length - 1; i >=0; i--) {
        let element = input.charAt(i)
        outString += element;
    }
    return outString;
}

module.exports = reverse;