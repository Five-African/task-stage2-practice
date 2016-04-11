var $ = function(el) {
    return document.querySelector(el);
};

function isSchool(tag){
    var tagStyle = tag.style;
    if(tag.checked){
        $("#notStudent").style.display="inline-block";
    }
}
function notSchool(tag) {
    var tagStyle = tag.style;
    if(tag.checked){
        $("#notStudent").style.display="none";
    }
}