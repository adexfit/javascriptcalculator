function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

let wrong = "Wrong input"

function calculation(){
    let answer;
    let opera = parseFloat(prompt("Enter 1 for addition , 2 for subtraction , 3 for multiplication , 4 for division"), 10);
    let num1 = parseFloat(prompt("Enter the first number"), 10);
    let num2 = parseFloat(prompt("Enter second number "), 10);


     if(opera == 1){
        answer = add(num1, num2);
        document.getElementById("answer").innerHTML = answer;
     }
     else if(opera == 2){ 
        answer = sub(num1, num2)
        document.getElementById("answer").innerHTML = answer;
     }
     else if(opera == 3){
        answer = mult(num1, num2)
        document.getElementById("answer").innerHTML = answer;
     }
     else if(opera == 4){
        answer = div(num1, num2)
        document.getElementById("answer").innerHTML = answer;
     }
     else{
        document.getElementById("answer").innerHTML = wrong;
     }
}
