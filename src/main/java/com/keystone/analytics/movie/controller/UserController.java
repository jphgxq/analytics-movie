package com.keystone.analytics.movie.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
 
@Controller
@RequestMapping("/")
public class UserController {
 
    @RequestMapping("test")
    public String index(){
        return "test";
    }
     
}