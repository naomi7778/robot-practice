input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    basic.showIcon(IconNames.Skull)
    a = 0
    b = 0
    Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
    Tinybit.RGB_Car_Program().clear()
    Tinybit.RGB_Car_Program().show()
})
input.onButtonPressed(Button.B, function () {
    Tinybit.Music_Car(Tinybit.enMusic.wawawawaa)
})
let b = 0
let a = 0
Tinybit.RGB_Car_Program().setBrightness(255)
Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Purple))
Tinybit.RGB_Car_Program().show()
basic.forever(function () {
    for (let a = 0; a <= 255; a++) {
        Tinybit.RGB_Car_Big2(0, 0, a)
        Tinybit.RGB_Car_Program().setBrightness(255)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Purple))
        Tinybit.RGB_Car_Program().show()
    }
    basic.pause(10)
    for (let b = 0; b <= 255; b++) {
        Tinybit.RGB_Car_Big2(0, 0, 255 - b)
        Tinybit.RGB_Car_Program().setBrightness(255 - b)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Indigo))
        Tinybit.RGB_Car_Program().show()
    }
    basic.pause(10)
})
