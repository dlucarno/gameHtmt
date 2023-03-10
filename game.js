let img;
let img2;
let timer;

let KeyRight = false;
let KeyLeft = false;
let KeyUp = false;
let KeyDown = false;

function toucheEnfoncee(t) {
    t.preventDefault();
    if (t.code == "ArrowRight") {
        KeyRight = true;
    }
    if (t.code == "ArrowUp") {
        KeyUp = true;
    }
    if (t.code == "ArrowLeft") {
        KeyLeft = true;
    }
    if (t.code == "ArrowDown") {
        KeyDown = true;
    }
}

function toucheRelachee(t) {
    t.preventDefault();
    if (t.code == "ArrowRight") {
        KeyRight = false;
    }
    if (t.code == "ArrowUp") {
        KeyUp = false;
    }
    if (t.code == "ArrowLeft") {
        KeyLeft = false;
    }
    if (t.code == "ArrowDown") {
        KeyDown = false;
    }
}

function load() {
    document.addEventListener("keydown", toucheEnfoncee, false);
    document.addEventListener("keyup", toucheRelachee, false);

    img = new Sprite("images/ship.png", 100, 100);
    img2 = new Sprite("images/ship.png", 1, 1);

    timer = 0;
}

function update(dt) {
    timer += dt;
    if (timer >= 1) {
        img.x += 10;
        img.y += 10;
        timer = 0;
    }
    if (KeyRight) {
        img2.x += 1;
    }
    if (KeyLeft) {
        img2.x -= 1;
    }
    if (KeyUp) {
        img2.y -= 1;
    }
    if (KeyDown) {
        img2.y += 1;
    }
}

function draw(pCtx) {
    img.draw(pCtx);
    img2.draw(pCtx);
    
}