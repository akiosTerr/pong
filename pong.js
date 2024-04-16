const svg = document.querySelector('svg');
const ball = document.getElementById('ball');
const paddleA = document.getElementById('paddleA');
const paddleB = document.getElementById('paddleB');

let ballSpeedX = 2;
let ballSpeedY = 2;
let paddleSpeed = 50;

function moveBall() {
    let cx = parseFloat(ball.getAttribute('cx'));
    let cy = parseFloat(ball.getAttribute('cy'));

    // Update ball position
    cx += ballSpeedX;
    cy += ballSpeedY;

    // Check for wall collisions
    if (cy <= 0 || cy >= 400) {
        ballSpeedY *= -1;
    }

    // Collision detection with paddles
    let paddleAY = parseFloat(paddleA.getAttribute('y'));
    let paddleBY = parseFloat(paddleB.getAttribute('y'));

    // Collision with left paddle
    if (cx <= 40 && cy >= paddleAY && cy <= (paddleAY + 100)) {
        ballSpeedX = Math.abs(ballSpeedX);
    }

    // Collision with right paddle
    if (cx >= 760 && cy >= paddleBY && cy <= (paddleBY + 100)) {
        ballSpeedX = -Math.abs(ballSpeedX);
    }

    // Move the ball
    ball.setAttribute('cx', cx);
    ball.setAttribute('cy', cy);

    requestAnimationFrame(moveBall);
}

// Keyboard controls for paddles
document.addEventListener('keydown', function(event) {
    let yA = parseFloat(paddleA.getAttribute('y'));
    let yB = parseFloat(paddleB.getAttribute('y'));

    if (event.key === 'w' && yA > 0) {
        paddleA.setAttribute('y', yA - paddleSpeed);
    }
    if (event.key === 's' && yA < 300) {
        paddleA.setAttribute('y', yA + paddleSpeed);
    }
    if (event.key === 'ArrowUp' && yB > 0) {
        paddleB.setAttribute('y', yB - paddleSpeed);
    }
    if (event.key === 'ArrowDown' && yB < 300) {
        paddleB.setAttribute('y', yB + paddleSpeed);
    }
});

// Start the game
moveBall();