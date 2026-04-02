const base = import.meta.env.BASE_URL;
export const Process =[
    {
        id: 1,
        process: "Brew time: 2:30 - 3:30 minutes",
        src: `${base}images/index/thirdSection/clock-svgrepo-com.svg`,
        alt: "clock image"
    },
    {
        id: 2,
        process: "Coffee dose: 20 - 27 grams",
        src: `${base}images/index/thirdSection/coffee-beans-svgrepo-com.svg`,
        alt: "beans image"
    },
    {
        id: 3,
        process: "Grind size: medium",
        src: `${base}images/index/thirdSection/coffee-grinder-grinder-machine-svgrepo-com.svg`,
        alt: "coffee grinder image"
    },
    {
        id: 4,
        process: "Water: 350 grams",
        src: `${base}images/index/thirdSection/kettle-pot-drink-svgrepo-com.svg`,
        alt: "kettle image"
    }
];


export const Method = [
    {
        id: 1,
        step: "Heat the water",
        description: "Heat water to 92–96°C (195–205°F). Just below boiling is ideal.",
    },
    {
        id: 2,
        step: "Grind the coffee",
        description: "Use a medium-fine grind (similar to sea salt). Ratio: 1:15 to 1:17. Example: 20g coffee : 300ml water.",
    },
    {
        id: 3,
        step: "Rinse the filter",
        description: "Place the filter in the dripper. Rinse with hot water to remove paper taste and preheat. Discard rinse water.",
    },
    {
        id: 4,
        step: "Add coffee grounds",
        description: "Add ground coffee to the filter. Gently shake to level the bed.",
    },
    {
        id: 5,
        step: "Bloom (30–45 seconds)",
        description: "Pour 2–3 times the coffee weight in water (e.g., 40–60ml for 20g coffee). Let it sit to release trapped CO₂. This improves extraction.",
    },
    {
        id: 6,
        step: "Main pour",
        description: "Slowly pour the remaining water in circular motions. Start from the center, spiral outward, avoid pouring directly on the filter. Keep a steady, controlled flow.",
    },
    {
        id: 7,
        step: "Drawdown and serve",
        description: "Total brew time: 2:30 - 3:30 minutes. Remove dripper and enjoy.",
    }
];