basic.showIcon(IconNames.Skull)
let a = 0
let b = 0
Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
Tinybit.RGB_Car_Program().clear()
Tinybit.RGB_Car_Program().show()
basic.forever(function () {
    for (let a = 0; a <= 255; a++) {
        Tinybit.RGB_Car_Big2(0, 0, a)
        Tinybit.RGB_Car_Program().setBrightness(255)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
        Tinybit.RGB_Car_Program().show()
    }
    basic.pause(10)
    for (let b = 0; b <= 255; b++) {
        Tinybit.RGB_Car_Big2(0, 0, 255 - b)
        Tinybit.RGB_Car_Program().setBrightness(255 - b)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
        Tinybit.RGB_Car_Program().show()
    }
    basic.pause(10)
})
