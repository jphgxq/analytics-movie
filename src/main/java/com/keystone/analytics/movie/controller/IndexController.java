package com.keystone.analytics.movie.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class IndexController {
    @RequestMapping("index")
    public String index(){
        return "index";
    }
    
    @RequestMapping("category")
    public String category(){
    	return "category";
    }
}