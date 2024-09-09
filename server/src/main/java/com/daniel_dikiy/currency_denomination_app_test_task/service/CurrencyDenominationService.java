package com.daniel_dikiy.currency_denomination_app_test_task.service;

import java.util.List;

import com.daniel_dikiy.currency_denomination_app_test_task.model.CurrencyDenomination;

public interface CurrencyDenominationService {
    public List<CurrencyDenomination> getAllCurrencyDenominations();
    public List<CurrencyDenomination> findExistingCurrencyDenomination(String amountValue);
}
