import React, { useState } from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import axios from "axios";

function createData(name, websiteURL, numSites, status, statusUpdatedAt) {
    return { name, websiteURL, numSites, status, statusUpdatedAt };
  }

function Header() {
  const [search, setSearch] = useState("");
  const [tableRows, updateTableRow] = useState([]);

  // fetch('', {mode:'cors'})
  // https://cors-anywhere.herokuapp.com/
  //! submit button
  const handleKeyPress = (e) => {
    console.log(e.key);
    const cors = "https://cors-demo.glitch.me/allow-cors";
    if (e.key === "Enter") {

      const options = {
        method: 'GET',
        url: 'https://craigslist-search.p.rapidapi.com/q=&city&zipcode&miles',
        params: {
          city: 'Boston',
          q: 'Free, FREE, Donation, Volunteer,',
          miles: '1',
          zipcode: '02128'
        },
        headers: {
          'x-rapidapi-key': 'a3cfdb2522msh052ed764ce567ccp1b4364jsn052605a8e30d',
          'x-rapidapi-host': 'craigslist-search.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
      //  fetch('https://cors-demo.glitch.me/allow-cors', {mode:'cors'})

      //   const fetchAPI = () => {
      //       axios
      //         .get('https://offerup.com/api/search/v4/feed?limit=100&is_shippable_only=true&q=widget')
      //         .then((res) => {
      //           const newData = [];
        
      //           for (let i = 0; i < res.data.length; i++) {
      //             newData.push(
      //               createData(
      //                 res.data[i].charityName,
      //                 res.data[i].websiteURL,
      //                 res.data[i].mailingAddress.city,
      //                 res.data[i].irsClassification.deductibility,
      //                 'Active'
      //               )
      //             );
      //           }
      //           updateTableRow([...newData]);
      //           console.log(res.data);
      //         })
      //         .catch(error => console.log(error))
      //     };
      //     fetchAPI();
    }
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
        //   displayName
        />
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onKeyPress={handleKeyPress}
          placeholder="Search"
          type="text"
        ></input>
      </HeaderSearch>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

// Using Styled Components
const HeaderSearch = styled.div`
  flex: 0.6;//!was 0.4 added 0.2 = 0.6
  opacity: 1;
  border-radius: 6px;
  /* background-color: #421f44; */
  background-color: rgb(21,76,121);//!input background color
  text-align: center;
  display: flex;
  padding: 0 50px;
  border: 1px solid #0074D9;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: #7FDBFF;//#faebd7
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  /* background-color: var(--slack-color); */
  background-color: #001f3f;//#db8f00 header background
  color: rgb(204,231,232);//#faebd7 or #7FDBFF
`;

const HeaderLeft = styled.div`
  //h2
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  :hover {
    color: red;
  }

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;


      // axios.get(cors + 'https://api.offerupnow.com/api/search/v4/feed/')
      // .then(response => {
      //     console.log(response);
      // })
    //   const fetch = require("node-fetch");

    //   const getData = async () => {
    //     try {
    //       const response = await fetch(
    //         "https://www.facebook.com/api/graphql/",
    //         {
    //           headers: {
    //             "content-type": "application/x-www-form-urlencoded",
    //           },
    //           body:
    //             "av=0&__user=0&__a=1&__dyn=7xeUmBwjbgmwCwRyWzEsheC1swgE98nwgU6C4UKewSAAwCxW4E2czobohxi2i3qcw9m7oqx61BwvU2Vwb-q3q5Voy6o2xwbG783pwKx-8wlU-cBweq0wXAy85iaxq3m7Eaoy15wJwBgK4oK227Ua831wLwKwFxe0H8-7Eox21uwjojxm&__csr=&__req=l&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=2&__rev=1001662448&__s=aw8z00%3Asobw97%3Az0y5t9&__hsi=6788100950301358546-0&lsd=AVqtNhkO&jazoest=2748&__spin_r=1001662448&__spin_b=trunk&__spin_t=1580477913&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=MarketplaceNewSearchFeedPaginationQuery&variables=%7B%22count%22%3A16%2C%22cursor%22%3A%22%7B%5C%22pg%5C%22%3A0%2C%5C%22b2c%5C%22%3A%7B%5C%22br%5C%22%3A%5C%22%5C%22%2C%5C%22it%5C%22%3A0%2C%5C%22hmsr%5C%22%3Afalse%2C%5C%22tbi%5C%22%3A0%7D%2C%5C%22c2c%5C%22%3A%7B%5C%22br%5C%22%3A%5C%22AboZViCziur4EpVnWRWwdavBcJPPWqTrfg8iD56vK04vkKWAiDcN8b1XuNuthTcfJNzbH1Y3KMGJjO6LO2JBJaVKm3FHtbYsXLh3ch8Q2JY36VQTJVVARYuTq-ZPYiBEZ3EI3zcPM9iYvrWkDU-JjYqv6Y8DN7gRdBsBWFF8lVZngfNzx5sEofhN99gWRf1T9pIiIb35TyqF3PpKrNlgRwNIOtxgss2rm-WNqED5B6SGuHIasYrPkaLwtbcwC5NRGRMHT88aGhq-7mIpzoyBQhF2OPqjeZ-wH18TbW1Jz5byh-CzqUSMKRVb3X-M1jnlHNK_m75oWn9kRbeSGBlUEfTlAlK7i6MXfv3E8Nn_Hf5kEcRL7TyVyYLagFk8Q5OClYwj6gXEKWsE9lirRGHTQvUT%5C%22%2C%5C%22it%5C%22%3A8%2C%5C%22rpbr%5C%22%3A%5C%22%5C%22%2C%5C%22rphr%5C%22%3Afalse%7D%2C%5C%22irr%5C%22%3Afalse%7D%22%2C%22MARKETPLACE_FEED_ITEM_IMAGE_WIDTH%22%3A196%2C%22VERTICALS_LEAD_GEN_PHOTO_HEIGHT_WIDTH%22%3A40%2C%22MERCHANT_LOGO_SCALE%22%3Anull%2C%22params%22%3A%7B%22bqf%22%3A%7B%22callsite%22%3A%22COMMERCE_MKTPLACE_WWW%22%2C%22query%22%3A%22airpods%22%7D%2C%22browse_request_params%22%3A%7B%22filter_location_id%22%3A%22112967818720513%22%2C%22commerce_search_sort_by%22%3A%22BEST_MATCH%22%2C%22filter_price_lower_bound%22%3A0%2C%22filter_price_upper_bound%22%3A214748364700%7D%2C%22custom_request_params%22%3A%7B%22surface%22%3A%22SEARCH%22%2C%22search_vertical%22%3A%22C2C%22%7D%7D%7D&doc_id=2846705378683003",
    //           method: "GET",
    //         }
    //       );
    //       const { data } = await response.json();
    //       for (const edge of data.marketplace_search.feed_units.edges) {
    //         if (edge.node) {
    //           console.log(edge.node.listing.marketplace_listing_title);
    //         }
    //       }
    //     } catch (e) {
    //       console.log("Error happened", e);
    //     }
    //   };

    //   getData();