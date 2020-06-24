package com.springbootapplication.demo.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="notes")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Note {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long note_id;

    private String note_name;
    private String note_value;

    public Note() {
    }

    public Long getNote_id() {
        return note_id;
    }

    public void setNote_id(Long note_id) {
        this.note_id = note_id;
    }

    public String getNote_name() {
        return note_name;
    }

    public void setNote_name(String note_name) {
        this.note_name = note_name;
    }

    public String getNote_value() {
        return note_value;
    }

    public void setNote_value(String note_value) {
        this.note_value = note_value;
    }
}
