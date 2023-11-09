function progress() {
    var name = document.getElementsByClassName("text")[0].value;
    if (name.length == 3) {
        document.getElementsByClassName("progress")[0].classList.add("animate-progress");
        setTimeout(() => {
            document.getElementsByClassName("progress")[0].classList.remove("animate-progress");
            document.getElementsByClassName("progress")[0].style.width = "17%";
        }, 190);
    }
};
var animation = setInterval(() => {
    var radio1 = document.getElementsByClassName("radio")[0].checked;
    var radio2 = document.getElementsByClassName("radio")[1].checked;
    if (radio1 == true || radio2 == true) {
        document.getElementsByClassName("progress")[0].classList.add("animate-progress2");
        setTimeout(() => {
            document.getElementsByClassName("progress")[0].classList.remove("animate-progress2");
            document.getElementsByClassName("progress")[0].style.width = "34%";
            clearInterval(animation);
        }, 190);
    }
}, 1);
var animation2 = setInterval(() => {
    var radio3 = document.getElementsByClassName("radio")[2].checked;
    var radio4 = document.getElementsByClassName("radio")[3].checked;
    if (radio3 == true || radio4 == true) {
        document.getElementsByClassName("progress")[0].classList.add("animate-progress3");
        setTimeout(() => {
            document.getElementsByClassName("progress")[0].classList.remove("animate-progress3");
            document.getElementsByClassName("progress")[0].style.width = "51%";
            clearInterval(animation2);
        }, 190);
    }
}, 1);
function progress2() {
    var name1 = document.getElementsByClassName("text2")[0].value;
    if (name1.length == 3) {
        document.getElementsByClassName("progress")[0].classList.add("animate-progress4");
        setTimeout(() => {
            document.getElementsByClassName("progress")[0].classList.remove("animate-progress4");
            document.getElementsByClassName("progress")[0].style.width = "68%";
        }, 190);
    }
};
function progress3() {
    document.getElementsByClassName("progress")[0].classList.add("animate-progress5");
    setTimeout(() => {
        document.getElementsByClassName("progress")[0].classList.remove("animate-progress5");
        document.getElementsByClassName("progress")[0].style.width = "85%";
    }, 190);
};
function progress4() {
    document.getElementsByClassName("progress")[0].classList.add("animate-progress6");
    setTimeout(() => {
        document.getElementsByClassName("progress")[0].classList.remove("animate-progress6");
        document.getElementsByClassName("progress")[0].style.width = "100%";
    }, 190);
};