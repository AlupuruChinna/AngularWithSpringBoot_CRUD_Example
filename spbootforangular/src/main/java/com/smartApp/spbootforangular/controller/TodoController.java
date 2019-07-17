package com.smartApp.spbootforangular.controller;

import com.smartApp.spbootforangular.beans.TodoBean;
import com.smartApp.spbootforangular.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.awt.*;
import java.net.URI;
import java.util.List;

@CrossOrigin( origins = "http://localhost:4200")
@RestController
public class TodoController {

    @Autowired
    TodoService service;

    @GetMapping("users/{name}/todos")
    public List<TodoBean> getAllTodos(@PathVariable String name){

        return service.findAll();
    }

    @DeleteMapping("users/{name}/todos/{id}")
    public ResponseEntity <Void> deletById(@PathVariable String name,@PathVariable long id){
            TodoBean todoBean = service.deleteById(id);

            if(todoBean!=null) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.notFound().build();

    }

    // for getting an individual JSON
    @GetMapping("users/{name}/todos/{id}")
    public TodoBean retriveTodo(@PathVariable String name,@PathVariable long id) {
        return service.findById(id)    ;
    }


    // for updating
    @PutMapping("users/{name}/todos/{id}")
    public ResponseEntity <TodoBean>updateTodo(
            @PathVariable String name,
            @PathVariable long id,
            @RequestBody TodoBean todoBean) {

        // return ResponseEntity() ;

        TodoBean todoUpdate = service.saveTodo(todoBean);
        return new ResponseEntity<>(todoUpdate, HttpStatus.OK);
    }


    @PostMapping("users/{name}/todos")
    public  ResponseEntity<Void> updateAddTodo(
            @PathVariable String name,
            @PathVariable long id,
            @RequestBody TodoBean todo
    ){

        // todo.setName("Smart");
        TodoBean addTodo = service.saveTodo(todo);
        //addTodo.setId(++id);
        URI uri= ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(addTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();

    }


    }
