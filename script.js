function moveRandomEl(elm) {
    // Get a random position within the viewport bounds (to avoid overflow)
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";  // Random vertical position
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";  // Random horizontal position
}

const moveRandom = document.querySelector("#move-random");

// Using "mouseover" event for better interaction
moveRandom.addEventListener("mouseover", function(e){
    moveRandomEl(e.target);
});
