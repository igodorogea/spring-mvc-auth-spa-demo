package com.aeong.springmvcauthspademo.backend.controller;

import com.aeong.springmvcauthspademo.backend.model.Field;
import com.aeong.springmvcauthspademo.backend.service.FieldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("api")
public class ApiController {
    @Autowired
    private FieldService fieldService;

    @GetMapping("/fields")
    public List<Field> getAllFields() {
        return fieldService.getFields();
    }

    @GetMapping("/me")
    public Principal getUserDetails(Principal principal) {
        return principal;
    }
}
