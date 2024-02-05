const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

let target='Kolkata'


form.addEventListener('submit', search);


function search(e)
{
    e.preventDefault(); // stops the page from refresh on form submit button
    // if this isn't called then page is refreshed and the new data is lost 
    console.log("searching")
    target= searchField.value;
    fetchData(target);
}
async function  fetchData(target)
{
    try{
    let url=`https://api.weatherapi.com/v1/current.json?key= bb77801adb124e3f897182112240402&q=${target}&aqi=yes`
    const response= await(fetch(url));
    const data= await response.json();

    // console.log(data);

    let current_temperature= data.current.temp_c;
    let current_condition = data.current.condition.text;

    let location = data.location.name;
    let local_time = data.location.localtime;
    let imageurl = data.current.condition.icon;

    console.log(current_temperature+" "+current_condition+" "+location+" "+local_time+" "+imageurl);
    updateDom(current_temperature, location, local_time, imageurl, current_condition);

     }
    catch (error)
    {
       console.log(error);
    }
}

// fetchData(target);

function updateDom(temp, city,time, emoji, condition)
{


    console.log(time);
    const exacttime= time.split(" ")[1];
    const exactdate= time.split(" ")[0];
    

    const day= getDayFullName(new Date(exactdate).getDay());
    
    dateField.innerText = `${exacttime}   ${day}   ${exactdate}`
    temperatureField.innerHTML= temp+"°C";
    cityField.innerHTML= city;
    // dateField.innerHTML= time;
    emojiField.src= emoji;// as this is a image so we use src
    weatherField.innerHTML= condition;


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