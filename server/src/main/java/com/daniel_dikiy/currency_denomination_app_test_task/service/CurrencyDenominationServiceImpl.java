package com.daniel_dikiy.currency_denomination_app_test_task.service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import org.springframework.stereotype.Service;

import com.daniel_dikiy.currency_denomination_app_test_task.model.CurrencyDenomination;

@Service
public class CurrencyDenominationServiceImpl implements CurrencyDenominationService {
    
    @Override
    public List<CurrencyDenomination> getAllCurrencyDenominations() {
        List<CurrencyDenomination> currencyDenominations = new ArrayList<>();

        String[] denominationNames = {
                "0,01",
                "0,02",
                "0,05",
                "0,10",
                "0,20",
                "0,50",
                "1,00",
                "2,00",
                "5,00",
                "10,00",
                "20,00",
                "50,00",
                "100,00",
                "200,00"
            };

        for (int i = 0; i < denominationNames.length; i++) {

            CurrencyDenomination denomination = new CurrencyDenomination();
            int denominationValue = (int) (Double.parseDouble(denominationNames[i].replace(",", ".")) * 100);

            denomination.setName(denominationNames[i]);
            denomination.setValue(denominationValue);
            currencyDenominations.add(denomination);
        }

        currencyDenominations.sort(Comparator.comparingInt(CurrencyDenomination::getValue).reversed());
        
        return currencyDenominations;
    }

    @Override
    public List<CurrencyDenomination> findExistingCurrencyDenomination(String amountValue) {
        List<CurrencyDenomination> allCurrencyDenominations = this.getAllCurrencyDenominations();
        List<CurrencyDenomination> existingCurrencyDenominations = new ArrayList<>();

        int amount = (int) (Double.parseDouble(amountValue.replace(",", ".")) * 100);
        
        for (CurrencyDenomination denomination : allCurrencyDenominations) {
            int count = amount / denomination.getValue();
            amount %= denomination.getValue();

            if (count > 0) {
                denomination.setCount((int) count);
                existingCurrencyDenominations.add(denomination);
            }
        }
        
        return existingCurrencyDenominations;
    }

}
