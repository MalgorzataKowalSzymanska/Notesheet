package com.SpringBootApplication;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

public class NoteCollections {
    /**
     * return list of notes
     */
    InicialisationBlock inicialisationBlock=new InicialisationBlock();
    String path = inicialisationBlock.localisation;

    public List<String> getAllNotesName() throws IOException {
        return Files.walk(Paths.get(path)).filter(Files::isRegularFile)
                .filter(path1 -> path1.toString().endsWith(".txt"))
                .map(Path::getFileName)//.toString().split(".")[0]
                .map(Path::toString)
                .map(s -> s.replace(".txt", ""))
                .collect(Collectors.toList());
    }

    public void  display()throws IOException {
        List<String> list=getAllNotesName();
        System.out.println("----------------");
        for (String name: list){
            System.out.print(name+" ");
        }

            System.out.println("\n----------------");

    }
}
