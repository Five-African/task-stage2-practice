var $ = function(el) {
    return document.querySelector(el);
};

function isSchool(tag){
    var tagStyle = tag.style;
    $("#notStudent").style.display="none";
    $("#student").style.display="block";
}
function notSchool(tag) {
    var tagStyle = tag.style;
    $("#notStudent").style.display="block";
    $("#student").style.display="none";
}