package com.aeong.springmvcauthspademo.backend.service;

import com.aeong.springmvcauthspademo.backend.model.Field;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class FieldService {
    private static final List<Field> fields = new ArrayList<>();

    static {
        fields.add(new Field("FD0001", "string", "text"));
        fields.add(new Field("FD0002", "string", "dropdown"));
        fields.add(new Field("FD0003", "date", "date"));
        fields.add(new Field("FD0004", "strings", "text"));
        fields.add(new Field("FD0005", "number", "input"));
    }

    public List<Field> getFields() {
        return fields;
    }
}
