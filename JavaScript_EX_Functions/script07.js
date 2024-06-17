// Convert Fahrenheit to Celsius: 

function Celsius(f) {
    return (5/9) * (f-32);
}
  
  let value = Celsius(75);
  document.getElementById("demo").innerHTML = value;