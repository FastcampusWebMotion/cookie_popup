import Animate from './animate.mjs';

export default class Popup {
    constructor(){
        this.init();
        this.bindingEvent();
    }

    init(){
        this.btnView = document.querySelector('.view');
        this.btnDel = document.querySelector('.del');
        this.popup = document.querySelector('#popup');
        this.btnClose = this.popup.querySelector('.close');
        this.isOn;
        this.isCookie = document.cookie.indexOf('today=done');  
        
        (this.isCookie === -1) ? this.isOn = 'block' : this.isOn = 'none';    
        this.popup.style.display = this.isOn;
        
       /*
       if(this.isCookie === -1){
           this.popup.style.display = 'block';
       }else {
           this.popup.style.display = 'none';
       }
       */
    }

    bindingEvent(){
        this.btnView.addEventListener('click', e=>{
            e.preventDefault();
            console.log(document.cookie);
        })
        
        this.btnDel.addEventListener('click', e=>{
            e.preventDefault();
            this.setCookie('today','done',0);
            alert('쿠키를 삭제했습니다.');
        })
        
        this.btnClose.addEventListener('click',e=>{
            e.preventDefault();  
            let isChecked = this.popup.querySelector('input[type=checkbox]').checked;
            if(isChecked) this.setCookie('today','done',1);
            this.popup.style.display = 'none';
        })
    }

    setCookie(name, val, due){
        const today = new Date();
        const date = today.getDate();
        today.setDate(date+due);
        const duedate = today.toGMTString();
        document.cookie = `${name}=${val}; path=/; expires=${duedate}`;
    }
}





