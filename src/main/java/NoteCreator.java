import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class NoteCreator {
    Note newNote;
    NoteCollections noteCollections = new NoteCollections();

    public Note  createNote() throws IOException {
        System.out.println("Write a note");
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String noteValues = reader.readLine();
        System.out.println("write name of note ");
        String noteName = reader.readLine();
        if (existNote(noteName)) {
            System.out.println("Note with that name exist. Do you want modify existing note? press: y (yes), n (no to dismiss draft) or c (to write new name of note):");
            //* TODO check if modify existing note*/
            switch (reader.readLine().charAt(0)) {
                case 'y':
                    break;
                case 'n':
                    NoteReader noteReader = new NoteReader(noteName);
                    noteValues = noteReader.read();
                    break;
                case 'c':
                    noteName = reader.readLine();
                    break;
                default:
                    newNote = new Note(noteName, noteValues);
            }

        }
        newNote = new Note(noteName, noteValues);
        return newNote;
    }

    public boolean existNote(String noteName) throws IOException {
        boolean exist = false;
        if (noteCollections.getAllNotesName().stream().anyMatch(p -> p.equals(noteName))) {
            return true;
        } else return exist;
    }
}
