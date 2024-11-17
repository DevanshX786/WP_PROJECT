const keys = document.querySelectorAll(".keypad .key");

let audio = new Audio("resources/Piano_Music/a.wav");

const playSound = (key) => {
    audio.src = `resources/Piano_Music/${key}.wav`;
    audio.play();
}

keys.forEach(key => {
    key.addEventListener("click", () => playSound(key.dataset.key))
})


window.addEventListener("keydown", (e) => {

    keys.forEach(it => {
        if (e.key == it.dataset.key) {
            playSound(it.dataset.key);
            if (it.classList.contains("white")) {
                it.style.backgroundColor = "rgb(198, 199, 199)";
                setTimeout(() => {
                    it.style.backgroundColor = "rgb(240, 248, 255)";
                }, 100);
            }

            else if(it.classList.contains("spkey")){
                it.style.background = "linear-gradient(rgb(83, 83, 83), rgb(52, 52, 52))";
                setTimeout(() => {
                    it.style.background = "linear-gradient(rgb(83, 83, 83), rgb(0, 0, 0))";
                }, 100);
            }
        }
    });
})