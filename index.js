console.log("thumbs up copy"); //very cool thumb

const section = document.querySelector("section");

const FPS = 60;

section.style.height = window.innerHeight + "px";
section.style.width = window.innerWidth + "px";

const thumbsData = []; // Array to store thumb data

function createThumb() {
    const thumb = document.createElement("img");
    thumb.src = "thumbs up copy.jpeg";
    thumb.className = "logo thumb";
    section.appendChild(thumb);

    const thumbData = {
        xPosition: Math.random() * (window.innerWidth - 300), // Random initial x position
        yPosition: Math.random() * (window.innerHeight - 300), // Random initial y position
        xSpeed: Math.random() * 4 + 1, // Random speed between 1 and 5
        ySpeed: Math.random() * 4 + 1, // Random speed between 1 and 5
    };

    thumbsData.push(thumbData);
}

document.getElementById("addThumbBtn").addEventListener("click", createThumb);

function update() {
    const thumbs = document.querySelectorAll(".thumb");
    thumbs.forEach((thumb, index) => {
        thumb.style.left = thumbsData[index].xPosition + "px";
        thumb.style.top = thumbsData[index].yPosition + "px";
    });
}

setInterval(() => {
    thumbsData.forEach((thumb, index) => {
        // Thumb movement
        if (thumb.xPosition + 300 >= window.innerWidth || thumb.xPosition <= 0) {
            thumb.xSpeed = -thumb.xSpeed;
        }
        if (thumb.yPosition + 300 >= window.innerHeight || thumb.yPosition <= 0) {
            thumb.ySpeed = -thumb.ySpeed;
        }

        thumb.xPosition += thumb.xSpeed;
        thumb.yPosition += thumb.ySpeed;
    });

    update();
}, 1000 / FPS);

window.addEventListener("resize", () => {
    thumbsData.forEach(thumb => {
        thumb.xPosition = Math.random() * (window.innerWidth - 300);
        thumb.yPosition = Math.random() * (window.innerHeight - 300);
    });

    section.style.height = window.innerHeight + "px";
    section.style.width = window.innerWidth + "px";
});
