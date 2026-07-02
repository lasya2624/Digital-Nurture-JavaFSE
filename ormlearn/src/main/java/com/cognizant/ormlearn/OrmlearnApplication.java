package com.cognizant.ormlearn;

import com.cognizant.ormlearn.repository.CountryRepository;
import com.cognizant.ormlearn.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDate;

@SpringBootApplication
public class OrmlearnApplication implements CommandLineRunner {

    @Autowired
    CountryRepository countryRepository;

    @Autowired
    private StockRepository stockRepository;

    public static void main(String[] args) {
        SpringApplication.run(OrmlearnApplication.class, args);

    }


    @Override
    public void run(String... args) {

        System.out.println("Contains 'ou'");

        countryRepository.findByNameContaining("ou")
                .forEach(System.out::println);

        System.out.println("------------------");

        System.out.println("Contains 'ou' Sorted");

        countryRepository.findByNameContainingOrderByNameAsc("ou")
                .forEach(System.out::println);

        System.out.println("------------------");

        System.out.println("Starts with Z");

        countryRepository.findByNameStartingWith("Z")
                .forEach(System.out::println);


        testFacebookStocks();

        testGoogleStocks();

        testTopVolume();

        testLowestNetflix();
    }

    private void testFacebookStocks() {

        stockRepository.findByCodeAndDateBetween(
                        "FB",
                        LocalDate.of(2019,9,1),
                        LocalDate.of(2019,9,30))
                .forEach(System.out::println);
    }
    private  void testGoogleStocks() {

        stockRepository.findByCodeAndCloseGreaterThan(
                        "GOOGL",
                        1250.0)
                .forEach(System.out::println);

    }
    private void testTopVolume() {

        stockRepository.findTop3ByOrderByVolumeDesc()
                .forEach(System.out::println);

    }
    private void testLowestNetflix() {

        stockRepository.findTop3ByCodeOrderByCloseAsc("NFLX")
                .forEach(System.out::println);

    }
}