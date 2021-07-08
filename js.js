var select = document.getElementById("select");
var strUser;
function randomstr(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
function gettohop(){
  strUser = select.options[select.selectedIndex].value;
  if(strUser==0){
    document.getElementById("tunhien").style.display= "block";
    try{
        document.getElementById("xahoi").style.display= "none";
    }
    catch{} 
}
    else{
    document.getElementById("xahoi").style.display= "block";
    try{
        document.getElementById("tunhien").style.display= "none";
    }
    catch{} 
}
}
select.onchange=gettohop;
gettohop();

document.getElementById("fake").onclick =function(){
    document.getElementById("data").style.display = "none";
    document.getElementById("show").style.display = "block";
    var hoten =  document.getElementById("iphoten").value;
    var toan =  document.getElementById("iptoan").value;
    var van =  document.getElementById("ipvan").value;
    var el =document.getElementById("ipel").value;
    document.getElementById("name").innerText = "Họ và tên: "+ " " + hoten.toUpperCase();

    if(strUser==0){
        var hoa = document.getElementById("iphoa").value;
        var ly = document.getElementById("iply").value;
        var sinh = document.getElementById("ipsinh").value;
        document.getElementById("diem").innerText = "Toán: "+toan+" Ngữ Văn: "+van+
        " Vật lí: "+ly+" Hóa học: "+hoa+" Sinh học: "+sinh+" KHTN: "+((parseFloat(ly)+parseFloat(hoa)+parseFloat(sinh))/3).toFixed(2).toString()+
        " Tiếng Anh: "+el;
    }
    else{
        var su = document.getElementById("ipls").value;
        var dia = document.getElementById("ipdia").value;
        var gd = document.getElementById("ipgd").value;
        document.getElementById("diem").innerText = "Toán: "+toan+" Ngữ Văn: "+van+
        " Lịch sử: "+su+" Địa lý: "+dia+" GDCD: "+gd+" KHXH: "+((parseFloat(su)+parseFloat(dia)+parseFloat(gd))/3).toFixed(2).toString()+
        " Tiếng Anh: "+el;
    }
}
document.getElementById("check").onclick =function(){
    document.getElementById("info").style.display = "block";
}
document.getElementById("load").onclick = function(){
    document.getElementById("captcha2").innerText = randomstr(5);
}
document.getElementById("captcha2").innerText = randomstr(5);
