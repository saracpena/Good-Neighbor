# Good-Neighbor
## User Stories
### Helper & Beneficiary
#### Good Neighbor is a platform where neighbors unite to care for one another and their community especially during a time like COVID-19. Due to limited resources, we are only able to serve the city and neighborhoods of East Boston, MA 02128. At Good Neighbor, users are able to post their needs, list free items or volunteer their time to assist a neighbor in need (i.e. offer to pick-up/drop-off items or shovel someone's driveway etc.).

#### The 'Community' section allows you to view your nearby neighbors. Direct messaging is available for seamless communication via 'Inbox'. The 'Search items and services' section allows you to browse items/services posted by a neighbor. 'Saved items' stores items/services of interest. Please refer to our Disclaimer section for proper use of this website.
## Prototype 1
![GoodNeighbor-PT](https://media.giphy.com/media/ghLb47qnf919g7RDP9/giphy.gif)

## MVP Release
![GoodNeighbor-MVP](https://media.giphy.com/media/L7GOCR0oshtsFHj7dN/giphy.gif)
### Technologies Used

    • Front End
        • ReactJS  •Redux • HTML • JSX / JavaScript ES6 • ASYNC
        • Styled Components • Material UI • AXIOS • Swagger (APIs)
        • RESTful Routing   

    • Back End
        • PostgreSQL    • MVC - Model View Controller   • JAVA
        • Spring Boot   • 3rd Party APIs - Swagger 
        • Maven         • Project Lombok
# Deployed using Heroku

https://agoodneighbor.herokuapp.com/
### Unresolved Issues
    • OfferUp API will not render items, Access Denied, must manually render via console with:
        https://web.dev/cross-origin-resource-sharing/
        • fetch('https://cors-demo.glitch.me/', {mode:'cors'})
        • fetch('https://cors-demo.glitch.me/allow-cors', {mode:'cors'})

    • Heroku Deployment does not render backend? i.e. Community DB
### Backlog Items
    • Login Auth
    • Register Auth
    • Complete Direct Messaging Feature
    • Saved Items
    • Search Items and Services
    • Category Search
    • Category Saves
