package com.daniel_dikiy.currency_denomination_app_test_task.model;

public class CurrencyDenomination {
    private String name;
    private int value;
    private int count;

    public CurrencyDenomination() {}

    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }

    public int getValue() {
        return value;
    }
    
    public void setValue(int value) {
        this.value = value;
    }

    public int getCount() {
        return count;
    }
    
    public void setCount(int count) {
        this.count = count;
    }
}
