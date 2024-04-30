package com.ah.AHCodeCraft.controllers;

import com.ah.AHCodeCraft.utils.BeanCounter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BeanCountController {

    @Autowired
    private BeanCounter beanCounter;

    @GetMapping("/countBeans")
    public int countBeansForClasses(@RequestParam("classNames") String[] classNames) {
        return beanCounter.countBeansByClasses(classNames);
    }
}