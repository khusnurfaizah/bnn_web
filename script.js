function mulai() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("content").style.display = "block";

    const lagu = document.getElementById("lagu");
    lagu.volume = 0.8;
    lagu.play();

    // Love terus muncul
    setInterval(buatLove, 400);

    // Love meledak saat gambar diklik
    document.getElementById("fotoBNN").addEventListener("click", loveMeledak);
}

function buatLove() {
    const love = document.createElement("div");
    love.className = "love";
    love.innerHTML = "💙";
    love.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(love);

    setTimeout(() => {
        love.remove();
    }, 6000);
}

function loveMeledak() {
    for (let i = 0; i < 20; i++) {
        const love = document.createElement("div");
        love.className = "love";
        love.innerHTML = "💙";
        love.style.left = (50 + Math.random() * 20 - 10) + "vw";
        love.style.bottom = "50vh";
        document.body.appendChild(love);

        setTimeout(() => {
            love.remove();
        }, 3000);
    }
}
