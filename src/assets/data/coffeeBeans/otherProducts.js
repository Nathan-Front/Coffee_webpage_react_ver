const BASE = import.meta.env.BASE_URL;

export const Others = [
    {
        id: 1,
        name: "Mug",
        src: `${BASE}images/coffeeBeans/fourthSection/mug.png`,
        alt: "mug image",
        description: "White ceramic mug. 200ml capacity. weight 250 grams.",
        price: 3.50,
        ship: 0.75
    },
    {
        id: 2,
        name: "Paper Cup",
        src: `${BASE}images/coffeeBeans/fourthSection/papercup.png`,
        alt: "paper cup image",
        description: "An environment coffee cup. 350ml capacity.",
        price: 1.50,
        ship: 0.25 
    },
    {
        id: 3,
        name: "V60 Coffee Filter",
        src: `${BASE}images/coffeeBeans/fourthSection/filter.png`,
        alt: "Coffee Filter image",
        description: "50 sheets od disposable coffee filter. Color brown",
        price: 1.25,
        ship: 0.50
    },
    {
        id: 4,
        name: "Transparent Dripper",
        src: `${BASE}images/coffeeBeans/fourthSection/dripper.png`,
        alt: "dripper image",
        description: "Plastic transparent dripper. Clean",
        price: 2.00,
        ship: 0.50
    }
]