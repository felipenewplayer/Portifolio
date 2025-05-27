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