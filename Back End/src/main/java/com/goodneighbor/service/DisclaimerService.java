package com.goodneighbor.service;

import com.goodneighbor.model.Disclaimer;
import com.goodneighbor.repository.DisclaimerRepository;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// gets all my disclaimers from my DB i.e. findAll
@Service
public class DisclaimerService implements IDisclaimerService {

    @Autowired
    private DisclaimerRepository repository;

    @Override
    public List<Disclaimer> findAll() {

        return (List<Disclaimer>) repository.findAll();
    }
}
