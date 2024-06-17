function Celsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  } 

let text = "The temperature is " + Celsius(76) + " Celsius.";
document.getElementById("demo").innerHTML = text;

// let x = toCelsius(77);
// let text = "The temperature is " + x + " Celsius";