// Converting roman to numeral
function deromanize(a) {
    let str = a.toUpperCase(),
        validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
        token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
        key = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1},
        num1 = 0, m;
    if (!(str && validator.test(str)))
        return -1;
    while (m = token.exec(str))
        num1 += key[m[0]];
    return num1;
}
module.exports=deromanize