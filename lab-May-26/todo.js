/*TODO List*/


function todo(){
    var task = document.getElementById('task').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    var newLi = document.createElement('li');

    var textLi = document.createTextNode( task + "  Date " + date + "  Time " + time);

    newLi.appendChild(textLi);

    document.getElementById('todo-list').appendChild(newLi);

}
