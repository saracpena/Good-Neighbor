# Good-Neighbor
## User Stories
### Helper & Beneficiary
#### Good neighbor was created to bring the community together especially in a time of crisis like the ongoing pandemic. Due to limited resources, we are only able to serve the city and neighborhoods of East Boston, MA 02128. At Good Neighbor, users are able to post their needs, items, or can volunteer their time to assist a neighbor in need (i.e. offer to pick-up/drop-off needed items).
#### The Community section allows you to view your nearby neighbors. Direct messaging is available for seamless communication. The search items section allow you to browse items/services from your neighbor. Saved items stores items/services of interest. Please refer to our Disclaimer section for use of website. 
#### Technologies Used: 
• Java  • Spring Boot • Maven • MVC - Model View Controller 
• 3rd Party APIs - Swagger • Project Lombok 

## Prototype 1
![PhotoApp](https://media.giphy.com/media/MNEZVtoMiyvtX0PHdv/giphy.gif)
![GoodNeighbor-PT](https://media.giphy.com/media/ghLb47qnf919g7RDP9/giphy.gif)

## MVP Release

![SocialMediaAppFinal](https://media.giphy.com/media/xFaYzxQHPBTY9e3eut/giphy.gif)
![GoodNeighbor-MVP](https://media.giphy.com/media/xFaYzxQHPBTY9e3eut/giphy.gif)
### Technologies Used

    • Front End
@@ -23,7 +23,7 @@
        • HTML      • Styled Components     • Swagger (APIs)

    • Back End
        • Java          • MVC - Model View Controller
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
### Backlog Items
    • Login Auth
    • Register Auth
    • Complete Direct Messaging Feature
    • Saved Items
    • Search Items and Services
    • Category Search
    • Category Saves
