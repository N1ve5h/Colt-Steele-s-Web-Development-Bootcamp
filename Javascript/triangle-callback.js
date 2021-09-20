const square = x => Math.pow(x,2);

const isRightTriangle = (a , b, c) => (
    square(a) + square(b) === square(c)
)

isRightTriangle(3, 4, 5);