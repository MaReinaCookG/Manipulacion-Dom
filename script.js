
const h1 = document.querySelector('h1'); //documento.querySelector : le indicamos cual es el selector al cual queremos acceder desde JS. es un metodo. querySelector Obtener primer elemento usando selectores CSS
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const Resultado = document.querySelector('#resultado');


form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
  
    event.preventDefault();
    const sumaInput = input1.value + input2.value;
    Resultado.innerText = "Resultado:" + ' ' + sumaInput;
};

//...console.log({

  //  h1,
   // p,
    //Parrafoclase,
    //pid,
    //input,
//});

// h1.innerHTML = 'patito <br> Feo'; //metodo que permite mostrar un html en js
//h1.innerText = 'Calculo entre 2 números'; //metodo que protege x decirlo de un modo , a pesar que es un codigoo html , lo muestra como texto plano

//const img = document.createElement('img');
//img.setAttribute('src', 'https://static.platzi.com/media/user_upload/CU01112E_1-f9d2b6fc-f60c-4bf4-a61d-6bf9df36b268.jpg');
//console.log(img);


//pid.innerHTML= "";
//pid.appendChild(img);

