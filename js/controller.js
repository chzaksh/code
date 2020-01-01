import * as view from "./view.js";
import * as model from "./model.js";


var enter = null;
var enterCode = null;
var time = "";

export function init() {
    view.inputCode();
    view.createHtml();
    document.getElementsByClassName("changecode")[0].addEventListener("click", chengeCode);
    aEL();
    getCheckCode();
};

function getCheckCode() {
    if (model.checkCode(model.checkCode)) {
        view.myAlert("change the code, old code is: 1234.");
    } else {
        view.myAlert("push your code the button");
    }
}

function chengeCode() {
    enter = document.getElementsByClassName("btn_password")[0];
    enterCode = document.getElementById("inpPassword");
    for (let i = 0; i < 3; i++) {
        var oldCode = prompt("enter old code:");
        if (!oldCode) {
            break;
        }
        if (model.checkOld(oldCode)) {
            view.myAlert("inpot your code");
            enter.addEventListener("click", langthNewCode);
            break;
        } else {
            var a = i + 1;
            var trys = " try:" + a + "/3";
            view.myAlert("Password don't match" + trys);
        }
    }
}

function langthNewCode() {
    var enterVal = enterCode.value;
    enter.removeEventListener("click", langthNewCode);
    if (enterVal.length == 4) {
        model.putCodeInLS("theCode", enterVal);
        enterVal = "";
    } else {
        enterVal = "";
        view.myAlert("enter 4 number");
        chengeCode();
    }
}

function aEL() {
    document.querySelectorAll('.numbers').forEach(btn => {
        btn.addEventListener("click", start);
    })
}

function rEL() {
    document.querySelectorAll('.numbers').forEach(btn => {
        btn.removeEventListener("click", start);
    })
}


function start() {
    view.red(this);
    dTimeout(time);
    timer();
    var b = this.id;
    var c = b[b.length - 1];
    if (model.getTrueCode(c)) {
        rEL();
        checkes();
    }
}


function checkes() {
    if (model.checkBtn(model.trueCode)) {
        model.clierBtn();
        view.myAlert("your code true");
    } else {
        aEL();
        try3();
    }
    clier();
}

function try3() {
    view.myAlert("try again Password don't match" + (model.falseCode + 1) + "/3")
    if (model.getfalseCode()) {
        taimerMinute();
    }
}

function taimerMinute() {
    view.s60();
    view.bodyColor();
    view.timer();
    rEL();
    setTimeout(function () {
        clier();
        aEL();
        view.bodyColor();
        view.timer();
    }, 60000);
}

function timer() {
    time = setTimeout(function () {
        clier();
    }, 3000);
}


function clier() {
    view.clierPassword();
    model.clierNum();
}

function dTimeout(x) {
    clearTimeout(x);
}