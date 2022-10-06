var dobHTML = document.querySelector("#dob");
var luckyNumberHTML = document.querySelector("#lucky-num");
var outputDiv = document.querySelector("#output");

var btnCheckLuckyNum = document.querySelector("#check-lucky-num");

function isYourBirthdayLucky() {
    var dobValue = dobHTML.value;
    var luckyNum = luckyNumberHTML.value;
    var sum = 0;

    if(dobValue == "" || luckyNum == "") {
        outputDiv.innerText = "Enter both fields to check whether your birthday is lucky or not."
    }
    else {
        if(luckyNum < 0)
        {
            outputDiv.innerHTML = "Please check lucky number: Enter only positive lucky number"
        }
        else
        {
            dobValue = dobValue.replaceAll("-", "");
            for(var i = 0; i < dobValue.length; i++) {
                sum += parseInt(dobValue.charAt(i));
            }
            if(sum % luckyNum == 0) {
                //lucky
                outputDiv.innerText = "Your birthday is lucky";
            }
            else {
                //unlucky
                outputDiv.innerText = "Your birthday is not lucky";
            }
        }
    }
}

btnCheckLuckyNum.addEventListener("click", isYourBirthdayLucky);