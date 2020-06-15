import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class NoteReader {
    String fileName;
    InicialisationBlock inicialisationBlock = new InicialisationBlock();


    public NoteReader(String fileName) {
        this.fileName = inicialisationBlock.getLocalisation() + fileName + ".txt";
    }

    public String read() {
        StringBuilder stringBuilder=new StringBuilder();
        try {
            File file = new File(fileName);
            Scanner reader = new Scanner(file);

            if (file.exists()) {
                stringBuilder.append("-------Note-------\n");
                while (reader.hasNext()) {
                    stringBuilder.append(reader.next()+" ");
                }
                stringBuilder.append("\n------------------");
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return stringBuilder.toString();
    }
}
