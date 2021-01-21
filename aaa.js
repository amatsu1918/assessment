var ing = document.getElementById("image_place");



var imglist = new Array("skeee.jpg","aaa.jpeg","aaas.jpg" );

var selectnum = Math.floor( Math.random() * imglist.length );

var output = "<img src=" + imglist[selectnum] + ">";

document.write( output );

setTimeout(function(){
window.location.href =
'https://amatsu1918.github.io/assessment/a.html';
}, 5*1000);
