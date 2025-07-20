//Prompt for task-1
let task = prompt("Enter task 1 title:"); //Prompt user for task title
let description = prompt("Enter description"); // prompt user to enter description

statusInput = "";
while (
  statusInput !== "todo" &&
  statusInput !== "doing" &&
  statusInput !== "done"
) {
  statusInput = prompt("Enter status input").toLowerCase(); //Prompt user for status input

  if (statusInput === "done") {
    console.log("Title: " + task + " ,status:" + statusInput);
  } else if (statusInput === "todo" || statusInput === "doing") {
    console.log("No tasks completed. Let's get to work!");
  } else {
    alert("Invalid status, Please enter 'todo', 'doing', or'done'");
  }
}

//Prompt for task-2
let task1 = prompt("Enter task 2 title:"); //Prompt user for task title-2
let description2 = prompt("Enter description"); // prompt user to enter description

statusInput2 = "";
while (
  statusInput2 !== "todo" &&
  statusInput2 !== "doing" &&
  statusInput2 !== "done"
) {
  statusInput2 = prompt("Enter status input").toLowerCase(); //Prompt user for status input

  if (statusInput2 === "done") {
    console.log("Title" + task + ",status:" + statusInput2);
  } else if (statusInput2 === "todo" || statusInput2 === "doing") {
    console.log("No tasks completed. Let's get to work!");
  } else {
    alert("Invalid status, Please enter 'todo', 'doing', or'done'");
  }
}

