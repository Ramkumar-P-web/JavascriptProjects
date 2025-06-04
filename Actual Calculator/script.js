import { Parser } from "https://cdn.jsdelivr.net/npm/expr-eval@2.0.2/+esm";
const parser = new Parser();

const buttons = document.querySelectorAll('.calculator button');
const display= document.getElementById('display');

const clickSound = new Audio('keyboard-click-327728.mp3');
function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}
document.addEventListener("keydown",(e)=>{
    if (["Enter", "Backspace", "Delete"].includes(e.key) || /[\d+\-*/().]/.test(e.key)) {
    e.preventDefault();
    };
    if(e.key === "Enter"){
        playClickSound();
       const cal = document.querySelector('.calculator button[data-button="="]');
       if(cal){
         try {
            setTimeout(()=>{display.value = parser.evaluate(display.value);},100)
            cal.classList.add('active-effect');
            setTimeout(()=>{cal.classList.remove('active-effect')},100);
        } catch (error) {
            display.value = "Invalid Entry!";
            setTimeout(()=>{display.value = ""},2000)
        }
       }
        
    }else if(e.key === "Backspace"){
        playClickSound();
        const rem = document.querySelector('.calculator button[data-button="DEL"]');
        if(rem){
           rem.click();
           rem.classList.add('active-effect');
           setTimeout(()=>{rem.classList.remove('active-effect')},100);
        }
        
    }else if(e.key === "Delete"){
        playClickSound();
        const del = document.querySelector('.calculator button[data-button="AC"]');
        if(del){
            del.click();
        del.classList.add('active-effect');
        setTimeout(()=>{del.classList.remove('active-effect')},100);
        };
        
    }else{
        if(/[\d+\-*/.]/.test(e.key)){
            display.value += e.key;
        }
       const btn = document.querySelector(`.calculator button[data-button="${e.key}"]`);
       if(btn){ 
        playClickSound();
        // btn.click()
        btn.classList.add('active-effect')
        setTimeout(()=>{btn.classList.remove('active-effect')},100)};
    }
});

buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
     playClickSound();
    let btnValue = btn.dataset.button;
    if(btnValue == "AC"){
       display.value = "";
    }else if(btnValue == "DEL"){
        display.value = display.value.slice(0,-1);
    }else if(btnValue == "="){
        try {
            display.value = parser.evaluate(display.value);
        } catch (error) {
            display.value = "Invalid Entry!";
            setTimeout(()=>{display.value = ""},2000)
        }
        
    }else{
        display.value += btnValue;
    }
    });
});