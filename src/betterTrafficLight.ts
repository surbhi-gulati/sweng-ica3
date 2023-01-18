export type Color = "red" | "green" | "yellow"

export type LightColorDuration = {
  color: Color;
  durationInSeconds: number;
};

export function timerAtNextSecond (currentColor: Color, secondsRemaining: number, lightCycle: LightColorDuration[]): number {
    if (secondsRemaining === 1) {
      const indexOfColor = lightCycle.findIndex(lcd => lcd.color === currentColor);
      const val = lightCycle.at(indexOfColor + 1 % lightCycle.length);
      if (val) {
        return val.durationInSeconds;
      }
      return secondsRemaining;
    } 
    return (secondsRemaining - 1)
}

export function colorAtNextSecond(currentColor: Color, secondsLeftCurrentColor: number): Color {
    if (secondsLeftCurrentColor !== 1) {
      return currentColor;
    }
    else {
      return colorCycle.nextColor;
    }
}
