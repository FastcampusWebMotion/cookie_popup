import Animate from './animate.mjs';

export default class Popup {
    constructor(option){
        this.init(option);
        this.bindingEvent();
    }

    init(option){        
        this.btnView = document.querySelector(option.btnView);
        this.btnDel = document.querySelector(option.btnDel);
        this.popup = document.querySelector(option.popup);
        this.btnClose = this.popup.querySelector(option.btnClose);
        this.name = option.name;        
        
        this.isOn;
        this.isCookie = document.cookie.indexOf(this.name);  
        
        (this.isCookie === -1) ? this.isOn = 'block' : this.isOn = 'none';    
        this.popup.style.display = this.isOn;   
    }

    bindingEvent(){
        this.btnView.addEventListener('click', e=>{
            e.preventDefault();
            console.log(document.cookie);
        })
        
        this.btnDel.addEventListener('click', e=>{
            e.preventDefault();
            const [a,b] = this.name.split('=');
            console.log(a);
            console.log(b);
            this.setCookie(a,b,0);
            alert('쿠키를 삭제했습니다.');
        })
        
        this.btnClose.addEventListener('click',e=>{
            e.preventDefault(); 
            const [a,b] = this.name.split('='); 
            console.log(a);
            console.log(b);
            let isChecked = this.popup.querySelector('input[type=checkbox]').checked;
            if(isChecked) this.setCookie(a,b,1);
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





