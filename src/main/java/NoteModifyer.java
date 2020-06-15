import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class NoteModifyer {
    String noteName;
    String noteValue;

    public NoteModifyer() {
    }


    public void modify() throws IOException {
        System.out.println("Which note do you want modify? ");
        //TODO check if exist
        modifyNoteName();
        modifyNoteValue();

       // NoteReader oldreader = new NoteReader(noteName);
        //oldreader.read();
        NoteSaver saver = new NoteSaver();
        saver.writeToFile(new Note(noteName, noteValue));
    }

    public String modifyNoteName() throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        noteName = reader.readLine();
        reader.close();
        return noteName;
    }

    public String modifyNoteValue() throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        noteValue = reader.readLine();
        reader.close();
        return noteValue;

    }
    //modify name metoda
    //modify value metoda
}
