let dataArray=[
    {name: "Bitan",age: 25},
    {name: "Rahul",age: 26},
]// dummy API data
function getData()
{
  setTimeout(function()
  {
    let output='';
       dataArray.forEach(function(e)
       {
        output+= `<li> ${e.name} </li>`
               
       })

       document.body.innerHTML=output;
  },3000);
}

function createData(cb)
{
     setTimeout(function(){
           dataArray.push({name: "Rohit",age: 27})
           cb()
     },1000)
}
// getData()
createData(getData)
