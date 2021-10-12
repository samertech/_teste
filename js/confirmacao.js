function exibirMensagem()
        {
            var data = new Date();
            alert(data.toString());
        }
 
         
        var btn = document.getElementById("btn");
 
        btn.addEventListener("click", exibirMensagem);

