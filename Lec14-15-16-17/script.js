let addbtn= document.querySelector(".add-btn");
let addtask=false;
let modelcont=document.querySelector(".modal-cont");
let maincont=document.querySelector(".main-cont");
// let textarea=document.querySelector("")
let textAreaCont = document.querySelector('.textarea-cont')

let allPriorityColors = document.querySelectorAll(".priority-colors");
let colors=["light-pink","light-blue","light-green","black"];
let modelticketcolor='black';
for(let i=0;i<allPriorityColors.length;i++)
{

  
    allPriorityColors[i].addEventListener("click", function(e)
    {
        allPriorityColors[i].classList.add("active");
    });
    // allPriorityColors[i].addEventListener("mouseout", function(e)
    // {
    //     allPriorityColors[i].classList.remove("active");
    // });
}

for(let i=0;i<allPriorityColors.length;i++)
{
    allPriorityColors[i].addEventListener("click", function(e){
        
         allPriorityColors[i].classList.forEach(function(color){

            if(colors.includes(color))
            {
               
                modelticketcolor=color;
            }
         })


    });
}


addbtn.addEventListener("click",function(e){
    // display the module 
    if(addtask==false)
    {
        //show the model cont
         modelcont.style.display="flex";

        addtask=true;
    }
    else 
    {
        modelcont.style.display="none";
        addtask=false;

    }
});

modelcont.addEventListener("keydown",function(e){

    if(e.key=='Shift' || e.key=='Enter')
    {
        
        console.log(e.target.innerText);
        createTicket(textAreaCont.value, modelticketcolor);
        modelticketcolor='black';
        modelcont.style.display="none";

        allPriorityColors.forEach(function(node){
            node.classList.remove("active");
          
    
    
        });



    }

});



function createTicket(task,color)
{
    // console.log(color);
    // as soon as shift is entered it should run 
    //html code should be generated dynamically 
    let ticketcont = document.createElement("div");
    // <div class="ticket-cont"> this div is created

    ticketcont.setAttribute("class","ticket-cont");
    // <div class="ticket-cont"> this div is created

    ticketcont.innerHTML=`<div class="ticket-color ${color} "></div>
    <div class="ticket-id">12345</div>
    <div class="task-area" contenteditable="false">${task}</div>`;
    maincont.appendChild(ticketcont);
    textAreaCont.value = '';


}