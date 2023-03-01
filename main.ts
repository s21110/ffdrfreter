input.onButtonPressed(Button.A, function () {
    basic.showNumber(counter)
})
input.onGesture(Gesture.Shake, function () {
    counter += 1
})
let counter = 0
counter = 0
