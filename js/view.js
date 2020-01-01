var arrey = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var inp = document.getElementsByTagName("section")[0];


function inputCode() {
    inp.innerHTML = `<div id="timer">The lock will open in:<span id="second"> 60</span></div>
    <div class="boxpass"><input id="inpPassword" name="theCode" type="password" maxlength="4" placeholder="  enter here your code:"><button class="btn btn_password">enter</button>
            <button class="btn changecode">changeCode</button></div>
             
            <div id="master"></div>`;
}

function createHtml() {
    var master = document.getElementById("master");
    arrey.forEach(number => {
        var numDiv = document.createElement("div");
        numDiv.id = `main${number}`;
        numDiv.className = "numbers btn";
        if (number == 0) {
            numDiv.id = "zero";
        }
        numDiv.innerHTML = number;
        master.appendChild(numDiv);
    });
}

function red(x) {
    x.classList.add("red");
}

function myAlert(x) {
    alert(x)
}

function clierPassword() {
    document.querySelectorAll(".red").forEach(x => {
        x.className = ("numbers btn");
    })
}

function bodyColor() {
    var a = document.getElementsByTagName("body")[0];
    if (a.style.backgroundColor == "red") {
        a.style.backgroundColor = "white";
    } else {
        a.style.backgroundColor = "red";
    }
}

function timer() {
    var atimer = document.getElementById("timer");
    var b = document.getElementById("inpPassword");
    if (atimer.style.display == "block") {
        atimer.style.display = "none";
        b.style.marginTop = "50px";
    } else {
        atimer.style.display = "block";
        b.style.marginTop = "0";
    }
}

function s60() {
    var c = document.getElementById("second");
    var a = 60;
    setInterval(() => {
        a--;
        c.innerHTML = a;
        c.style.marginLeft = "5px";
        if (a == 0) {
            a = 0;
            clearInterval();
        }
    }, 1000);

}
export {
    createHtml,
    inputCode,
    myAlert,
    red,
    clierPassword,
    bodyColor,
    timer,
    s60
}