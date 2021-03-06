/*
javascript:(function(){
var el = document.createElement("script");
el.setAttribute("src","https://zution.github.io/states/script.js");
document.getElementsByTagName('body')[0].appendChild(el);
})();

javascript:(function(){var el = document.createElement("script");el.setAttribute("src","https://zution.github.io/states/script.js");document.getElementsByTagName('body')[0].appendChild(el);})();
*/

// init
const states = ["Washington", "Oregon", "California", "Arizona", "Nevada", "Utah", "Idaho", "Montana", "Wyoming", "Colorado", "New Mexico", "Texas", "Oklahoma", "Kansas", "Nebraska", "South Dakota", "North Dakota", "Minnesota", "Iowa", "Missouri", "Arkansas", "Louisiana", "Wisconsin", "Michigan", "Illinois", "Indiana", "Ohio", "Kentucky", "Tennessee", "Mississippi", "Alabama", "Georgia", "Florida", "South Carolina", "North Carolina", "Virginia", "West Virginia", "Pennsylvania", "New York", "Vermont", "New Hampshire", "Maine", "Massachusetts", "Rhode Island", "Connecticut", "New Jersey", "Delaware", "Maryland", "Alaska", "Hawaii"];
const abbreviations = ["WA", "OG", "CA", "AZ", "NV", "UT", "ID", "MT", "WY", "CO", "NM", "TX", "OK", "KS", "NE", "SD", "ND", "MN", "IA", "MO", "AR", "LA", "WI", "MI", "IL", "IN", "OH", "KY", "TN", "MS", "AL", "GA", "FL", "SC", "NC", "VA", "WV", "PA", "NY", "VT", "NH", "ME", "MA", "RI", "CT", "NJ", "DE", "MD", "AK", "HI"];
const capitals = ["Olympia", "Salem", "Sacremento", "Phoenix", "Carson City", "Salt Lake City", "Boise", "Helena", "Cheyenne", "Denver", "Santa Fe", "Austin", "Oklahoma City", "Topeka", "Lincoln", "Pierre", "Bismarck", "Saint Paul", "Des Moines", "Jefferson City", "Little Rock", "Baton Rouge", "Madison", "Lansing", "Springfield", "Indianapolis", "Columbus", "Frankfort", "Nashville", "Jackson", "Montgomery", "Atlanta", "Tallahassee", "Columbia", "Raleigh", "Richmond", "Charleston", "Harrisburg", "Albany", "Montpelier", "Concord", "Augusta", "Boston", "Providence", "Hartford", "Trenton", "Dover", "Annapolis", "Juneau", "Honolulu"];
var num;
var randNum;

var testType = prompt("Which test type, questions (random questions for random states), or test (asks questions for all states)?");
testType = testType.toLowerCase();
if (testType !== "questions" && testType !== "test") {
    do {
        testType = prompt("Invalid answer. Which test type, questions (random questions for random states), or test (asks questions for all states)?");
        testType = testType.toLowerCase();
    } while (testType !== "questions" && testType !== "test");
}

function closeImg() {
    let elem = document.getElementById("statesImg");
    elem.remove();
    elem = document.getElementById("statesBtn");
    elem.remove();
}

// Option 1: Questions (random questions)
if (testType === "questions") {
    document.addEventListener("keypress", function(event) {
        if (event.keyCode == 13) {
            test();
        }
    });

    function test() {
        num = Math.floor(Math.random() * (50 - 0) + 0);
        randNum = Math.floor(Math.random() * (3 - 1) + 1);

        if (randNum === 1) {
            let ans = prompt("What is the capital of " + states[num] + "?");
            if (ans !== capitals[num]) {
                alert("The capital of " + states[num] + " is " + capitals[num] + ".");
            }

            ans = prompt("What is the abbreviation of " + states[num]);
            if (ans !== abbreviations[num]) {
                alert("The abbreviation of " + states[num] + " is " + abbreviations[num] + ".");
            }
        }

        if (randNum === 2) {
            if (document.getElementById("statesBtn") == null) {
                var el = document.createElement("img");
                el.setAttribute("src","https://www.geoguessr.com/seterra/mapimage/4003.png");
                el.setAttribute("id","statesImg");
                document.getElementsByTagName('body')[0].appendChild(el);

                el = document.getElementById("statesImg");
                el.style.position = "absolute";
                el.style.left = "5px";
                el.style.top = "5px";
                el.style.zIndex = "2147483646";
                el.style.width = "33%";
                el.style.height = "auto";

                el = document.createElement("button");
                el.innerHTML = "X";
                el.setAttribute("id","statesBtn");
                el.setAttribute("onclick","closeImg();");
                document.getElementsByTagName('body')[0].appendChild(el);

                el = document.getElementById("statesBtn");
                el.style.position = "absolute";
                el.style.left = "10px";
                el.style.top = "10px";
                el.style.zIndex = "2147483647";
                el.style.border = "none";
                el.style.fontFamily = "Monospace";
                el.style.cursor = "pointer";
            }

            setTimeout(() => {
                let num2 = num + 1;
                let ans = prompt("Which state represents number " + num2 + " on the map?");
                if (ans === states[num]) {
                    // idk
                } else {
                    alert("The state was " + states[num] + ".");
                }
            }, 500);
        }
    }
}

// Option 2: Test (All states, random order)
if (testType === "test") {
    var el = document.createElement("img");
    el.setAttribute("src","https://www.geoguessr.com/seterra/mapimage/4003.png");
    el.setAttribute("id","statesImg");
    document.getElementsByTagName('body')[0].appendChild(el);

    el = document.getElementById("statesImg");
    el.style.position = "absolute";
    el.style.left = "5px";
    el.style.top = "5px";
    el.style.zIndex = "2147483646";
    el.style.width = "33%";
    el.style.height = "auto";

    el = document.createElement("button");
    el.innerHTML = "X";
    el.setAttribute("id","statesBtn");
    el.setAttribute("onclick","closeImg();");
    document.getElementsByTagName('body')[0].appendChild(el);

    el = document.getElementById("statesBtn");
    el.style.position = "absolute";
    el.style.left = "10px";
    el.style.top = "10px";
    el.style.zIndex = "2147483647";
    el.style.border = "none";
    el.style.fontFamily = "Monospace";
    el.style.cursor = "pointer";
    
    const pastNum = [];
    
    setTimeout(() => {
        for (let i = 0; i < 50; i++) {
            let num;
            do {
                num = Math.floor(Math.random() * (50 - 0) + 0);
            } while (typeof num === 'undefined' || pastNum.indexOf(num) !== -1);
            pastNum.push(num);

            let num2 = num + 1;

            let ans = prompt("What is state number " + num2 + "?");
            if (ans !== states[num]) {
                alert("The state was " + states[num]);
            }
            
            ans = prompt("What is the capital of " + states[num] + "?");
            if (ans !== capitals[num]) {
                alert("The capital of " + states[num] + " is " + capitals[num] + ".");
            }
            
            ans = prompt("What is the abbreviation of " + states[num] + "?");
            if (ans !== abbreviations[num]) {
                alert("The abbreviation of " + states[num] + " is " + abbreviations[num] + ".");
            }
        }
    }, 500);
}
