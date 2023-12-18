console.log("thumbs up copy"); //very cool thumb

const section = document.querySelector("section");
const thumbs = document.querySelectorAll(".logo");

const FPS = 60;

section.style.height = window.innerHeight + "px";
section.style.width = window.innerWidth + "px";

// Velocity and position variables for all thumbs
let thumbsData = [];

for (let i = 0; i < thumbs.length; i++) {
    thumbsData.push({
        xPosition: 10 + i * 100,
        yPosition: 10 + i * 100,
        xSpeed: 2 + i,
        ySpeed: 2 + i,
    });
}

function update() {
    thumbs.forEach((thumb, index) => {
        thumb.style.left = thumbsData[index].xPosition + "px";
        thumb.style.top = thumbsData[index].yPosition + "px";
    });
}

setInterval(() => {
    thumbsData.forEach((thumb, index) => {
        // Thumb movement
        if (thumb.xPosition + thumbs[index].clientWidth >= window.innerWidth || thumb.xPosition <= 0) {
            thumb.xSpeed = -thumb.xSpeed;
        }
        if (thumb.yPosition + thumbs[index].clientHeight >= window.innerHeight || thumb.yPosition <= 0) {
            thumb.ySpeed = -thumb.ySpeed;
        }

        thumb.xPosition += thumb.xSpeed;
        thumb.yPosition += thumb.ySpeed;
    });

    update();
}, 1000 / FPS);

window.addEventListener("resize", () => {
    thumbsData.forEach(thumb => {
        thumb.xPosition = 10 + i * 100;
        thumb.yPosition = 10 + i * 100;
    });

    section.style.height = window.innerHeight + "px";
    section.style.width = window.innerWidth + "px";
});
