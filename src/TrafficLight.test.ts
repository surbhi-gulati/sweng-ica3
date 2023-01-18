// import { Color, timerAtNextSecond, colorAtNextSecond } from './TrafficLight'
import { Color, LightColorDuration, timerAtNextSecond, colorAtNextSecond } from './BetterTrafficLight'

const red : LightColorDuration = {color: "red", durationInSeconds: 20}
const yellow : LightColorDuration = {color: "yellow", durationInSeconds: 18}
const green : LightColorDuration = {color: "green", durationInSeconds: 22}
const lightColorDuration: LightColorDuration[] = [red, green, yellow];


test("tests for timerAtNextSecond", () => {
    expect(timerAtNextSecond("red", 17, lightColorDuration)).toBe(16)
    expect(timerAtNextSecond("green", 1, lightColorDuration)).toBe(18)
})


test("tests for TrafficLight", () => {
    expect(colorAtNextSecond("red", 7 , lightColorDuration)).toEqual("red")
    expect(colorAtNextSecond("red", 1, lightColorDuration)).toEqual("green")
    expect(colorAtNextSecond("green", 1, lightColorDuration)).toEqual("yellow")
    expect(colorAtNextSecond("yellow", 1, lightColorDuration)).toEqual("red")
})