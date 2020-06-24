package com.SpringBootApplication;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class NoteModifyer {
    String noteName;
    String noteValue;
    NoteCreator creator= new NoteCreator();

    public NoteModifyer() {
    }


    public void modify() {
        try {
            System.out.println("Which note do you want modify? ");
            BufferedReader readerName = new BufferedReader(new InputStreamReader(System.in));
            noteName = readerName.readLine();
         //   readerName.close();
            if (creator.existNote(noteName)) {
                modifyNoteValue();
                NoteSaver saver = new NoteSaver();
                saver.writeToFile(new Note(noteName, noteValue));
            } else System.out.println("com.SpringBootApplication.Note "+noteName+" does not exist");
        } catch (IOException ex) {
            System.out.println("Can't modify note cause:  " + ex.getMessage());
            ex.printStackTrace();
        }
    }

    public String modifyNoteName() throws IOException {
        System.out.println("Write new name for note: ");
        return noteName;
    }

    public String modifyNoteValue() throws IOException {
        System.out.println("Write the new value for note: ");
        BufferedReader readerValue = new BufferedReader(new InputStreamReader(System.in));
        noteValue = readerValue.readLine();
        //readerValue.close();
        return noteValue;

    }
}
