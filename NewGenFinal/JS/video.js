let step = 0;

function move() {
    const a = document.getElementById('logo');
    const b = document.getElementById('name');
    const c = document.getElementById('explore');
    const d = document.getElementById('container');
    const e = document.getElementById('body');
    const f = document.getElementById('overlayText');
    const video = document.getElementById('myVideo');

    a.style.marginTop = "-48em";
    b.style.marginTop = "-38.7em";
    b.style.fontSize = "1.2rem";
    a.style.height = "35px";
    a.style.width = "60px";
    a.style.marginLeft = "-12em"
    a.style.transition = "1.5s";
    b.style.transition = "1.5s";
    a.style.zIndex = "1";
    b.style.zIndex = "1";
    c.style.marginLeft = "68em";
    c.style.marginTop = "12em";
    c.style.transition = "all 2s";
    d.style.background = "rgba(0, 0, 0, 0)";
    d.style.transition = "background 1.5s";
    e.style.background = "rgba(0, 0, 0, 1)";
    e.style.transition = "background 1.5s";

    setTimeout(() => {
        d.style.background = "transparent";
        video.style.display = "block";
        setTimeout(() => {
            video.style.opacity = "1";
            f.style.opacity = "0";
        }, 10);
    }, 1500);
}

function scrollToSection() {
    const target = document.getElementById('myVideo2');
    const container = document.getElementById('myVideo');
    const oText = document.getElementById('overlayText2')
    container.style.opacity = "0";
    oText.classList.add('blurIn');
    setTimeout(() => {
        target.style.display = "block";
        target.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
            target.style.opacity = "1";

        }, 10);
    }, 1500);
}

function blurIn(){
    setTimeout(() => {
        const text = document.getElementById('overlayText')
        text.classList.add('blurIn')
    },2000)
}
function blurOut(){
    setTimeout(() => {
        const text = document.getElementById('overlayText')
        text.classList.remove('blurIn');
        text.classList.add('blurOut')
    },500)
}

function executeFunctionsSequentially() {
    if (step === 0) {
        move();
        blurIn();
        step++;
    } 
    else if (step === 1) {
        blurOut();
        scrollToSection();
        step++; 
    }
     else if (step === 2) {
        blurIn();
        step++;
    }
}