function setup() {
    createCanvas(800, 800)
}

function draw() {
    background(0)


    for (let i = 0; i < 10; i++) {

        let x = map(i, 0, 10, width, 0)
        let y = map(i, 0, 5, 0, height) + 25
        ellipse(x, (y % 800), 50, 50)
    }
}