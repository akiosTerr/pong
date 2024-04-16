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

    // Check for wall collisions
    if (cx <= 0 || cx >= 800) {
        ballSpeedX *= -1;
    }
    if (cy <= 0 || cy >= 400) {
        ballSpeedY *= -1;
    }

    // Move the ball
    ball.setAttribute('cx', cx + ballSpeedX);
    ball.setAttribute('cy', cy + ballSpeedY);

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