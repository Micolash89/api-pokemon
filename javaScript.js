

// let mensaje = prompt("ingrese el dia");

// if(mensaje == "soleado" )
//     console.log("el dia de hoy es soleado");
// else if (mensaje==="nublado") 
//     console.log("el dia de hoy es nublado");
// else if(mensaje == "lluvioso")
//     console.log("el dia de hoy es lluvioso");
// else
//     console.log("vuelva pronto")

// let numero = Number(prompt("ingrese un numero"));
// if(isNaN(numero) ){
//     numero = Number(prompt("ingrese un numero"));
// }
// console.log(Math.PI * Math.pow(numero,2));
// console.log(2*Math.PI*numero);

// console.log( prompt("ingrese una palabra" , "hola").split("").join(" "));

// palabra = palabra.split().join(" ");

// console.log(palabra)


// console.log( prompt("ingrese una palabra","palabra").split("").reverse().join(""));

/*
let p = document.getElementById("parrafo");

// console.log(p.textContent);

let texto = p.textContent.split(" ");
let pal=texto[0];

for(let i=1;i<texto.length;i++){
    if(texto[i].length>pal.length){
        pal = texto[i];
    }
}

console.log(pal);
*/

// var nombre =parseInt( prompt("ingrese algo"));
// const tipoVariable = nombre => typeof nombre;
// console.log(tipoVariable(nombre));

// const crearInput = () => {
//     for(let i=0;i<4;i++){
//     let input = document.createElement("input");
//     formulario.appendChild(input);
//     }
// };

// const crearboton = () => {
//     let boton = document.createElement("button");
//     boton.innerText="boton";
    
//     formulario.appendChild(boton);
// };

// const crearForm = () => {

//     let formulario = document.createElement("form");
 
//     document.body.appendChild(formulario);

// }


// crearForm();

// let formulario = document.querySelector('form');

// crearInput();
// crearboton();


// let inputs = document.querySelectorAll("input");
// let boton = document.querySelector("button");
// console.dir(inputs[0]);

// inputs.forEach(e=>{e.style.display="block";
//                 e.style.margin="10px";
//                 e.style.padding="10px"
// })

// inputs[0].placeholder="nombre";
// inputs[1].placeholder="apellido";
// inputs[2].placeholder="edad";
// inputs[3].placeholder="sexo";

// boton.style.width="150px";
// boton.style.height="30px";
// boton.type="submit";

// formulario.addEventListener("submit",e=>{
//     e.preventDefault();

//     let persona = new Object();

//     persona.nombre = inputs[0].value;
//     persona.apellido = inputs[1].value;
//     persona.edad = inputs[2].value;
//     persona.sexo = inputs[3].value;

//     inputs.forEach(e=>e.value="");

//     console.log(persona);
// });

// console.log(formulario);


fetch("https://rickandmortyapi.com/api/episode")
.then((response) => response.json())
.then ((data) => {
    console.log(data);
    data.results.forEach(e=>{
        let parrafo = document.createElement("p");
        parrafo.innerText=e.name;
        document.body.appendChild(parrafo);
    })     
});

// const mostrarDatos = data => {
    
// }

// const crearh1 = () => {
//     let h1 = document.createElement("h1");
//     console.dir(h1);
//     h1.innerText= "soy un h1";
//     h1.style.color =" red";
//     h1.style.border="1px solid black";
//     h1.style.display="inline";
//     document.body.appendChild(h1);
// }

//     crearh1();

    


//     let h2 = document.querySelectorAll("h2");

//     h2.forEach(e=>console.log(e.textContent));




//     let p = document.querySelector("p");
    
//     let noAmarillo = () =>{ 
//         p.innerText = p.textContent;
//     }

//         let colorAmarillo= () =>{ 
    
//         console.log(p.textContent);
    
//         let vector = p.textContent.split(" ");
    
//         for(i=0;i<vector.length;i++){
//             if(vector[i].length>8){
//                 vector[i]= "<span style = 'background-color:yellow'>"+vector[i]+"</span>";  
//             }
    
//         }
    
//         vector = vector.join(" ");
    
//         p.innerHTML = vector;
//         }
        
        
//         p.onmouseover=colorAmarillo;
        
//         p.onmouseout = noAmarillo;

// let pa = document.querySelectorAll(".parrafo");

// console.log(pa[1].textContent);

function getFormValores () {
    e.preventDefault();

    let i = document.querySelectorAll("input");
    let texto = `El nombre es ${i[0].value}, el apellido es ${i[1].value} `;

    var h2 = document.querySelector("h2");
  

    h2.innerHTML  = texto;
    
    console.log(texto);

}