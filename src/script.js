audio1 = document.querySelector(".A4");
audio2 = document.querySelector(".B4");
audio3 = document.querySelector(".C4");
audio4 = document.querySelector(".C5");
audio5 = document.querySelector(".D4");
audio6 = document.querySelector(".D5");
audio7 = document.querySelector(".E4");
audio8 = document.querySelector(".E5");
audio9 = document.querySelector(".F4");
audio10 = document.querySelector(".G4");
audio11 = document.querySelector(".Ab4");
audio12 = document.querySelector(".Bb4");
audio13 = document.querySelector(".Db4");
audio14 = document.querySelector(".Db5");
audio15 = document.querySelector(".Eb4");
audio16 = document.querySelector(".Eb5");
audio17 = document.querySelector(".Gb4");

// key = document.querySelectorAll(".key");

let butt = document.querySelectorAll(".butt");
let spkey = document.querySelector(".spkey");
let keypad = document.querySelector(".keypad");

window.addEventListener("keydown", (e)=>{
    if(e.code == "Semicolon"){
        let semicolon = document.querySelector(".colon");
        semicolon.style.backgroundColor = "rgb(198, 199, 199)";
        audio10.play();
        setTimeout(() => {
            semicolon.style.backgroundColor = "rgb(240, 248, 255)";
        }, 100);

    }

    if(e.key = "A"){
        let A = document.querySelector(".A");
        A.style.backgroundColor = "rgb(198, 199, 199)";
        audio1.play();
        setTimeout(() => {
            A.style.backgroundColor = "rgb(240, 248, 255)";
            // audio1.
        }, 1000);

    }


})
