basic.showString("Turn on the lights")
let threshold_light = input.lightLevel()
basic.showString("Turn off the lights")
let threshold_dark = input.lightLevel()
let threshold_difference = (threshold_light - threshold_dark) / 2
let light_threshold = threshold_dark + threshold_difference
basic.forever(function () {
    if (input.lightLevel() < light_threshold) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            . . # . .
            `)
    } else {
        basic.clearScreen()
    }
})
