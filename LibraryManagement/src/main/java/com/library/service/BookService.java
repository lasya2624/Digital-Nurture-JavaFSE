package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;
    private String libraryName;

    // Constructor Injection
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // Setter Injection
    public void setLibraryName(String libraryName) {
        this.libraryName = libraryName;
    }

    public void displayService() {
        System.out.println("Library Name : " + libraryName);
        System.out.println("BookService Bean Created");
        bookRepository.displayRepository();
    }
}