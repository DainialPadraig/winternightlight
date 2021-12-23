basic.showString("Turn on the lights")
let threshold_light = input.lightLevel()
basic.showString("Turn off the lights")
let threshold_dark = input.lightLevel()
let light_threshold = (threshold_light - threshold_dark) / 2
basic.forever(function () {
    if (input.lightLevel() < 100) {
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
