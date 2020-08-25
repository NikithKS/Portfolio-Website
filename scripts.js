// scripts.js

document.addEventListener("DOMContentLoaded", ready);


function ready(){
    const about = document.getElementById('about-box');
    let conditions = {
        threshold: 0.7
    }

    let trigger = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                about.classList.add('visible');
                console.log("HERE");
            }
        });
    }
    let observer = new IntersectionObserver(trigger, conditions);


    observer.observe(about);
    // IntersectionObserver.observe(trigger, about);
}