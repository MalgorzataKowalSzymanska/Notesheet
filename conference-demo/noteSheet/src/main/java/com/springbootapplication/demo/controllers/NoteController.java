package com.springbootapplication.demo.controllers;

import com.springbootapplication.demo.models.Note;
import com.springbootapplication.demo.repositories.NoteRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/notes")
public class NoteController {


    private final NoteRepository noteRepository;

    public NoteController(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Note> get() {
        return noteRepository.findAll();
    }

    @RequestMapping(value="{id}", method = RequestMethod.GET)
    public Note get(@PathVariable Long id) {
        return  noteRepository.getOne(id);

    }

    @PostMapping
    public Note create(@RequestBody Note note) {
        return noteRepository.saveAndFlush(note);
    }

    @DeleteMapping(value="{id}")
    public void delete(@PathVariable Long id){
         noteRepository.deleteById(id);
    }

    @RequestMapping(value="{id}", method = RequestMethod.PUT)
    public Note update(@PathVariable Long id, @RequestBody Note note){
        Note existingNote= noteRepository.getOne(id);
        BeanUtils.copyProperties(note,existingNote,"note_id");
        return noteRepository.saveAndFlush(existingNote);
    }
}
