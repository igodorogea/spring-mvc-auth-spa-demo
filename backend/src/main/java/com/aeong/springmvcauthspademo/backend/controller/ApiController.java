package com.aeong.springmvcauthspademo.backend.controller;

import com.aeong.springmvcauthspademo.backend.model.Field;
import com.aeong.springmvcauthspademo.backend.service.FieldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.security.Principal;
import java.util.List;

@Controller
@RequestMapping("api")
public class ApiController {
    @Autowired
    private FieldService fieldService;

    @RequestMapping(value = "/fields", method = RequestMethod.GET)
    @ResponseBody
    public List<Field> getAllFields() {
        return fieldService.getFields();
    }

    @RequestMapping(value = "/me", method = RequestMethod.GET)
    @ResponseBody
    public Principal getUserDetails(Principal principal) {
        return principal;
    }
}
