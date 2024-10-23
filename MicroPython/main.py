"""
Created by: gavin gallant
Created on: oct 2024
This module is a Micro:bit MicroPython program that collects light level
"""

from microbit import *
import neopixel

# Setup the neopixel strip on pin P16 with 4 pixels
np = neopixel.NeoPixel(pin16, 4)


# Cleanup function to reset all pixels to black
def reset_pixels():
    for i in range(4):
        np[i] = (0, 0, 0)
    np.show()


# Display a happy icon on the micro:bit LED matrix
display.show(Image.HAPPY)
reset_pixels()


# Function to update NeoPixel colors based on light level
def update_neopixels(light_level):
    reset_pixels()

    if light_level > 208:
        np[3] = (0, 255, 0)  # Green
    if light_level > 156:
        np[2] = (255, 255, 0)  # Yellow
    if light_level > 104:
        np[1] = (255, 165, 0)  # Orange
    if light_level > 52:
        np[0] = (255, 0, 0)  # Red

    np.show()


# Main loop for button press
while True:
    if button_a.is_pressed():
        light_level = display.read_light_level()
        display.scroll(str(light_level))
        update_neopixels(light_level)
        sleep(1000)

        # Reset the NeoPixels after a brief delay
        reset_pixels()
        display.show(Image.HAPPY)
