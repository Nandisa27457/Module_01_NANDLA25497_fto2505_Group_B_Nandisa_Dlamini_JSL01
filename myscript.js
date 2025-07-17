//Prompt for task 1

let title=prompt("Enter title")// prompt user to enter title
let task= prompt("Enter task 1 title:");//Prompt user for task title
let statusInput= prompt("Enter status input"); //Prompt user for status input 

if(statusInput !== "Todo, doing , done"){
    window.alert("Invalid status.Please enter 'todo','done' or 'doing'")   
    
} 
else {
    console.log(task, "title:" + statusInput) 
}



