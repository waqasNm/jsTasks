function cal(num){
	var i = document.getElementById('input').value;
	document.getElementById('input').value = i + num ;
}

function del(){
	document.getElementById('input').value = "";
}

function result() {
	var result = eval(document.getElementById('input').value);
	document.getElementById('input').value = result;
	//console.log(result);
}

