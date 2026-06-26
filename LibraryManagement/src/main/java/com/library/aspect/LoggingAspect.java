package com.library.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Before;

@Aspect
public class LoggingAspect {

    @Before("execution(* com.library.service.*.*(..))")
    public void beforeMethod(JoinPoint joinPoint) {

        System.out.println("========== BEFORE ==========");
        System.out.println("Method Name : " + joinPoint.getSignature().getName());

    }

    @After("execution(* com.library.service.*.*(..))")
    public void afterMethod(JoinPoint joinPoint) {

        System.out.println("========== AFTER ==========");
        System.out.println("Method Name : " + joinPoint.getSignature().getName());

    }

}