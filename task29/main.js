var a = document.getElementById('msg');
var b = document.getElementById('tip');

function xxx() {
    var msg = a.value;
    if(msg.length == 0){
        console.log(msg.length,msg);
        document.getElementById('tip').innerHTML = '姓名不能为空';
        b.style.color = 'red';
        a.style.border = '2px solid red';
    }
    if(msg.length >= 4 && msg.length <= 16){
        document.getElementById('tip').innerHTML = '格式正确';
        b.style.color = 'lightgreen';
        a.style.border = '2px solid lightgreen';
    }
}