/*
javascript:(function(){var a=document.createElement("script");a.type="text/javascript";a.setAttribute("id","thescriptthingy");a.src="https://zution.github.io/states/script.js";a.onerror=function(){alert("There is likely a security setting preventing this from running, made by the creator of this site.\n\nBlocking pop-ups on a site will prevent the link from opening. If you want, you can allow pop-ups, but make sure to only do it on sites you trust.");window.open("https://states.typhonz.repl.co/")};if(document.getElementById("thescriptthingy")!==null){document.getElementsByTagName("body")[0].appendChild(a)}test})();
*/

// init
const states = ["Washington", "Oregon", "California", "Arizona", "Nevada", "Utah", "Idaho", "Montana", "Wyoming", "Colorado", "New Mexico", "Texas", "Oklahoma", "Kansas", "Nebraska", "South Dakota", "North Dakota", "Minnesota", "Iowa", "Missouri", "Arkansas", "Louisiana", "Wisconsin", "Michigan", "Illinois", "Indiana", "Ohio", "Kentucky", "Tennessee", "Mississippi", "Alabama", "Georgia", "Florida", "South Carolina", "North Carolina", "Virginia", "West Virginia", "Pennsylvania", "New York", "Vermont", "New Hampshire", "Maine", "Massachusetts", "Rhode Island", "Connecticut", "New Jersey", "Delaware", "Maryland", "Alaska", "Hawaii"];
const abbreviations = ["WA", "OG", "CA", "AZ", "NV", "UT", "ID", "MT", "WY", "CO", "NM", "TX", "OK", "KS", "NE", "SD", "ND", "MN", "IA", "MO", "AR", "LA", "WI", "MI", "IL", "IN", "OH", "KY", "TN", "MS", "AL", "GA", "FL", "SC", "NC", "VA", "WV", "PA", "NY", "VT", "NH", "ME", "MA", "RI", "CT", "NJ", "DE", "MD", "AK", "HI"];
const capitals = ["Olympia", "Salem", "Sacremento", "Phoenix", "Carson City", "Salt Lake City", "Boise", "Helena", "Cheyenne", "Denver", "Santa Fe", "Austin", "Oklahoma City", "Topeka", "Lincoln", "Pierre", "Bismarck", "Saint Paul", "Des Moines", "Jefferson City", "Little Rock", "Baton Rouge", "Madison", "Lansing", "Springfield", "Indianapolis", "Columbus", "Frankfort", "Nashville", "Jackson", "Montgomery", "Atlanta", "Tallahassee", "Columbia", "Raleigh", "Richmond", "Charleston", "Harrisburg", "Albany", "Montpelier", "Concord", "Augusta", "Boston", "Providence", "Hartford", "Trenton", "Dover", "Annapolis", "Juneau", "Honolulu"];
var num;
var randNum;

function closeImg() {
    let elem = document.getElementById("statesImg");
    elem.remove();
    elem = document.getElementById("statesBtn");
    elem.remove();
}

function test() {
num = Math.floor(Math.random() * (51 - 0) + 0);
randNum = Math.floor(Math.random() * (3 - 1) + 1);

if (randNum === 1) {
    let ans = prompt("What is the capital of " + states[num]);
    if (ans !== capitals[num]) {
    	alert("The capital of " + states[num] + " is " + capitals[num]);
    }
    
    ans = prompt("What is the abbreviation of " + states[num]);
    if (ans !== abbreviations[num]) {
    	alert("The abbreviation of " + states[num] + " is " + abbreviations[num]);
    }
}

if (randNum === 2) {
    
    if (document.getElementById("statesBtn") == null) {
        var el = document.createElement("div");
        el.innerHTML = "<img src='https://www.geoguessr.com/seterra/mapimage/4003.png'></img>";
        el.setAttribute("id","statesImg");
        document.getElementsByTagName('body')[0].appendChild(el);

        el = document.getElementById("statesImg");
        el.style.position = "absolute";
        el.style.left = "10px";
        el.style.top = "10px";
        el.style.zIndex = "2147483646";

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
            alert("Correct.");
        } else {
            alert("The state was " + states[num]);
        }
    }, 500);
}
}
