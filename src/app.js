import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        {name: "Laundry", priority: "high"},
        {name: "Shopping", priority: "high"},
        {name: "Wash Car", priority: "low"}
      ],
      newItem: "",
      newPriority: ""
    },
    methods: {
      addToList: function () {
        this.todos.push({name: this.newItem, priority: this.newPriority});
        this.newItem = "";
        this.newPriority = "";
      }
    }
  });
});
