const url = 'https://pokemon-go1.p.rapidapi.com/pokemon_names.json';
const url2 = ': https://pokeapi.co/api/v2/pokemon/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fe5af385eemshda7a944ab14de35p19bba6jsn2edb6a74e803',
		'X-RapidAPI-Host': 'pokemon-go1.p.rapidapi.com'
	}
};

let boton = document.getElementById("btn");

boton.onclick=buscarPokemon;


function buscarPokemon(e){
    
    fetchData();
}

async function fetchData(){
    try {
        const response = await fetch(url, options);
       // console.log(response)

        const result = await response.json();

     //   console.log( Object.values(result)[0].name)

        let vec = Object.values(result);
        //return vec;

        let input = document.querySelector("input");


        

        for(let i =0;i<vec.length;i++){
           let bandera = 0;

            for(let j=0;j<input.value.length;j++){
                console.log(vec[i])
                if(input.value.toLowerCase().charAt(j)==vec[i].name.toLowerCase().charAt(j))
                    bandera++;
                else
                    break;
            }

            if(input.value.length == bandera){
                
                            let p =document.createElement("p");
                
                            p.innerText = vec[i].id+ " " + vec[i].name;

                            const url2 = `https://pokeapi.co/api/v2/pokemon/${ vec[i].name.toLowerCase}`;

                            document.body.appendChild(p);

            }

        }



    } catch (error) {
        console.error(error);
    }
}

//fetchData();
