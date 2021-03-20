radio.onReceivedNumber(function (receivedNumber) {
    state = receivedNumber
})
let movement = 0
let state = 0
let GREENLIGHT = 1
let REDLIGHT = 2
radio.setGroup(1)
basic.forever(function () {
    if (state == GREENLIGHT) {
        basic.showIcon(IconNames.Yes)
    } else if (state == REDLIGHT) {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    if (state == REDLIGHT) {
        basic.pause(200)
        movement = Math.abs(input.acceleration(Dimension.Strength) - 1000)
        if (movement > 200) {
            basic.showIcon(IconNames.Skull)
        }
    }
})
