console.log('sketch.js')

function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(15)

}

function draw() {
    background(10)

    let r = random(255);
    let g = random(255);
    let b = random(255);

    const t = frameCount

    for (let i = 0; i < 14; i++) {

        let x = (t * 50) % width;
        let y = map(i, 0, 13, 0, height) + 25

        ellipse(x, y, 50, 50)

        fill(r, g, b);
    }
}

// function mousePressed() {
//     fullscreen(true)
// }

