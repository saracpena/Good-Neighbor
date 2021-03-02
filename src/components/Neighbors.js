import { LinearProgress } from '@material-ui/core';
import React, { Component } from 'react';
import styled from 'styled-components'

import { getNeighbors } from "../services/neighborService";
import { getFakeNeighbors } from "../services/fakeNeighborService";

class Neighbors extends Component {

    state = {
        neighbors: [],
    }

    async componentDidMount() {

        //if gn-backend is not working un comment line 17 and comment out line 19 and 20, it will pull the data from the fakeNeighborService
        // this.setState({neighbors: getFakeNeighbors()})

        const { data: neighbors } = await getNeighbors();
        this.setState({neighbors: neighbors})
    }

    render(){

        const neighbors = this.state.neighbors

        if(neighbors && neighbors.length === 0) return <P>There are no neighbors in the database</P>
        
        return (
            <NeighboursContainer>
                <table className='table'>
                    <thead>
                        <tr>
                            <Th>NAME</Th>
                            <Th>ADDRESS1</Th>
                            <Th>ADDRESS2</Th>
                            <Th>CITY</Th>
                            <Th>STATE</Th>
                            <Th>ZIP</Th>
                            <Th>PHONE</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {neighbors && neighbors.map(neighbor =>(
                        <tr>
                            <Td>{neighbor.name}</Td>
                            <Td>{neighbor.address1}</Td>
                            <Td>{neighbor.address2}</Td>
                            <Td>{neighbor.city}</Td>
                            <Td>{neighbor.state}</Td>
                            <Td>{neighbor.zip}</Td>
                            <Td>{neighbor.phone}</Td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <P>Showing {neighbors && neighbors.length > 0 ? neighbors.length : 0 } neighbors in the database</P>
            </NeighboursContainer>
        )
    }
}

const NeighboursContainer = styled.div`
    flex: 0.7;
    grid-template-columns: 100px 50px 100px;
    grid-template-rows: 80px auto 80px; 
    column-gap: 10px;
    row-gap: 15px;
    flex-grow: 2;
    overflow-y: scroll;
    margin-top: 60px;
`;

const Th = styled.th`
    color: #FF851B;
    width: 250px;
    text-align: left;
`;

const Td = styled.th`
    color: #154c79;
    text-align: left;
`;

const P = styled.p`
    font-size: 15px;
    text-align: left;
    padding: 15px;
    color: #FF851B;
`

export default Neighbors;