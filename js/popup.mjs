import Animate from './animate.mjs';

const btnView = document.querySelector('.view');
const btnDel = document.querySelector('.del');
const popup = document.querySelector('#popup');
const btnClose = popup.querySelector('.close');

btnView.addEventListener('click', e=>{
    e.preventDefault();
    console.log(document.cookie);
})

btnDel.addEventListener('click', e=>{
    e.preventDefault();
    setCookie('today','done',0);
    alert('쿠키를 삭제했습니다.');
})

btnClose.addEventListener('click',e=>{
    e.preventDefault();    
    popup.style.display = 'none';
})

function setCookie(name, val, due){
    const today = new Date();
    const date = today.getDate();
    today.setDate(date+due);
    const duedate = today.toGMTString();
    document.cookie = `${name}=${val}; path=/; expires=${duedate}`;
}