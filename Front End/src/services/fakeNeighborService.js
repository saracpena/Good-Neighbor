const neighbors = [
    {
        id: 1,
        name: "John McCarthy",
        address1: "(229) 225-1021",
        address2: "4190 Coffee Rd",
        city: "Boston",
        state: "Georgia(GA)",
        zip: "31626",
        phone: "339-205-1343"
    },
    {
        id: 2,
        name: "Kate Hopkins",
        address1: "(229) 498-4026",
        address2: "2815 Parker Rd",
        city: "Boston",
        state: "Georgia(GA)",
        zip: "31626",
        phone: "617-217-4113"
    },
    {
        id: 3,
        name: "Damien Ryall",
        address1: "(617) 561-7177",
        address2: "428 Border St",
        city: "Boston" ,
        state: "Massachusetts(MA)",
        zip: "02128",
        phone: "617-236-6272"
    },
    {
        id: 4,
        name: "Deirdre Shanahan",
        address1: "(617) 516-8459",
        address2: "32 Maple Pl",
        city: "Boston",
        state: "Massachusetts(MA)",
        zip: "02111",
        phone: "617-261-7284"
    },
    {
        id: 5,
        name: "Oisin Cummins",
        address1: "(845) 200-7363",
        address2: "409 Fair St",
        city: "New York",
        state: "Carmel",
        zip: "10512",
        phone: "716-623-4860"
    }
]

export const getFakeNeighbors = () => {
    return neighbors;
}