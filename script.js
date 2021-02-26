
document.addEventListener("keydown", function (event) {
    if (event.code === "KeyA") {
        let audio = new Audio("media/A.mp3");
        audio.play();
    } else if (event.code === "KeyS") {
        let audio = new Audio("media/S.mp3");
        audio.play();
    } else if (event.code === "KeyD") {
        let audio = new Audio("media/D.mp3");
        audio.play();
    } else if (event.code === "KeyF") {
        let audio = new Audio("media/F.mp3");
        audio.play();
    } else if (event.code === "KeyG") {
        let audio = new Audio("media/G.mp3");
        audio.play();
    } else if (event.code === "KeyH") {
        let audio = new Audio("media/H.mp3");
        audio.play();
    } else if (event.code === "KeyJ") {
        let audio = new Audio("media/J.mp3");
        audio.play();
    } else if (event.code === "KeyW") {
        let audio = new Audio("media/W.mp3");
        audio.play();
    } else if (event.code === "KeyE") {
        let audio = new Audio("media/E.mp3");
        audio.play();
    } else if (event.code === "KeyT") {
        let audio = new Audio("media/T.mp3");
        audio.play();
    } else if (event.code === "KeyY") {
        let audio = new Audio("media/Y.mp3");
        audio.play();
    } else if (event.code === "KeyU") {
        let audio = new Audio("media/U.mp3");
        audio.play();
    } else {
        alert(`Warning! Use only A, S, D, F, G, H, J, W, E, T, Y, U keys!`);
    }
})

