var $ = function(el) {
    return document.querySelector(el);
};

var userName = $('#name input');
var userPassword = $('#password input');
var userMail = $('#mail input');
var userPhoneNumber = $('#phoneNumber input');
var pass = false;

function checkName(tag) {
    var tip = tag.nextElementSibling;
    var str = tag.value;
    if (!pass) {
        tag.nextElementSibling.style.display = 'inline-block';
    }
    if (GetLength(str) == 0) {
        tip.innerHTML = '姓名不能为空';
        tip.style.color = 'red';
        tag.style.border = '2px solid red';
    } else if (GetLength(str) >= 4 && GetLength(str) <= 16) {
        tip.innerHTML = '格式正确';
        tip.style.color = 'lightgreen';
        tag.style.border = '2px solid lightgreen';
        pass = true;
    } else {
        tip.innerHTML = '字符数应为4~16位';
        tip.style.color = 'red';
        tag.style.border = '2px solid red';
    }

}

function checkEmail(tag) {
    var tip = tag.nextElementSibling;
    var str = tag.value;
    var emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!pass) {
        tag.nextElementSibling.style.display = 'inline-block';
    }
    if (emailFilter.test(str)) {
        tip.innerHTML = '格式正确';
        tip.style.color = 'lightgreen';
        tag.style.border = '2px solid lightgreen';
        pass = true;
    } else {
        tip.innerHTML = '请输入正确的邮箱地址';
        tip.style.color = 'red';
        tag.style.border = '2px solid red';
    }

}


function checkPhoneNumber(tag) {
    var tip = tag.nextElementSibling;
    var str = tag.value;
    var phoneNumberFilter = /^1[3|4|5|7|8]\d{9}$/;
    if (!pass) {
        tag.nextElementSibling.style.display = 'inline-block';
    }
    if (phoneNumberFilter.test(str)) {
        tip.innerHTML = '格式正确';
        tip.style.color = 'lightgreen';
        tag.style.border = '2px solid lightgreen';
        pass = true;
    } else {
        tip.innerHTML = '请输入正确的手机号码';
        tip.style.color = 'red';
        tag.style.border = '2px solid red';
    }

}





function hiddenTip(tag) {
    if (pass) {
        tag.nextElementSibling.style.display = 'none';
        tag.style.border = '1px solid black';
        pass = false;
    }
}
function GetLength(str) {
    var realLength = 0;
    for (var i = 0; i < str.length; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 2;
    }
    return realLength;
};