document.write("<h1>CONCATENATING TEXT STRINGS , PROMPTS , IF STATEMENTS , COMPARISON OPERATORS</h1><hr>");

var input1 = prompt("Please enter your name");

alert("Hi ! " + input1);

var input2 = prompt("Enter a Number to print its multiplication table");

document.write("<h1>Multiplication Table of " + input2 + "</h1>");

document.write("<h2>" + input2 + " x 1 = " + input2*1 + "</h2>");
document.write("<h2>" + input2 + " x 2 = " + input2*2 + "</h2>");
document.write("<h2>" + input2 + " x 3 = " + input2*3 + "</h2>");
document.write("<h2>" + input2 + " x 4 = " + input2*4 + "</h2>");
document.write("<h2>" + input2 + " x 5 = " + input2*5 + "</h2>");
document.write("<h2>" + input2 + " x 6 = " + input2*6 + "</h2>");
document.write("<h2>" + input2 + " x 7 = " + input2*7 + "</h2>");
document.write("<h2>" + input2 + " x 8 = " + input2*8 + "</h2>");
document.write("<h2>" + input2 + " x 9 = " + input2*9 + "</h2>");
document.write("<h2>" + input2 + " x 10 = " + input2*10 + "</h2><hr>");

var city = prompt("Please enter your city");

if (city === "karachi"){
    alert("Welcome to city of lights")
}

else{
    alert("Welcome to city " + city)
}

var gender = prompt("Type your Gender");

if (gender === "male"){
    alert("Good Morning Sir")
}

else{
    alert("Good Morning Ma'am")
}

var signal = prompt("Select the Color : RED , YELLOW or GREEN");

if (signal === "red"){
    alert("vehicles must stop")
}
else if (signal === "yellow"){
    alert("vehicles should get ready to move")
}
else{
    alert("vehicles can move now")
};

var maxage = prompt("Type your max age");

var currentage = prompt("Type your current age");

if (currentage <= maxage){
    alert("Your Welcome")
}
else{
    alert("Your not Welcome")
};

var fuel = prompt("Type your remaining fuel in car (in liters)");

if (fuel < "0.25 liters"){
    alert("Please refill the fuel in your car")
}
else {
    alert("you did not want refill the fuel in your car")
};

var a = 4;
if (++a === 5){
 alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
 alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
 alert("condition 1 is true");
}
if (c === 13){
 alert("condition 2 is true");
}
if (++c < 14){
 alert("condition 3 is true");
}
if(c === 14){
 alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
 alert("The cost equals");
}

if (true){
    alert("True");
}
if (false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}

var total = prompt("Please enter your Total Marks of three Subjects");

var obtain1 = prompt("Enter all Subject Obtained Marks");

var precen = obtain1*100/total;

document.write("<h1>Marks Sheet</h1><br>");

document.write("<h2>Total Marks : " + total + "</h2>");

document.write("<h2>Marks Obtained : " + obtain1 + "</h2>");

document.write("<h2>Prcentage : " + precen + " %</h2>");

if (precen >= 80){
    document.write("<h2>Grade : A-one</h2>")
    document.write("<h2>Remarks : Excellent</h2><hr>")
}
else if (precen >= 70){
    document.write("<h2>Grade : A</h2>")
    document.write("<h2>Remarks : Good</h2><hr>")
}
else if (precen >= 60){
    document.write("<h2>Grade : B</h2>")
    document.write("<h2>Remarks : You need to improve</h2><hr>")
}
else{
    document.write("<h2>Grade : Fail</h2>")
    document.write("<h2>Remarks : Sorry</h2><hr>")
}

var nam1 = prompt("Type The Name of Item 1");

var price1 = prompt("Type The Price Of Item 1");

var q1 = prompt("Type Quantity Of Item 1");

var nam2 = prompt("Type The Name of Item 2");

var price2 = prompt("Type The Price Of Item 2");

var q2 = prompt("Type Quantity Of Item 2");

document.write("<h1>Shopping Cart</h1><br>");

document.write("<h2>Price Of " + nam1 + " is " + price1 + "</h2>");

document.write("<h2>Quantity Of " + nam1 + " is " + q1 + " </h2>");

document.write("<h2>Price Of " + nam2 + " is " + price2 + "</h2>");

document.write("<h2>Quantity Of " + nam2 + " is " + q2 + " </h2><br>");

document.write("<h2>Shipping Charger 250</h2><br>");

var sum1 = price1*q1;

var sum2 = price2*q2;

var sum3 = (sum1+sum2)+250;

document.write("<h2>Total Cost of your Order Is " + sum3 + " PKR</h2>");

