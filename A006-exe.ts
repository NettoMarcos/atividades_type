const celsius: number = 35

const convertToFahrenheit = (celsius:number): number => (9 * celsius
+ 160) / 5

console.log(`${celsius}°C em fahrenheit = ${convertToFahrenheit(celsius).toFixed(2)}`)
