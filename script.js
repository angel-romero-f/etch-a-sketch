const grid = document.querySelector('.grid');
const colorChoice = document.querySelector('#colorpicker');
const colorBtn = document.querySelector('#color-mode');
const clearBtn = document.querySelector('#clear');
const eraserBtn = document.querySelector('#eraser');
const rainbowBtn = document.querySelector('#rainbow');
const rangeInput = document.querySelector('#myRange');
function randomColor(){
    return Math.floor(Math.random()*16777215).toString(16);
}
function percentage(totalValue) {
    return (100 / totalValue) +"%";
 } 
//default size is 16x16
for (let i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.className = 'square';
    grid.appendChild(div);
}
//default color is black 
let color = "black";
let squares = grid.querySelectorAll('.square');

squares.forEach(square =>{
    square.addEventListener('mouseover', function(){
        this.style.backgroundColor = color;
    });
});
colorBtn.addEventListener('click', () => {
    color = colorChoice.value;
});
eraserBtn.addEventListener('click', () =>{
    color = 'white';
})
rainbowBtn.addEventListener('click', ()=>{
    color = "#"+randomColor();
})
clearBtn.addEventListener('click', () =>{
    squares.forEach(square =>{
        square.style.backgroundColor = 'white';
    });
});
rangeInput.addEventListener('change', (e) => {
    let size = e.target.value;
    document.getElementById('size').textContent = size + " " + "x" + " "+ size;
    console.log(percentage(size));



    grid.replaceChildren();
    for (let i = 0; i < size * size; i++){
        const div = document.createElement('div');
        div.className = 'square';
        div.style.width = percentage(size);
        div.style.height = percentage(size);
        grid.appendChild(div);
    }
    squares = grid.querySelectorAll('.square');
    squares.forEach(square =>{
        square.addEventListener('mouseover', function(){
            this.style.backgroundColor = color;
        });
    });
});
colorChoice.addEventListener('change', (e) =>{
    color = e.target.value;

});