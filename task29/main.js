var a = document.getElementById('msg');
var b = document.getElementById('tip');

function xxx() {
    var msg = a.value;
    if(GetLength(msg) == 0){
        document.getElementById('tip').innerHTML = '姓名不能为空';
        b.style.color = 'red';
        a.style.border = '2px solid red';
    }
    else if(GetLength(msg) >= 4 && GetLength(msg) <= 16){
        document.getElementById('tip').innerHTML = '格式正确';
        b.style.color = 'lightgreen';
        a.style.border = '2px solid lightgreen';
    }
    else {
        document.getElementById('tip').innerHTML = '字符数应为4~16位';
        b.style.color = 'red';
        a.style.border = '2px solid red';
    }
}

GetLength = function(str)   
{  
    var realLength = 0;  
    for (var i = 0; i < str.length; i++)   
    {  
        charCode = str.charCodeAt(i);  
        if (charCode >= 0 && charCode <= 128)   
        realLength += 1;  
        else   
        realLength += 2;  
    }  
    return realLength; 
}; 