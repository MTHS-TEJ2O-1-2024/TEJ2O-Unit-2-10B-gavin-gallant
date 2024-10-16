// Copyright (c) 2020 MTHS All rights reserved
// Created by: Gavin Gallant
// Created on: Sep 2024
// This program uses the RobotBit's Neopixels

// Variables
let neopixelStrip: neopixel.Strip = null;

// Cleanup
basic.clearScreen();
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB);
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black));
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black));
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black));
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black));
neopixelStrip.show();
basic.showIcon(IconNames.Happy);

// Button A pressed event
input.onButtonPressed(Button.A, () => {
    let lightLevel = input.lightLevel();
    basic.showNumber(lightLevel);

    // Reset all colors to black
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black));
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black));
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black));
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black));

    if (lightLevel <= 51) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red));
    }
    if (lightLevel > 51 && lightLevel <= 104) {
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange));
    }
    if (lightLevel > 104 && lightLevel <= 208) {
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow));
    }
    if (lightLevel > 208) {
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green));
    }

    neopixelStrip.show();
});
