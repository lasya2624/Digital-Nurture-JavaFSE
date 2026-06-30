package com.cognizant.orm_learn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.service.CountryService;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(OrmLearnApplication.class);

    private static CountryService countryService;

    public static void main(String[] args) throws Exception {

        ApplicationContext context =
                SpringApplication.run(OrmLearnApplication.class, args);

        countryService = context.getBean(CountryService.class);

        testGetAllCountries();

        testFindCountry();

        testAddCountry();

        testUpdateCountry();

        testDeleteCountry();

        testSearchCountry();

    }

    private static void testGetAllCountries() {

        LOGGER.info("===== GET ALL COUNTRIES =====");

        List<Country> countries = countryService.getAllCountries();

        countries.forEach(System.out::println);

    }

    private static void testFindCountry() throws Exception {

        LOGGER.info("===== FIND COUNTRY =====");

        Country country = countryService.findCountryByCode("IN");

        System.out.println(country);

    }

    private static void testAddCountry() {

        LOGGER.info("===== ADD COUNTRY =====");

        Country country = new Country("NP", "Nepal");

        countryService.addCountry(country);

        System.out.println("Country Added");

    }

    private static void testUpdateCountry() throws Exception {

        LOGGER.info("===== UPDATE COUNTRY =====");

        countryService.updateCountry("NP", "Federal Democratic Republic of Nepal");

        System.out.println(countryService.findCountryByCode("NP"));

    }

    private static void testDeleteCountry() {

        LOGGER.info("===== DELETE COUNTRY =====");

        countryService.deleteCountry("NP");

        System.out.println("Country Deleted");

    }

    private static void testSearchCountry() {

        LOGGER.info("===== SEARCH COUNTRY =====");

        List<Country> countries = countryService.searchCountry("Ind");

        countries.forEach(System.out::println);

    }

}