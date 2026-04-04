const BASE = import.meta.env.BASE_URL;
export const Baristas =[
    {
        id: 1,
        name: "John Doe",
        experience: 8,
        favorite: "Ethiopian Yirgacheffe",
        skill: "Barista, Latte Art",
        specialty: "Ethiopian Yirgacheffe",
        message:"I'm passionate about crafting the perfect cup of coffee and creating memorable experiences for every customer.",
        src: `${BASE}images/services/secondSection/barista1.jpg`,
    },
    {
        id: 2,
        name: "Jake Tester",
        experience: 6,
        favorite: "Espresso",
        skill: "Barista, Latte Art",
        specialty: "Espresso",
        message:"Seeing you my customer smile while drinking the perfect cup of coffee I made is what makes my day.",
        src: `${BASE}images/services/secondSection/barista2.jpg`,
    },
    {
        id: 3,
        name: "Claire Trueman",
        experience: 4,
        favorite: "Panama Geisha Coffee",
        skill: "Barista, Latte Art",
        specialty: "Panama Geisha Coffee",
        message:"Coffee is my passion and I love sharing it with others.",
        src: `${BASE}images/services/secondSection/barista3.JPG`,
    }
];
