// remainder calculator
function myFunction(){
const ones = document.getElementById('first').value;
document.getElementById('rishon').innerHTML=ones % 3; 
}

function myFunction1(){
const ones = document.getElementById('second').value;
document.getElementById('shniya').innerHTML=ones % 5; 
}

function myFunction2(){    

const ones = document.getElementById('third').value;
document.getElementById('shelishi').innerHTML=ones % 7; 
}


// main function
function multiply(e){

    const one = document.getElementById('hree');
    const oneA = one.options[one.selectedIndex].textContent;
    const two = document.getElementById('ive').value;
    const three = document.getElementById('even').value;

    const four = oneA*70;
    const five = two*21;
    const six = three*15;

    const seven = +four + +five + +six;
    const eight = +four + +five + +six +105;
    const nine = +four + +five + +six-210;
    const ten = +four + +five + +six-105;



  if (seven <= 105 && seven >= 7){
        document.getElementById('answer').innerHTML = `Your Number Is: <strong>${seven}!</strong>`;
    }
    else if (eight <= 105 && eight >= 7){
    document.getElementById('answer').innerHTML =`Your Number Is <strong>${eight}!</strong>`;
    }
    else if (nine <= 105 && nine >=7){
    document.getElementById('answer').innerHTML =`Your Number Is <strong>${nine}!</strong>`;
    }
    else if (ten <= 105 && ten >= 7){
    document.getElementById('answer').innerHTML =`Your Number Is <strong>${ten}!</strong>`;
    }
    else {
        document.getElementById('answer').innerHTML = 'You done something wrong!!!!!!!!!';
    }

    document.getElementById('answer').classList.add('answer');
    document.getElementById('answer').classList.remove('end');

    e.stopPropagation();
}




function alert1() {
    const one = document.getElementById('hree').value;
    if (one >= 3) {
        alert('the number can only be 0,1 or 2');
    }
}

function alert2() {
    const two = document.getElementById('ive').value;
    if(two >= 5) {
        alert('the number cannot be more than 4');
    }
}
function alert3() {
    const three = document.getElementById('even').value;
    if(three >= 7) {
        alert('the number is more than 7');
    }
}

let x = Math.floor((Math.random() * 98) + 7);
document.getElementById('random').innerHTML = x + ')';

if (new Date().getHours() < 12) {
    document.getElementById("time").innerHTML = "Good morning, ";
  }
  
  else if(new Date().getHours() < 18) {
    document.getElementById("time").innerHTML = "Good afternoon, ";
  }
  else if(new Date().getHours() < 20) {
    document.getElementById("time").innerHTML = "Good evening, ";
  }
  else {
    document.getElementById("time").innerHTML = "Good night, ";
  }

  const end = document.getElementById('button');
  end.addEventListener('click', multiply);


  function clearAnswer() {
    const clear = document.getElementById('answer');
    clear.classList.remove('answer');
    clear.classList.add('end');
  }

  window.addEventListener('click', clearAnswer)