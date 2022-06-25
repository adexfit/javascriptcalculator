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
let operations = ['+', '-', '/', '*'];

function calculation(){
    let answer;
    let num1 = parseFloat(prompt("Enter the first number"), 10);
    let opera = prompt("Enter operator e.g + * - /");
    let num2 = parseFloat(prompt("Enter second number "), 10);


      if(operations.includes(opera)){
         
         if(opera == "+"){
            answer = add(num1, num2);
            answer !== answer ? document.getElementById("answer").innerHTML = wrong : document.getElementById("answer").innerHTML = answer;
         }
         else if(opera == "-"){ 
            answer = sub(num1, num2)
            answer !== answer ? document.getElementById("answer").innerHTML = wrong : document.getElementById("answer").innerHTML = answer;
         }
         else if(opera == "*"){
            answer = mult(num1, num2)
            answer !== answer ? document.getElementById("answer").innerHTML = wrong : document.getElementById("answer").innerHTML = answer;
         }
         else if(opera == "/"){
            answer = div(num1, num2)
            answer !== answer ? document.getElementById("answer").innerHTML = wrong : document.getElementById("answer").innerHTML = answer;
         }
         else{
            document.getElementById("answer").innerHTML = wrong;
         }
      } else{
         document.getElementById("answer").innerHTML = 'Invalid mathematical operation';
      }

}
