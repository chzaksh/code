var code = "1234";
var memory = localStorage.getItem("theCode"); 
var trueCode = "";
var falseCode = 0;


function checkCode() {
    if (memory == null || memory == 1234) {
        putCodeInLS("theCode", code);
        return true;
    } else {
        return false;
    }
}

function putCodeInLS(y, x) {
    localStorage.setItem(y, x);
    code = x;
    memory = x;
}

function checkOld(x) {
    if (x == memory) {
        return true
    } else {
        return false
    }
}

function getTrueCode(c) {
    trueCode += c;
    if (trueCode.length == 4) {
        return true
    }
}

function getfalseCode(){
    falseCode++;
    if (falseCode==3){
        falseCode =0;
         return true;
    }
}
function clierBtn() {
    trueCode = "";
}

function checkBtn(x) {
    if (x == memory) {
        return true;
    } else {
        return false;
    }
}
function clierNum(){
    trueCode = "";
}


export {
    putCodeInLS,
    checkCode,
    falseCode,
    checkOld,
    getTrueCode,
    clierBtn,
    checkBtn,
    trueCode,
    getfalseCode,
    clierNum

}