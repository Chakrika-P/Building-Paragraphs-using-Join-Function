inputs_array=[];
function getPara1(){
    var display_inputs_array = [];
    for(var i = 1; i<=6; i++)
    {
        inputs.push(document.getElementById("para_input_" + i).value);
        inputs.join(". ")
        document.getElementById("showPara1").innerHTML = inputs.join(". ");
        document.getElementById("showPara2").innerHTML = inputs.join(". ");
        document.getElementById("showPara3").innerHTML = inputs.join(". ");
        document.getElementById("showPara4").innerHTML = inputs.join(". ");
        document.getElementById("showPara5").innerHTML = inputs.join(". ");
        document.getElementById("showPara6").innerHTML = inputs.join(". ");
    }
    console.log(inputs);
    var length_of_inputs_array=inputs_array.length;
    console.log(length_of_inputs_array);

    console.log(display_inputs_array);
    document.getElementById("display_para_with_fullstops").innerHTML=display_inputs_array;
}