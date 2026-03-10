function createSakura() {
    const container = document.getElementById('sakura-container');
    const petal = document.createElement('div');
    
    petal.classList.add('sakura');
    petal.style.left = Math.random() * 100 + 'vw';
    
    const duration = Math.random() * 5 + 4; 
    petal.style.animationDuration = duration + 's';
    
    const size = Math.random() * 6 + 4; 
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';
    
    petal.style.animationDelay = Math.random() * 2 + 's';
    
    container.appendChild(petal);
    
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

setInterval(createSakura, 150);