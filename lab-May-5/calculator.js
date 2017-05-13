var num1,num2,operator;

var input = document.getElementById('screen');

function assignNum(num){
	if(operator === undefined){
		if(num1 === undefined){
			num1 = num.toString();
		}else{
			num1 = num1 + num.toString();
		}
	input.innerHTML = num1;
	}else{
		if(num2 === undefined){
			num2 = num.toString();
		}else{
			num2 = num2 + num.toString();
		}	
	input.innerHTML = num2;	
	}
}

function assignOp(op){
	operator = op;
}

function del(){
	input.innerHTML = 0;
	num1 = undefined;
	num2 = undefined;
	operator = undefined;
}

function result() {
	var result;
	if(operator === '+'){
		result = Number(num1) + Number(num2);
	}else 	if(operator === '-'){
		result = Number(num1) - Number(num2);
	}else 	if(operator === '*'){
		result = Number(num1) * Number(num2);
	}else 	if(operator === '/'){
		result = Number(num1) / Number(num2);
	}else 	if(operator === '%'){
		result = Number(num1) % Number(num2);
	}else 	if(operator === 'sqr'){
		result = Number(num1)**2 ;
	}else{
		result = 0;
	}

	input.innerHTML = result;
	//console.log(result);
}

