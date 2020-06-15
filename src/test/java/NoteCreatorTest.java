import org.junit.jupiter.api.Test;

import java.io.IOException;

public class NoteCreatorTest {
    @Test
    public void shouldCreateNote(){
        try{
        NoteCreator noteCreator=new NoteCreator();
        noteCreator.createNote();
    }catch (IOException e){
            System.out.println(e.getStackTrace());
        }}
}
