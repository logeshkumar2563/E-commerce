const img = document.querySelectorAll('.slider ul img');
const left= document.querySelector('.arrow-left');
const right= document.querySelector('.arrow-right');

let n=0;
function slider(){
    for(let i=0;i<img.length;i++){
        img[i].style.display='none';
    }
    img[n].style.display='block';
}
slider();

left.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n=img.length-1;
    }
    slider();
})
right.addEventListener('click',(e)=>{
    if(n<img.length -1){
        n++;
    }
    else{
        n=0;
    }
    slider();
})

const scrollbar=document.querySelectorAll('product');
for(const i of scrollbar){
    i.addEventListener('wheel',(e)=>{
        e.preventDefault();
        i.scrollLeft += e.deltaY;
    });
}