"use strict";
const openTab = (e, t) => {
    let a, l, s;
    l = document.getElementsByClassName("agy-tabcontent");
    for (let e = 0; e < l.length; e++) l[e].style.display = "none";
    for (s = document.getElementsByClassName("agy-tablinks"), a = 0; a < s.length; a++) s[a].className = s[a].className.replace(" agy-active", "");
    document.getElementById(t).style.display = "block", e.currentTarget.className += " agy-active"
};
document.getElementById("default-open").click();