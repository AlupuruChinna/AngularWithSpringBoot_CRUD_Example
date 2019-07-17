package com.smartApp.spbootforangular.beans;

import java.util.Date;
import java.util.Objects;

public class TodoBean {
    int id;
    String name;
    String location;
    Date date;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }


    public TodoBean(int id, String name, String location, Date date) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.date = date;
    }

    @Override
    public String toString() {
        return "TodoBean{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", location='" + location + '\'' +
                ", date=" + date +
                '}';
    }

    public TodoBean()
    {

    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TodoBean todoBean = (TodoBean) o;
        return id == todoBean.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
