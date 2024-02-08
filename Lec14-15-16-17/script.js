let addbtn= document.querySelector(".add-btn");
let addtask=false;
let modelcont=document.querySelector(".modal-cont");
addbtn.addEventListener("click",function(e){
    // display the module 
    if(addtask==false)
    {
        //show the model cont
         modelcont.style.display="none";

        addtask=true;
    }
    else 
    {
        modelcont.style.display="flex";
        addtask=false;

    }
});