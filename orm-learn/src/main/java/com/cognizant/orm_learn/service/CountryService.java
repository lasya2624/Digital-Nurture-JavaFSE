package com.cognizant.orm_learn.service;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.repository.CountryRepository;
import com.cognizant.orm_learn.service.exception.CountryNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Transactional
    public Country findCountryByCode(String code) throws CountryNotFoundException {

        Optional<Country> result = countryRepository.findById(code);

        if (!result.isPresent()) {
            throw new CountryNotFoundException("Country not found");
        }

        return result.get();
    }

    @Transactional
    public void updateCountry(String code, String newName)
            throws CountryNotFoundException {

        Optional<Country> result = countryRepository.findById(code);

        if (!result.isPresent()) {
            throw new CountryNotFoundException("Country not found");
        }

        Country country = result.get();

        country.setName(newName);

        countryRepository.save(country);
    }

}