package com.ah.AHCodeCraft.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

@Component
public class BeanCounter {

    private final ApplicationContext context;

    @Autowired
    public BeanCounter(ApplicationContext context) {
        this.context = context;
    }

    public int countBeansByClasses(String[] classNames) {
        int totalCount = 0;
        for (String className : classNames) {
            String[] beanNames = null;
            try {
                beanNames = context.getBeanNamesForType(Class.forName(className));
            } catch (ClassNotFoundException e) {
                return 0;
            }
            totalCount += beanNames.length;
        }
        return totalCount;
    }
}

