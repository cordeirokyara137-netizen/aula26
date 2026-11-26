async function loaData(cepUsuario) {
    const RESPONSE = await featch(`https://viacep.com.br/ws/${cepUsuario}/json/`);
    if(!RESPONSE.ok){
        console.log(RESPONSE.status);
        return false;
    }
    return RESPONSE.json();
}



let cep = Number(prompt("digite o seu cep:"));


console.log(await loadData(cep))


// COMO MOSTRAR AS INFORMAÇÕES NO JAVASCRIPT


let body = document.querySelector("body");
body.innerHTML =
`
<h1>Dados da pesquisa</h1>
<ul> 
   <li>69919-240</li>
    <li>Travessa Ano Novo</li>
    <li>Paz</li>
    <li>Rio Branco</li>
    <li>AC</li>
    <li>Acre</li>
    <li>Norte</li>
    <li>68</li>

`
