var ing = document.getElementById("image_place");



var imglist = new Array("skeee.jpg","aaa.jpeg","aaas.jpg" );

var selectnum = Math.floor( Math.random() * imglist.length );

var output = "<img src=" + imglist[selectnum] + ">";

document.write( output );

setTimeout(function(){
window.location.href =
'file:///C:/Users/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC/workspace/js-grammar/js-calc.html';
}, 20*1000);
