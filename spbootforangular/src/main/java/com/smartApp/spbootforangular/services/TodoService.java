package com.smartApp.spbootforangular.services;

import com.smartApp.spbootforangular.beans.TodoBean;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoService {

    private static List<TodoBean> todos = new ArrayList<>();
    static int id = 0;
    static
    {
        todos.add(new TodoBean(++id, "chinna","Learn Java", new Date()));
        todos.add(new TodoBean(++id, "chanty",  "Learn Angular", new Date()));
        todos.add(new TodoBean(++id, "Smart","Learn Python", new Date()));

    }


    public List<TodoBean> findAll() {
        return todos;
    }


    //for Delete

    public  TodoBean deleteById(long id)
    {
        TodoBean todo= findById(id);
        todos.remove(todo);

        if(todo==null)
            return null;
        return todo;
    }

    public TodoBean findById(long id)
    {
        for (TodoBean todo:todos
             ) {
                if(todo.getId()==id)
                {
                    return todo;
                }
        }
        return null;
    }

    public TodoBean saveTodo(TodoBean todoBean) {
        if(todoBean.getId()==-1 || todoBean.getId()==0) {
            todoBean.setId(++id);
            todos.add(todoBean);
        } else {
            deleteById(todoBean.getId()) ;
            todos.add(todoBean);
        }

        return  todoBean;
    }

}

