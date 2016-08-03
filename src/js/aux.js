export function clearCanvas(canvas) {
    let ctx = canvas.ctx();
    ctx.clearRect(0, 0, canvas.W(), canvas.H());
}

export function getRandomValue(max = 20) {
    let num = Math.floor(Math.random() * max) + 1; // this will get a number between 1 and 99;
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
    return num;
}
