let particles = [];

// Load Tracery grammar from an external JSON file
let grammar;

// Fetch the grammar and initialize
$(document).ready(function () {
    $.getJSON('sighting.json', function (data) {
        grammar = tracery.createGrammar(data);
        grammar.addModifiers(tracery.baseEngModifiers);
    });
});

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(50);
}

function draw() {
    // Fade effect to keep a ghostly trail
    background(50, 50, 50, 50);

    // Update and display particles
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
            particles.splice(i, 1);
        }
    }
}

// Generate a new text particle when the mouse is clicked
function mouseClicked() {
    if (grammar) { // Ensure grammar is loaded before using
        let output = grammar.flatten("#title#"); // Use the external grammar's structure
        let p = new Particle(mouseX, mouseY, output);
        particles.push(p);
    }
}

class Particle {
    constructor(x, y, text) {
        this.x = x;
        this.y = y;
        this.vx = random(-1, 1);
        this.vy = random(-1, 1);
        this.size = random(15, 20);
        this.text = text;
    }

    finished() {
        return (this.x < 0 || this.x > windowWidth || this.y < 0 || this.y > windowHeight);
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
    }

    show() {
        noStroke();
        textSize(this.size);
        textFont("Courier");
        textAlign(CENTER, CENTER);
        fill("green"); // Keeps a sci-fi neon aesthetic
        text(this.text, this.x, this.y);
    }
}
