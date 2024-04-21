const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const temperatureField = document.querySelector(".temp");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");


async function getData(city)
{
    try{
    let url = `http://api.weatherapi.com/v1/current.json?key=bd3a76cc71554652b0e125859242004&q=${city}&aqi=yes`
    const response = await fetch(url);
    const data= await response.json();

    console.log(data);
    let current_temperature= data.current.temp_c;
    let time = data.location.localtime;
    let location = data.location.name;
    let imageurl = data.current.condition.icon;
    let current_condition = data.current.condition.text;
    updateDom(current_temperature, time,location,imageurl,current_condition)
    }
    catch(error)
    {
        console.log(error);
    }
}



function updateDom(current_temperature, time,location,imageurl,current_condition)
{
    cityField.innerText = location;
    temperatureField.innerText = `${current_temperature}°C`;
    weatherField.innerText = current_condition;

    emojiField.src = imageurl;
    //2024-04-20 21:13
    const result = time.split(' '); // 'u' flag is used to enable full Unicode matching
    // console.log(result); 
    let date= result[0];
    // time = result[1];
    // let 

    let day = new Date(date).getDay();
    day = getDayFullName(day);
    dateField.innerText = `${result[1]} ${day} ${date}`;
    console.log(`local time ${time}`);
}

let city ='Kolkata'
form.addEventListener('submit', search);

function search(e)
{
   e.preventDefault();
   city= searchField.value;
   getData(city);
}





function getDayFullName(num) {
    switch (num) {
      case 0:
        return "Sunday";
  
      case 1:
        return "Monday";
  
      case 2:
        return "Tuesday";
  
      case 3:
        return "Wednesday";
  
      case 4:
        return "Thursday";
  
      case 5:
        return "Friday";
  
      case 6:
        return "Saturday";
  
      default:
        return "Don't Know";
    }
}