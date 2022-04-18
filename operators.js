
document.write("<strong>Different types of Operators </strong>")
document.write("<br><br>UNARY OPRATORS <br>")
var num=25;
document.write(num);
document.write("<br>Post increment:<br>")
num++;
document.write(num);

document.write("<br>Post decrement:<br>")
num--;
document.write(num);

document.write("<br>Pre-decrement:<br>")
--num;
document.write(num);

document.write("<br>Pre-increment:<br>")
++num;
document.write(num);

document.write("<br><br>SHIFT OPERATORS:<br>")
var num1=8;
var num2=2;

document.write("Left shift:<br>")
document.write(num1<<num2);
document.write("<br>")

document.write("Right shift:<br>")
document.write(num1>>num2);
document.write("<br>")


document.write("<br><br>ARITHMETIC OPERATORS:<br>")

document.write(num);
document.write("<br>")
document.write(num1);
document.write("<br>Addition: ",+(num+num1))
document.write("<br>Subtraction: ",+(num-num1))
document.write("<br>Multiplication: ",+(num*num1))
document.write("<br>Division: ",+(num/num1))
document.write("<br>Modulus: ",+(num%num1))
document.write("<br>Exponential: ",+(num**num1))


document.write("<br><br>RELATIONAL OPERATORS:")
document.write("<br> In this we can compare two data num=25 and num3= string 25<br>")
document.write(num);
document.write("<br>")
var num3="25"
document.write(num3);
document.write("<br>It gives true because it just checks the data<br>")
document.write(num==num3);
document.write("<br>It gives false because it checks both data and it's type")
document.write(num===num3);

document.write("<br><br>LOGICAL OPERATORS:(using if conditions)<br>") 
var n3=true;
var n4=false;
document.write(n3);
document.write("<br>")
document.write(n4);

document.write("<br> true && false :"+(n3&&n4))

document.write("<br> true || false :"+(n3||n4))

document.write("<br> ! true: ",+(!n3))
document.write("<br> ! false: ",+(!n4))

document.write("<br><br>BITWISE OPERATORS:<br>")
document.write(num1);
document.write("<br>")
document.write(num2);

document.write("<br>XOR(^):",+(num1^num2));
document.write("<br>NOT(~):",+(~num1));