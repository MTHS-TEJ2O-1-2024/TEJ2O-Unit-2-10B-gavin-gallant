/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Gavin Gallant
 * Created on: Sep 2024
 * This program uses the RobotBit's Neopixels
*/

// variables
let neopixelStrip: neopixel.Strip = null

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, () => {
    let LightLevel = input.lightLevel()
    basic.showNumber(LightLevel)
    if(LightLevel<= 51)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        if(LightLevel>52)
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
                if(LightLevel>104)
                    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
                        if(LightLevel>208)
                            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
})