import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class ConsoleMenagement {

    String welcomeWords = "Hello, Choose action? To braek programm press 9";
    String askAobutNote = "Write a note below ";
    String addNote = "Press 1 to add note";
    String displayAllNotes = "Press 3 to display name of notes";
    String modifyNote = "Press 2 to modify note";
    String displayNote = "press 4 to display note";

    public void manage() throws IOException, InterruptedException {
        System.out.println(getWelcomeWords());
        System.out.println(addNote);
        System.out.println(modifyNote);
        System.out.println(displayAllNotes);
        System.out.println(displayNote);
    }

    public void navigateMenu() throws IOException, InterruptedException {
        char actionChar;
        do {
            manage();
            Scanner action = new Scanner(System.in);
            actionChar = action.next().charAt(0);
            switch (actionChar) {
                case '1':
                    NoteCreator noteCreator = new NoteCreator();
                    NoteSaver noteSaver = new NoteSaver();
                    noteSaver.writeToFile(noteCreator.createNote());
                    break;
                case '2':
                    NoteModifyer modifier = new NoteModifyer();
                    modifier.modify();
                    break;
                case '3':
                    NoteCollections noteCollections = new NoteCollections();
                    noteCollections.display();

                    break;
                case '4':
                    System.out.println("Write name of note");
                    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
                    NoteReader noteReader = new NoteReader(reader.readLine());
                    System.out.println(noteReader.read());
            }
        } while (actionChar != '9');

    }

    public void welcomeMenu(String welcomeWords) {
        System.out.println(welcomeWords);
    }

    public String getWelcomeWords() {
        return welcomeWords;
    }

    public String getAskAobutNote() {
        return askAobutNote;
    }

    public void welcomeWords(String s) {
        System.out.println(s);
    }
}
