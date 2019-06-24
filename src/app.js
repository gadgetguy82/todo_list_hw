import Vue from "vue";
import TextFormat from "./helpers/text_format.js"

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        {name: "Laundry", priority: "high", completed: true},
        {name: "Shopping", priority: "high", completed: false},
        {name: "Wash Car", priority: "low", completed: false},
        {name: "Take out rubbish", priority: "low", completed: false},
        {name: "Buy airplane tickets", priority: "low", completed: false},
        {name: "Book hotel", priority: "low", completed: false},
        {name: "Book restaurant reservation", priority: "low", completed: false},
        {name: "Appointment with bank", priority: "low", completed: false},
        {name: "Dentist appointment", priority: "low", completed: false},
        {name: "Find new flat", priority: "low", completed: false},
        {name: "Buy lotto ticket", priority: "low", completed: false}
      ],
      newItem: "",
      newPriority: "low",
      newPriorityCheckbox: false
    },
    methods: {
      addToList: function () {
        this.todos.push({
          name: TextFormat.capitalise(this.newItem),
          priority: this.newPriority,
          completed: false
        });
        this.newItem = "";
        this.newPriority = "low";
        this.newPriorityCheckbox = false;
      },
      setPriority: function (index) {
        this.todos[index].priority = this.todos[index].priority === "low" ? "high" : "low";
      },
      setCompleted: function (index) {
        this.todos[index].completed = this.todos[index].completed === true ? false : true;
      },
      setNewPriorityCheckbox: function () {
        this.newPriorityCheckbox = this.newPriorityCheckbox === false ? true : false;
        this.newPriority = this.newPriorityCheckbox ? "high" : "low";
      },
      setNewPriorityRadio: function (priority) {
        this.newPriority = priority;
        this.newPriorityCheckbox = priority === "high" ? true : false;
      }
    }
  });
});
