package com.cognizant.orm_learn.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.repository.CountryRepository;
import com.cognizant.orm_learn.service.exception.CountryNotFoundException;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Transactional(readOnly = true)
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Country findCountryByCode(String code) throws CountryNotFoundException {

        Optional<Country> result = countryRepository.findById(code);

        if (!result.isPresent()) {
            throw new CountryNotFoundException("Country not found");
        }

        return result.get();
    }

    // ************** HANDS-ON 7 **************
    @Transactional
    public void addCountry(Country country) {
        countryRepository.save(country);
    }

}