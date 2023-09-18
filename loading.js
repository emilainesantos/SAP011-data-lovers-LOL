const pre_carregamento = document.querySelector("div.loading-screen");

// eslint-disable-next-line no-unused-vars
function preCarregamento(){
  pre_carregamento.style.opacity = "0";

  setTimeout(() => {
    pre_carregamento.style.display = "none";
  }, 3000);
}







