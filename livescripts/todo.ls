angular.module 'todoApp' []
.controller 'TodoListController' !->
    todoList = @
    todoList.todos = []

    todoList.addTodo = !->
        todoList.todos.push { text:todoList.todoText, done:false }
        todoList.todoText = ''

    todoList.remaining = !->
        count = 0
        angular.forEach todoList.todos, (todo)->
            count += todo.done ? 0 : 1
        return count

    todoList.archive = !->
        oldTodos = todoList.todos
        todoList.todos = []
        angular.forEach oldTodos, (todo)->
            if !todo.done
                todoList.todos.push todo
