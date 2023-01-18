export type Color = "red" | "green" | "yellow"

export type LightColorDuration = {
  color: Color;
  durationInSeconds: number;
};

export function timerAtNextSecond (currentColor: Color, secondsRemaining: number, lightCycle: LightColorDuration[]): number {
    if (secondsRemaining === 1) {
      const currColorIdx = lightCycle.findIndex(lcd => lcd.color === currentColor);
      const nextColorIdx = lightCycle.at((currColorIdx) + 1 % lightCycle.length);
      if (nextColorIdx) {
        return nextColorIdx.durationInSeconds;
      }
      return secondsRemaining;
    } 
    return (secondsRemaining - 1)
}

export function colorAtNextSecond(currentColor: Color, secondsLeftCurrentColor: number, lightCycle: LightColorDuration[]): Color {
    if (secondsLeftCurrentColor !== 1) {
      return currentColor;
    }

    const currColorIdx = lightCycle.findIndex(lcd => lcd.color === currentColor);
    const nextColorIdx = lightCycle.at((currColorIdx + 1) % lightCycle.length);
    if (nextColorIdx) {
      return nextColorIdx.color;
    }
    return currentColor;
}
