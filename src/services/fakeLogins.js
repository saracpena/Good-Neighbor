const logins = [
    {
        id: 1,
        email:"buddy@gmail.com",
        password:"12345678"
    },
    {
        id: 2,
        name: "Kate Hopkins",
        address2: "2815 Webster Street",
        city: "East Boston",
        state: "Massachusetts",
        zip: "02128",
        phone: "617-217-4113"
    },
    {
        id: 3,
        name: "Pal Ryan",
        address1: "(617) 561-7177",
        address2: "428 Border St",
        city: "East Boston" ,
        state: "Massachusetts",
        zip: "02128",
        phone: "617-236-6272"
    },
    {
        id: 4,
        name: "Buddy Shanahan",
        address1: "(617) 516-8459",
        address2: "32 Marginal Street",
        city: "East Boston",
        state: "Massachusetts",
        zip: "02128",
        phone: "617-261-7284"
    },
    {
        id: 5,
        name: "Compadre Cummins",
        address1: "(845) 200-7363",
        address2: "509 Sumner St",
        city: "East Boston",
        state: "Massachusetts",
        zip: "02128",
        phone: "617-623-4860"
    }
]

export const getFakeLogins = () => {
    return logins;
}