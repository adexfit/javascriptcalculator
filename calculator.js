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
    let num1 = parseFloat(prompt("Enter the first number"), 10);
    let opera = prompt("Enter operator e.g + * - /");
    let num2 = parseFloat(prompt("Enter second number "), 10);


     if(opera == "+"){
        answer = add(num1, num2);
        document.getElementById("answer").innerHTML = answer;
     }
     else if(opera == "-"){ 
        answer = sub(num1, num2)
        document.getElementById("answer").innerHTML = answer;
     }
     else if(opera == "*"){
        answer = mult(num1, num2)
        document.getElementById("answer").innerHTML = answer;
     }
     else if(opera == "/"){
        answer = div(num1, num2)
        document.getElementById("answer").innerHTML = answer;
     }
     else{
        document.getElementById("answer").innerHTML = wrong;
     }
}
