const button = document.getElementById("button");
const menu = document.getElementById("teste");
const botaoFechar = document.getElementById("fechar-menu");
button.addEventListener('click', () =>{
    const button = document.querySelector("button");
    button.classList.add("hidden");
    if(menu.classList.contains("desativado")){
        menu.classList.remove("desativado");
        menu.classList.add("ativado");
    }else {
        menu.classList.remove("ativado");
        menu.classList.add("desativado");
    }
})

botaoFechar.addEventListener("click", () =>{
    menu.classList.remove("ativado");
    menu.classList.add("desativado");
    const button = document.querySelector("button");
    button.classList.remove("hidden");
})

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.slide-in').forEach(element =>{
    observer.observe(element);
}); 