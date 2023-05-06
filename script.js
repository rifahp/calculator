// display number in text box 
function displayNum(num){
    console.log(num);
    result.value+=num;
}

//clear text box
function clearbox(){
    result.value='';
}

// evaluate expression
 function evaluateExpression(){
    expression=result.value;//expression=5+3
    output=eval(expression); //eval(5+3)=8;
    result.value=output;
 }

 // remove last item from text box

 function removeLastItem(){
    currentExpression=result.value;
    result.value=currentExpression.slice(0,-1);
 }