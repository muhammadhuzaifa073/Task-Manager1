function showmessage(){
    let taskvalue = document.getElementById("task").value;
    if(taskvalue===""){
        alert("Please enter a task");

    }
    else{
    document.getElementById("list").innerHTML+= 
    "<li>" + "<span>" + taskvalue + "</span>" +
     "<div>" +
      "<button class='updatebtn' onclick=updatetask(this)>🖊 </button>" +
      "<button class='deletebtn' onclick=deletetask(this) >🗑</button>" + 
      "</div>" +
       "</li>";

         document.getElementById("task").value="";
    }
}
function updatetask(button){

    let li = button.parentElement.parentElement;
    let tasktext = li.querySelector("span").innerText;
    let updatetext = prompt("Update your task", tasktext);
    if(updatetext===""){
        alert("Please enter a task");
    }
    else{
        li.querySelector("span").innerText = updatetext;
    }

}
function deletetask(button){
    button.parentElement.parentElement.remove();
    // let li= button.
}
