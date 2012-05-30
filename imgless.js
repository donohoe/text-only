var i = document.querySelectorAll("img");
var o = document.querySelectorAll("object");
for (var a=0;a<i.length;a++) {
 i[a].src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
}
for (var b=0;b<o.length;b++) {
 o[b].data="";
 o[b].innerHTML="";
}