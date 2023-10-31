package com.codewithrohit.fullstackbackend.exception;

public class UserNotFoundException extends RuntimeException{

    public UserNotFoundException(Long id){ super("Student not found" +id);}

}
