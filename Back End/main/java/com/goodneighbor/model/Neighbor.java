package com.goodneighbor.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "neighbors")
@NoArgsConstructor
@AllArgsConstructor
public class Neighbor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String address1;
    private String address2;
    private String city;
    private String state;
    private String zip;
    private String phone;
}
