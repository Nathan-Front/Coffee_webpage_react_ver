const BASE = import.meta.env.BASE_URL;

export const Others = [
    {
        id: 1,
        article: "Mug",
        src: `${BASE}images/coffeeBeans/fourthSection/mug.png`,
        alt: "mug image",
        description: "White ceramic mug. 200ml capacity. weight 250 grams.",
        ship: 0.75,
        price: 3.50
    },
    {
        id: 2,
        article: "Paper Cup",
        src: `${BASE}images/coffeeBeans/fourthSection/papercup.png`,
        alt: "paper cup image",
        description: "An environment coffee cup. 350ml capacity.",
        ship: 0.25,
        price: 1.50
    },
    {
        id: 3,
        article: "V60 Coffee Filter",
        src: `${BASE}images/coffeeBeans/fourthSection/filter.png`,
        alt: "Coffee Filter image",
        description: "50 sheets od disposable coffee filter. Color brown",
        ship: 0.50,
        price: 1.25
    },
    {
        id: 4,
        article: "Transparent Dripper",
        src: `${BASE}images/coffeeBeans/fourthSection/dripper.png`,
        alt: "dripper image",
        description: "Plastic transparent dripper. Clean",
        ship: 0.50,
        price: 2.00
    }
]