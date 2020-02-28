new Vue({
    el: "#todos",
    data: {
        newTodo: "",
        todoList: [],
    },
    methods: {
        addTodo: function () {
            var value = this.newTodo
            if (!value) {
                return
            }
            this.todoList.push({
                title: value,
            })
            this.newTodo = ""
        }
    },

})