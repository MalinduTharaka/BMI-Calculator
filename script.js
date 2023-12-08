function ch(){

    var c1 = document.getElementById("c1");

    document.getElementById("c2").style.display = "block";
    document.getElementById("c2").style.visibility = "visible";

    c1.classList.toggle("move-left");
    document.getElementById("b2").style.display = "block";

}

function ag(){
    window.location.href = "index.html";
}
function changemeasure1(){
    if (document.getElementById('Measures').value == 'Feet'){
        document.getElementById("t3").style.display = "block";
        document.getElementById("t4").style.display = "block";
        document.getElementById("t5").style.display = "none";
    }
}
function changemeasure2(){
    if (document.getElementById('Measures').value == 'Centimeter'){
        document.getElementById("t3").style.display = "none";
        document.getElementById("t4").style.display = "none";
        document.getElementById("t5").style.display = "block";
    }
}





function bmivalue(){
var kg = parseInt(document.getElementById('t6').value);
var kgtopound =kg*2.20462;

var feet = parseInt(document.getElementById('t3').value);
var inch = parseInt(document.getElementById('t4').value);
var Hfeet = (feet*12)+inch;


var Centi = parseInt(document.getElementById('t5').value);
var meter = Centi/100;
    if (document.getElementById('Measures').value == 'Feet'){
        var ans1 = (kgtopound/Math.pow(Hfeet,2))*703 ;
        document.getElementById('p5').innerHTML="Your BMI value is : "+ans1;
        return(ans1);
    }
    else{
        var ans2 = (kg/Math.pow(meter,2));
        document.getElementById('p5').innerHTML="Your BMI value is : "+ ans2;
        return(ans2);
    }
    
}

function ranges(){
    var BMIval = bmivalue();
    if (BMIval<18.5){
        document.getElementById('p6').innerHTML="Your body is less than the normal recommended weight. you need to eat more nutritious food with adequate exercises.";
        document.getElementById('p7').innerHTML="Your Are Thin 😢";
        document.getElementById('c2').style.backgroundColor="#ADD8E6";
        if (document.getElementById('Genders').value == 'Male'){
            document.getElementById('rangeImg').src="Res/thinBoy.png";
        }else{
            document.getElementById('rangeImg').src="Res/thinGirl.png";
        }
    }
    else if(BMIval<22.9){
        document.getElementById('p6').innerHTML="Your weight is within the normal recommended weight. Maintain your weight with adequate exercises.";
        document.getElementById('p7').innerHTML="Your Are On Target 😍";
        document.getElementById('c2').style.backgroundColor="#00FF00";
        if (document.getElementById('Genders').value == 'Male'){
            document.getElementById('rangeImg').src="Res/fitBoy.png";
        }else{
            document.getElementById('rangeImg').src="Res/fitGirl.png";
        }
    }
    else if(BMIval<24.9){
        document.getElementById('p6').innerHTML="Your weight is within the normal recommended weight. Try to bring down it with more exercises and correct dietary practices";
        document.getElementById('p7').innerHTML="Your Are Littlebit Over 😞";
        document.getElementById('c2').style.backgroundColor="#FFA500";
        if (document.getElementById('Genders').value == 'Male'){
            document.getElementById('rangeImg').src="Res/riskBoy.png";
        }else{
            document.getElementById('rangeImg').src="Res/riskGirl.png";
        }
    }
    else{
        document.getElementById('p6').innerHTML="Your weight is more than the normal recommended weight. Bring down it with more exercises and correct dietary practices.";
        document.getElementById('p7').innerHTML="Your Are Over Weight 😩";
        document.getElementById('c2').style.backgroundColor="#f95e3c";
        if (document.getElementById('Genders').value == 'Male'){
            document.getElementById('rangeImg').src="Res/fatBoy.png";
        }else{
            document.getElementById('rangeImg').src="Res/fatGirl.png";
        }
    }
}
