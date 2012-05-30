document.body.innerHTML += "<style>* {background-image: none !important;}</style>";

var i = document.querySelectorAll("img");
var o = document.querySelectorAll("object");
var f = document.querySelectorAll("iframe");
var e = document.querySelectorAll("embed");

for (var a=0;a<i.length;a++) {
 i[a].src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
}
for (var b=0;b<o.length;b++) {
 o[b].data="";
 o[b].innerHTML="";
}
for (var c=0;c<f.length;c++) {
 f[c].src="";
}
for (var d=0;d<e.length;d++) {
 e[d].parentNode.removeChild(e[d]);
}

