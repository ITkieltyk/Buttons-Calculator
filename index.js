// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = ``;

//Definiowanie funkcji dodawania kolejnych cyfr do wyświetlanej liczby na "ekranie" kalkulatora

const liczby = document.getElementsByClassName('liczby');

Array.from(liczby).forEach(function (el) {
  // console.log(el.innerHTML);
  const value = el.innerHTML;
  el.addEventListener('click', () => {
    document.getElementById('wyswietlacz').innerHTML += value;
  });
});

// document.getElementById("01").addEventListener("click" , ()=> {

//   const wyswarr = document.getElementById('wyswietlacz').innerHTML.split(' ');
//   console.log(wyswarr);

//   if (wyswarr.length === 3) {
//     document.getElementById('wyswietlacz').innerHTML = `${eval(document.getElementById('wyswietlacz').innerHTML)} + `;
//     console.log(`Wyswietlacz wynosi: ${document.getElementById("wyswietlacz").innerHTML}`);
//   } else {
//   document.getElementById("wyswietlacz").innerHTML += ' + ';
// }
// }
// );
// function clickFunction(functionID) {
//   const wyswarr = document.getElementById('wyswietlacz').innerHTML.split(' ');
//   console.log(wyswarr);

//   if (wyswarr.length === 3) {
//     document.getElementById('wyswietlacz').innerHTML = `${eval(
//       document.getElementById('wyswietlacz').innerHTML
//     )} ${document.getElementById(functionID).innerHTML} `;
//     console.log(
//       `Wyswietlacz wynosi: ${document.getElementById('wyswietlacz').innerHTML}`
//     );
//   } else {
//     document.getElementById('wyswietlacz').innerHTML += ` ${
//       document.getElementById(functionID).innerHTML} `;
//   }
// }

const funkcje = document.getElementsByClassName('funkcja');

for (let i = 0; i < funkcje.length; i++) {
  let funkcjaVal = funkcje[i].innerHTML;
  funkcje[i].addEventListener('click', () => clickFunction(funkcjaVal));
}
function clickFunction(e) {
  console.log(e);
  const wyswarr = document.getElementById('wyswietlacz').innerHTML.split(' ');
  console.log(`wyswarr przed wykonaniem: ${wyswarr}`);

  if (wyswarr[2] === '') {
    document.getElementById('wyswietlacz').innerHTML = `${wyswarr[0]} ${e} `;
  } else if (wyswarr.length === 1) {
    document.getElementById('wyswietlacz').innerHTML += ` ${e} `;
  } else {
    document.getElementById('wyswietlacz').innerHTML = `${eval(
      document.getElementById('wyswietlacz').innerHTML
    )} ${e} `;
    console.log(
      `Wyswietlacz wynosi: ${document.getElementById('wyswietlacz').innerHTML}`
    );
  }
}; 

document.getElementsByClassName("funkcjaWynik")[0].addEventListener("click", ()=> {
  document.getElementById('wyswietlacz').innerHTML = `${eval(
    document.getElementById('wyswietlacz').innerHTML)}`;
});

document.getElementsByClassName("funkcjaPierw")[0].addEventListener("click", ()=> {
  document.getElementById('wyswietlacz').innerHTML = `${Math.sqrt(eval(
    document.getElementById('wyswietlacz').innerHTML))}`;
});

document.getElementsByClassName("funkcjaZnak")[0].addEventListener("click", ()=> {
  document.getElementById('wyswietlacz').innerHTML = `${eval(
    document.getElementById('wyswietlacz').innerHTML) * -1}`;
});

document.getElementsByClassName("funkcjaKas")[0].addEventListener("click", ()=> {
  document.getElementById('wyswietlacz').innerHTML = `${
    document.getElementById('wyswietlacz').innerHTML.slice(0, -1)}`;
}); 
 