if (sum3 > "2000"){
    document.write("<h2>Discounted Price is " + sum3*0.5 + " PKR</h2>");
}
else{
    document.write("<h2>Discounted Price is Nothing </h2><hr>")
};

var num = 6 ;

var num1 = prompt("Guess the Secrert Number(1 to 10)");

if(num == num1){
    alert("Bingo! Correct Answer");
}
else if (num1 == num+1){
    alert("Close enogh to the correct answer")
}
else if(num1 == num-1){
    alert("Close enogh to the correct answer")
}
else{
    alert("No ! its not corect")
};

var  multi = prompt("select any number") ;

if (multi/3){
    alert("its correct that  " + multi + " divisible by 3")
}
else{
    alert("no its not corect")
}

var nam3 = prompt("Type The First Team Name");

var nam4 = prompt("Type Seconde team Name");

var mark1 = prompt("Type First Team Score");

var mark2 = prompt("Type Seconde Team Socre");

if (mark1 > mark2){
    alert(nam3 + " Have Won The Game")
}
else if (mark1 < mark2){
    alert(nam4 + " Have Won The Game")
}
else{
    alert("Both Won The Game")
}

var string = "Anas";

var number = 1234;

var boolean = true;

if (string === string){
    alert(string + " is a string")
}
else if (number ===number){
    alert(number + " is a number")
}
else if (boolean === ture){
    alert(boolean + " is a boolean")
}

var oae = prompt("Write Any Number");

if ((oae % 2)=== 0){
    alert("This Number Is Even")
}
else {
    alert("This number is odd")
}

var temp = prompt("Write the temperature of karachi (only number)");

if (temp >= 40){
    alert("It is Too Hot Outside")
}
else if (temp >= 30){
    alert("The Weather today is Normal")
}
else if (temp >= 20){
    alert("Today’s Weather is cool")
}
else if (temp >= 10){
    alert("OMG! Today’s weather is so Cool")
}

var first = eval(window.prompt("Enter Any Number"));

var second = eval (window.prompt("Enter The Seconde Number"));

var op = window.prompt("Select Operater (+ , / , * , - , %)");

if(op == "+")
{
    var sum = first + second
    alert("The Sum Is "  +  sum);
}


else if(op == "-")
{
    var subt = first - second
    alert("The Subt Is "  + subt);
}

else if(op == "*")
{
    var mul = first * second
    alert("The Mul Is "  + mul);
}

else if(op == "/")
{
    var subt = first / second
    alert("The Div Is "  + Div);
}

else if(op == "%"){
    var precentage = (first/second)*100
    alert("THe prcentage Is " + precentage)
}

else
{
    alert("select an valid operator. e.g + , - , * , /");
}

var input3 = prompt("Write Any Name Of The Day");

if (input3 === "monday" || input3 === "tuesday" || input3 === "wednesday" || input3 === "thursday" || input3 === "friday" ){
    alert ("Its's A Wek Day")
}
else if (input3 === "saturday"){
    alert("It's A Weekend")
}
else if (input3 === "sunday"){
    alert("Hurray ! It's A Holiday")
}
else {
    alert(" Type in Small Case or Type Real Name")
}

var input4 = prompt("Type Your Score")

if (input4 > "50"){
    alert("you Are Passed")
}
else if(input4 <= 50){
    alert("Try Again !")
}

var input5 = prompt ("Enter Your First Number");

var input6 = prompt ("Enter Your Seconde Number");

if (input5 > input6){
    alert("The Greater number of " + input5 + " and " + input6 + " is " + input5)
}
else if (input6 > input5){
    alert("The Greater Number Of " + input5 + " and " + input6 + " is " + input6)
}
else if (input5 == input6){
    alert("Both Number Are Same")
}

var input7 = prompt("Select Your Language (urdu , english , korean , arabic , japanese)")

if (input7 === "urdu"){
    alert("ہیلو دنیا")
}
else if (input7 === "english"){
    alert("Hello World")
}
else if (input7 === "korea"){
    alert("안녕하세요 세계")
}
else if (input7 === "arabic"){
    alert("مرحبا بالعالم")
}
else if (input7 === "japanese"){
    alert("こんにちは世界")
}
else{
    alert("Show in Small case or Select The Given Language")
}

var input8 = prompt ("Enter Positive or Negetive Number")

if (input8 > 0){
    alert("The Number Is Positive")
}
else if (input8 < 0){
    alert("The Number Is Negetive")
}
else if (input8 == 0){
    alert("The Number Is Zero")
}
else{
    alert("Type only Number Please")
}

var input9 = prompt("Enter Any Number")

var input10 = prompt("Enter Any Noun")

alert(input9 + " " + input10)