
/*Task-1*/

document.write("<h3>Task-1</h3>");
/*var fname = prompt("Enter First Name");
var lname = prompt("Enter Last Name");

var fullName = fname +" " + lname;

alert("Welcome " + fullName);*/

/*Task-2*/

document.write("<h3>Task-2</h3>");

/*var input = prompt("favorite mobile phone model");

document.write("My favorite mobil phone is: " + input + "<br>");
document.write("Length of String is: " + input.length);

*/


/*Task-3*/

document.write("<h3>Task-3</h3>");

var string = "Pakistani";

document.write("String : " + string + "<br>");
document.write("Index of 'n' : " + string.indexOf('n'));


/*Task-4*/

document.write("<h3>Task-4</h3>");

var string = "Hello World";

document.write("<br>String : " + string + "<br>");
document.write("Index of 'l' : " + string.lastIndexOf('l'));


/*Task-5*/

document.write("<h3>Task-5</h3>");

var string = "Pakistani";

document.write("<br>String : " + string + "<br>");
document.write("Character at index 3 : " + string.charAt(3));

/*Task-6*/

document.write("<h3>Task-6</h3>");

/*var fname = prompt("Enter First Name");
var lname = prompt("Enter Last Name");

var fullName = fname.concat(lname);

alert("Welcome " + fullName);*/


/*Task-7*/

document.write("<h3>Task-7</h3>");

var string = "Hyderabad";

document.write("<br>City : " + string + "<br>");
document.write("Replaced City : " + string.replace('Hyder','Islam'));

/*Task-8*/

document.write("<h3>Task-8</h3>");

var string = "Ali and Sami are best friends. They play cricket and football together.";

document.write("<br>Message : " + string + "<br>");
document.write("Replaced And : " + string.replace(/and/g,'&'));

/*Task-9*/

document.write("<h3>Task-9</h3>");

var value = "472";
document.write("<br> Value: " + value);
document.write("<br>Type of Value is: " + typeof(value));
document.write("<br> Value: " + value);
document.write("<br>Type of Value is: " + typeof(Number(value)));

/*Task-10*/

document.write("<h3>Task-10</h3>");


/*var input = prompt("Enter Url","www.facebook.com");
var domain = input.slice(4);
document.write("<br>Url :" +input);
document.write("<br>Domian :" +domain);*/

/*Task-11*/

document.write("<h3>Task-11</h3>");


/*var input = prompt("Enter Name");
document.write("<br>User Input :" +input);
document.write("<br>UpperCase :" +input.toUpperCase());*/

/*Task-12*/

document.write("<h3>Task-12</h3>");

/*var input = prompt("Enter Name");
document.write("<br>User Input :" +input);
document.write("<br>UpperCase :" +input.toLowerCase());*/

/*Task-13*/

document.write("<h3>Task-13</h3>");

/*var input = prompt("Enter Name");
document.write("<br>User Input :" +input);
document.write("<br>UpperCase :" +input.charAt(0).toUpperCase() + input.slice(1).toLowerCase());*/

/*Task-14*/

document.write("<h3>Task-14</h3>");

var num = 35.36;
document.write("<br>Number : " +num);
console.log(typeof(num));
console.log(typeof(num.toString()));
document.write("<br>String : " +num.toString());

/*Task-15*/

document.write("<h3>Task-15</h3>");

/*var a = prompt("Enter Value");
var b = prompt("Enter Value");

if( a === "3" && b === "3"){
	var x = a + b ;
	document.write("<br> a = " + a);
	document.write("<br> b = " + b);
	document.write("<br> a + b is " + x);
}
*/
/*Task-16*/

document.write("<h3>Task-16</h3>");


/*var a = prompt("Enter Value");
var b = prompt("Enter Value");

if( a === "3" && b === "3"){
	var y = a - b ;
	document.write("<br> a = " + a);
	document.write("<br> b = " + b);
	document.write("<br> a - b is " + y);
}*/

/*task-17*/

document.write("<h3>Task-17</h3>");

/*var username = prompt("Enter name");
var regx = /^[a-zA-Z ]{2,30}$/;
if(regx.test(username)){
	console.log("Valid");
	document.write(username);
}else{
	console.log("InValid");
	alert("InValid Name");

}
*/

/*task-18*/

document.write("<h3>Task-18</h3>");


/*var input = prompt("Enter value");
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var flag = false;
for( var i = 0 ;i <arr.length ; i++){
	if(arr[i] == input.toLowerCase()){
		flag = true;
		break;
	}	
}

if(flag){
	document.write("<br>" + input + " is available at index " + i + " in our Bakery");
	console.log("Matched");
}else{
	document.write("<br>We are sorry " + input + " is not available in our Bakery");
	console.log("Not Matched");

}*/

/*task-19*/

document.write("<h3>Task-19</h3>");

/*var input1 = prompt("Enter value1");
var input2 = prompt("Enter value2");

if(input1.length > input2.length){
	console.log("Input 1 is greater");
}else if(input1.length < input2.length){
	console.log("Input 2 is greater");
}else if(input1.length == input2.length){
	console.log("Both are Equal");
}else{
	console.log("Invalid Error");
}*/


/*task-20*/

document.write("<h3>Task-20</h3>");

/*var pswd = prompt("Enter Password");
var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

if(pswd.match(/^[0-9]/)){
	console.log("Cannot Start with Number");
	alert("Cannot Start with Number");
}else{
	if(regularExpression.test(pswd)){
		console.log("OK");
	}else{
		alert("Password Must Contain atleast one small letter,one capital letter,a number and a symbol and must be greater than 6 ");
		console.log("Password Must Contain atleast one small letter,one capital letter,a number and a symbol and must be greater than 6 ");
	}
}
*/

/*task-21*/

document.write("<h3>Task-21</h3>");

 var str = "University of Karachi";
    var array = str.split("");
    document.write("<br>");
    for(var i = 0 ; i < array.length ; i++){
    document.write(array[i] + "<br>");
    }

/*task-22*/

document.write("<h3>Task-22</h3>");

var input = "Pakistan";
document.write("User Input: " +input);
document.write("<br>Last Character of Input: " +input.charAt(input.length-1));


/*task-23*/

document.write("<h3>Task-23</h3>");

var sentance = "The quick brown fox jumps over the lazy dog";
var occurance = sentance.match(/the/ig).length;
document.write("<br>Text : " + sentance);
document.write("<br>There are " +occurance + " Occurance(s) of  'the'" );

/*task-24*/

document.write("<h3>Task-24</h3>");

var string = "Pakistan";
var vowels = 0 ;
var consonants = 0 ;
for(var i = 0; i < string.length ; i++){
	if(string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o"
		 || string.charAt(i) == "u"){
		
		 vowels++;

	}else{

		 consonants++;
	}
}

document.write("<br>String : " + string);
document.write("<br>Vowels : " + vowels);
document.write("<br>Consonants : " + consonants);
