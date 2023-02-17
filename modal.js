const Mathor = document.querySelector('.modal-overlay')
const btn = document.querySelectorAll('.btn');
// console.log(btn);
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',()=>{
        Mathor.classList.toggle('Visbal');
    });
};
