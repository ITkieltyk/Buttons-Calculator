// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = ``;

//Definiowanie funkcji dodawania kolejnych cyfr do wyświetlanej liczby na "ekranie" kalkulatora

// const btns = document.getElementsByClassName("przyciski")[0].getElementsByTagName("button");


// Array.from(btns).forEach( (a)=> {
//   a.addEventListener("click", ()=>{
//     if (document.getElementById('wyswietlacz').innerHTML.split(".").length === 2 && document.getElementById('wyswietlacz').innerHTML.split(" ").length === 3) {
//       document.getElementById("11").disabled = false;
//     }
//   })
// }
// );

const liczby = document.getElementsByClassName('liczby');

Array.from(liczby).forEach(function (el) {
  const value = el.innerHTML;
  el.addEventListener('click', () => {
    if (document.getElementById('wyswietlacz').innerHTML.length < 21 ) {
      document.getElementById('wyswietlacz').innerHTML += value;
      document.getElementsByClassName("funkcjaWynik")[0].disabled = false;
      if (document.getElementById("wyswietlacz").innerHTML.length !== 0) {
        Array.from(funkcje).forEach( (a, b, c)=> {
          a.disabled = false;
          document.getElementsByClassName("funkcjaPierw")[0].disabled = false;
          
          if (document.getElementById('wyswietlacz').innerHTML.split(".").length === 2 && document.getElementById('wyswietlacz').innerHTML.split(" ").length === 3) {
            document.getElementById("11").disabled = false;
          
          } else if ((document.getElementById('wyswietlacz').innerHTML.split(".").length === 2 && document.getElementById('wyswietlacz').innerHTML.split(" ").length === 1)|| document.getElementById('wyswietlacz').innerHTML.split(".").length === 3) {
            document.getElementById("11").disabled = true;
          }
           else {
            document.getElementById("11").disabled = false;
          };
        })
      };
    }
  });
});


 


// Dodawanie funkcji do przycisków znaków dziłania:

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
    document.getElementsByClassName("funkcjaWynik")[0].disabled = true;
  } else if (wyswarr.length === 1) {
    document.getElementById('wyswietlacz').innerHTML += ` ${e} `;
    document.getElementsByClassName("funkcjaWynik")[0].disabled = true;
  } else {
    document.getElementById('wyswietlacz').innerHTML = `${eval(
      document.getElementById('wyswietlacz').innerHTML
    )} ${e} `;
    document.getElementsByClassName("funkcjaWynik")[0].disabled = true;
    console.log(
      `Wyswietlacz wynosi: ${document.getElementById('wyswietlacz').innerHTML}`
    );
  }
}; 

// Specjalne działanie po przyciśnięciu "="

document.getElementsByClassName("funkcjaWynik")[0].addEventListener("click", ()=> {
  document.getElementById('wyswietlacz').innerHTML = `${eval(
    document.getElementById('wyswietlacz').innerHTML)}`;
});

// Specjalne działanie przy pierwiastkowaniu kwadratowym "root" (da się pierwiastkować również poprzez podnoszenie do ułamkowej potęgi)


document.getElementsByClassName("funkcjaPierw")[0].addEventListener("click", ()=> {
  document.getElementById('wyswietlacz').innerHTML = `${Math.sqrt(eval(
    document.getElementById('wyswietlacz').innerHTML))}`;
});

// Funkcja zmiany znaku (do poprawy)

document.getElementsByClassName("funkcjaZnak")[0].addEventListener("click", ()=> {
  document.getElementById('wyswietlacz').innerHTML = `${eval(
    document.getElementById('wyswietlacz').innerHTML) * -1}`;
});

// Kasowanie pojedyńczych znaków na wyświetlaczu, tradycyjnie jak w kalkulatorze kasuje jeden znak od prawej strony

document.getElementsByClassName("funkcjaKas")[0].addEventListener("click", ()=> {
  if (document.getElementById('wyswietlacz').innerHTML.slice(-1, -1) === '') {
  document.getElementById('wyswietlacz').innerHTML = `${
    document.getElementById('wyswietlacz').innerHTML.slice(0, -3)}`;
  } else {
    document.getElementById('wyswietlacz').innerHTML = `${
      document.getElementById('wyswietlacz').innerHTML.slice(0, -1)}`;
  }
    if (document.getElementById("wyswietlacz").innerHTML.length === 0) {
      Array.from(funkcje).forEach( (a, b, c)=> {
        a.disabled = true;
        document.getElementsByClassName("funkcjaPierw")[0].disabled = true;
        document.getElementById("11").disabled = true;
      })
    };
}); 

// Dubugowanie
// 1. Nie można wpisać znaku działania przy pustym wyświetlaczu (osobna linijka dla pierwiastka kwadratowego)
// 2. Nie można wpisać kropki przy pustym wyświetlaczu
// 3. Można wpisać drugą kropkę dopiero po wpisywaniu drugiego argumentu po pierwszej jego cyfrze
// 4. Nie można wcisnać "=" jeśli ostatnim znakiem jest znak działania, odblokowuje się po wpisaniu dowolnej liczby
// 5. Kasowanie po wpisaniu znaku działania kasuje 3 znaki ( spacje, znak działania, spacje)


if (document.getElementById("wyswietlacz").innerHTML.length === 0) {
  Array.from(funkcje).forEach( (a, b, c)=> {
    a.disabled = true;
    document.getElementsByClassName("funkcjaPierw")[0].disabled = true;
    document.getElementById("11").disabled = true;
  })
};


