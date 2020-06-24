package com.SpringBootApplication;

import java.io.FileWriter;
import java.io.IOException;

public class NoteSaver {
    NoteCollections noteCollections = new NoteCollections();

    public NoteSaver() {

    }
    // TODO: zabezpieczenie czy  notatka o danej nazwie juz istnieje

    public void writeToFile(Note note) {
        try {
            FileWriter file = new FileWriter(note.name);
            file.write(note.values);
            file.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // chech if the name exist
    //if exist ask about modification
    //else create new com.SpringBootApplication.Note


}
