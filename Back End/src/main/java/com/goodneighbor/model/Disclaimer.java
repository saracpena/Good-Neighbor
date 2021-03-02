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
@Table(name = "disclaimer")
@NoArgsConstructor
@AllArgsConstructor
public class Disclaimer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String header;
    private String body;
}
// my model with all the desired info for rendering