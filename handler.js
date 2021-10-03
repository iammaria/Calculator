function myFunction(clicked_id){
    const errorMessage = 'Please, put only numbers';
    var displayResult = document.getElementById("result");
    var result;
    displayResult.innerText = "";
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        displayResult.style.color="red";
        displayResult.append(errorMessage);
        return; 
    }

    // get sum of elements
    if (clicked_id === "sum"){
        result = num1 + num2;
    }

    // get subtraction of elements
    if (clicked_id === "substract"){
        result = num1 - num2;
    }

    // get multiplication of elements
     if (clicked_id === "multiply"){
        result = num1 * num2;
     }


    displayResult.append(result);
}