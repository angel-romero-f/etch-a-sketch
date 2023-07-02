const grid = document.querySelector('.grid');
for(let i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.className = 'square';
    grid.appendChild(div);
}
