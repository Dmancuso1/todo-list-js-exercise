// https://web.compass.lighthouselabs.ca/days/w02d5/activities/554
/*
We are using objects to group state and logic in order to keep the code more organized. Now everything associated to a task has been encapsulated inside the task object.

This also makes the code very readable. Accessing properties or methods of our tasks is as simple as writing code like this:
*/



function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() { // Print the state of a task to the console in a nice readable way
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() { // Marks the provided task as completed.
      this.complete = true;
    }

  };
  return task;
}








// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];


task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed


// console.log(tasks);


