package com.aeong.springmvcauthspademo.backend.model;

public class Field {
    private String id;
    private String type;
    private String appearance;

    public Field(String id, String type, String appearance) {
        this.id = id;
        this.type = type;
        this.appearance = appearance;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getAppearance() {
        return appearance;
    }

    public void setAppearance(String appearance) {
        this.appearance = appearance;
    }
}
