let text=document.querySelector("input");
let btn=document.getElementById("btn");
let weather=document.getElementById("weather");
let loc=document.getElementById("location");
let temp=document.getElementById("temp");
let minmax=document.getElementById("minmax");
let time=document.getElementById("time");
start();
function start(){
    getweather("mohali")
}
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let input=text.value;
    getweather(input);
    text.value="";
});
function getweather(input){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=1c2f83d6dd7a80357af739ff2931c0a1`)
    .then((result)=>{
        return result.json()
    })
    .then((data)=>{
        let txt=data.weather[0].description;
        weather.innerHTML=txt;
        txt=data.sys.country;
        loc.innerHTML=input.toUpperCase()+','+txt;

        txt=parseInt(data.main.temp-273);
        temp.innerHTML=txt+"*C";
        txt=parseInt(data.main.temp_min-273);
        let txt2=parseInt(data.main.temp_max-273);
        minmax.innerHTML=txt+"*C(min) / "+txt2+"*C(max)";
        txt=new Date(data.dt).toDateString();
        time.innerHTML=txt;
    })
    .catch((err)=>{
        alert("Enter a Valid Place");
        console.log(err.message);
    });
}
