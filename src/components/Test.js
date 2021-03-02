import React, { useState } from 'react';
import axios from 'axios';

function createData(name, websiteURL, numSites, status, statusUpdatedAt) {
  return { name, websiteURL, numSites, status, statusUpdatedAt };
}
export default function Resources() {
  const [tableRows, updateTableRow] = useState([]);
  const [st, setSt] = useState('');
  const [zip, setZip] = useState('');
  const [search, setSearch] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAPI();
    console.log('Hello');
  };
  const fetchAPI = () => {
    axios
      .get(
        `https://api.offerupnow.com/api/search/v4/feed/`
      )
      .then((res) => {
        const newData = [];
        for (let i = 0; i < res.data.length; i++) {
          newData.push(
            createData(
              res.data[i].charityName,
              res.data[i].websiteURL,
              res.data[i].mailingAddress.city,
              res.data[i].irsClassification.deductibility,
              
            )
          );
        }
        updateTableRow([...newData]);
        console.log(res.data);
      });
  };
  return (
    <div>
         <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onKeyPress={handleSubmit}
          placeholder="Search"
          type="text"
        ></input>
    </div>
  );
}