
        const options = {
    method: "GET",
    mode: "cors",
    caches: "default"
}

const cep = document.getElementById("cep")
cep.addEventListener("blur", (e) => {
    let Cep = document.getElementById("cep").value;
    console.log(Cep)
    let search = cep.value.replace("-", "")
    fetch(`https://api.postmon.com.br/v1/cep/${search}`).then((response) => {
        response.json().then(data => {
            console.log(data)
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("cidade").value = data.cidade;
            document.getElementById("logradouro").value = data.logradouro;
            document.getElementById("estado").value = data.estado;
        })
    })
})

function enviar() {
    let bairro = document.getElementById("bairro").value;
    let localidade = document.getElementById("localidade").value;
    let logradouro = document.getElementById("logradouro").value;
    let uf = document.getElementById("estado").value;
    let siafi = document.getElementById("siafi").value;
    let json = {
        "bairro": bairro,
        "ddd": ddd,
        "ibge": ibge,
        "localidade": localidade,
        "logradouro": logradouro,
        "uf": uf,
        "siafi": siafi
    }
    console.log(json)
}

