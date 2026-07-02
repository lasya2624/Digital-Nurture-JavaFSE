package com.cognizant.ormlearn.repository;

import com.cognizant.ormlearn.model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface StockRepository extends JpaRepository<Stock, Integer> {

    // Facebook stocks in September 2019
    List<Stock> findByCodeAndDateBetween(
            String code,
            LocalDate startDate,
            LocalDate endDate);

    // Google stocks with closing price > value
    List<Stock> findByCodeAndCloseGreaterThan(
            String code,
            Double price);

    // Top 3 highest volumes
    List<Stock> findTop3ByOrderByVolumeDesc();

    // Lowest 3 Netflix stock prices
    List<Stock> findTop3ByCodeOrderByCloseAsc(String code);

}