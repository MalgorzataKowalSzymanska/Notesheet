package com.springbootapplication.demo.repositories;

import com.springbootapplication.demo.models.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {
}
