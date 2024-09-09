package com.daniel_dikiy.currency_denomination_app_test_task.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daniel_dikiy.currency_denomination_app_test_task.model.CurrencyDenomination;
import com.daniel_dikiy.currency_denomination_app_test_task.model.CurrencyDenominationRequest;
import com.daniel_dikiy.currency_denomination_app_test_task.service.CurrencyDenominationService;

@RestController
@RequestMapping("/api/currencyDenomination")
@CrossOrigin
public class CurrencyDenominationController {
    @Autowired
    private CurrencyDenominationService currencyDenominationService;

    @GetMapping("/getAll")
    public List<CurrencyDenomination> list() {
        return currencyDenominationService.getAllCurrencyDenominations();
    }

    @PostMapping("/findExistingCurrencyDenominations")
    public List<CurrencyDenomination> findExistingList(@RequestBody CurrencyDenominationRequest request) {
        return currencyDenominationService.findExistingCurrencyDenomination(request.getAmountValue());
    }
}
