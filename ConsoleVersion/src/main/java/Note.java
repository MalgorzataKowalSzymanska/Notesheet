package com.SpringBootApplication;

public class Note {


    String name;
    String values;
    InicialisationBlock inicialisationBlock= new InicialisationBlock();


    public Note(String name, String values) {
        this.name = inicialisationBlock.getLocalisation() + name + ".txt";
        this.values = values;
    }

    public String getName() {
        return name;
    }

    public String getValues() {
        return values;
    }
}
