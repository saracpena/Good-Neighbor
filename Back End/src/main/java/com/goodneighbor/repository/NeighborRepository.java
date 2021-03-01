package com.goodneighbor.repository;

import com.goodneighbor.model.Neighbor;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NeighborRepository extends CrudRepository<Neighbor, Long> {

}
