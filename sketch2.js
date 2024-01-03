function setup() {
    createCanvas(800, 800)
}

function draw() {
    const col = map(mouseX, 0, 600, 0, 255)
    background(col)

    const y = map(mouseX, 0, width, 0, height)
    // draw circle with mouseX but map mouseX to height of the canvas
    ellipse((width / 2), y, 50)



}