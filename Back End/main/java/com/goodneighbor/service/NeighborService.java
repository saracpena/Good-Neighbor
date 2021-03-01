package com.goodneighbor.service;

import com.goodneighbor.model.Neighbor;
import com.goodneighbor.repository.NeighborRepository;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NeighborService implements INeighborService {

    @Autowired
    private NeighborRepository repository;

    @Override
    public List<Neighbor> findAll() {

        return (List<Neighbor>) repository.findAll();
    }
}