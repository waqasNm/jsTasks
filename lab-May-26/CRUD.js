
/*CRUD Function*/ 
function save(name,email,age){
	var getName = document.getElementById(name).value;
	var getEmail = document.getElementById(email).value;
	var getAge = document.getElementById(age).value;
	
	document.getElementById(name).value = "";
	document.getElementById(email).value = "";
	document.getElementById(age).value = "";
	
	var newRaw = document.createElement('TR');
	var tdName = document.createElement('TD');
	var tdEmail = document.createElement('TD');
	var tdAge = document.createElement('TD');
	var tdBtn = document.createElement('TD');
	var delBtn = document.createElement('button');

	var textName = document.createTextNode(getName);
	var textEmail = document.createTextNode(getEmail);
	var textAge = document.createTextNode(getAge);
	var textBtn = document.createTextNode('Delete');

	delBtn.setAttribute("onclick","del(this)");

	delBtn.appendChild(textBtn);
	tdName.appendChild(textName);
	tdEmail.appendChild(textEmail);
	tdAge.appendChild(textAge);
	tdBtn.appendChild(delBtn);

	newRaw.appendChild(tdName);
	newRaw.appendChild(tdEmail);
	newRaw.appendChild(tdAge);
	newRaw.appendChild(tdBtn);

	document.getElementById('screen').appendChild(newRaw);

}

function del(x){
	x.parentNode.parentNode.remove();
}