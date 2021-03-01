package com.goodneighbor.repository;

import com.goodneighbor.model.Disclaimer;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DisclaimerRepository extends CrudRepository<Disclaimer, Long> {

}
