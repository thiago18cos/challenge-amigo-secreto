//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
console.log("javaScript carregado");

 let amigos = [];

 window.adicionarAmigo = function (){
   const inputAmigo = document.getElementById("amigo");
   const nomeAmigo = inputAmigo.value.trim();
 
 if (novoAmigo === "") {
    alert("Por favor, digite o nome de um amigo.");
    return;
  }
   
  if amigos.includes(nomeAmigo)){
    alert(`o nome ${nomeAmigo}`já está na lista);
    return;
  }
   
  amigos.push(nomeAmigo);

  inputAmigo.value = "";

  atualizarLista();

}
 
 function atualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

   listaAmigos.innerHTML = "";

   amigos.forEach((amigo) =>
     const li = document.createElement('li');
     li.textContent = amigo;
     listaAmigos.appendChild(li);
   });

   }

    window.sortearAmigo = function (){
      if(amigos.length=== 0){
        alert("não há amigos para sortear. Adicione pelo menos um");
        return;
      }

      const indiceAleatorio = Math.floor(Math.random() * amigos.length);
      const amigoSorteado = amigos[indiceAleatorio];
      const resultado = document.getElementById('resultado');
      resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
    }


    document.addEventListener("DOMContentloaded",
      function () {

        document.querySelector(".button-add").addEventListener("click", adicionarAmigo);

        document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
      });
