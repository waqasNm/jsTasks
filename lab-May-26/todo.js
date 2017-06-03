/*TODO List*/


function todo(){
    var task = document.getElementById('task').value;
    document.getElementById('task').value = "";

    var newLi = document.createElement('li');
    var textLi = document.createTextNode( task );
    
    var span = document.createElement('SPAN');
    var spanTxt = document.createTextNode("\u00D7");
    span.className = "close";
    span.setAttribute('onclick','del(this)');

    span.appendChild(spanTxt);

    newLi.appendChild(textLi);
    newLi.appendChild(span);

    document.getElementById('todo-list').appendChild(newLi);

}

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.setAttribute('onclick','del(this)');
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

function del(x){
    x.parentNode.remove();
}
