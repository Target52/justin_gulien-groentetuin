const {
    getTotalRevenueEnvi,
    getTotalProfitEnvi,
    getRevenueForCropEnvi,
    getTotalYieldEnvi,
    getYieldForCropEnvi,
    getTotalCosts,
    getYieldForCrop,
    getYieldForPlant,
    getTotalYield,
    getCostsForPlant,
    getCostsForCrop,
    getTotalRevenue,
    getRevenueForCrop,
    getTotalProfit,
    getYieldForPlantEnvi
} = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 3,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(3);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield(crops)).toBe(38);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe("getCostsForPlant", () => {
    const corn = {
        name: "corn",
        yield: 3,
        costs: 2,
    };

    test("Get costs for plant with no environment factors", () => {
        expect(getCostsForPlant(corn)).toBe(6);
    });
});

describe("getCostsForCrop", () => {
    test("Get costs for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costs: 2,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getCostsForCrop(input)).toBe(60);
    });
});

describe("getTotalCosts", () => {
    test("Calculate total costs with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costs: 2,
            revenue: 8,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            costs: 3,
            revenue: 7,
        };
        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalCosts(crops)).toBe(84);
    });

    test("Calculate costs yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costs: 2,
            revenue: 8,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalCosts({ crops })).toBe(0);
    });
});

describe("getRevenueForCrop", () => {
    test("Get revenue for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costs: 2,
            revenue: 8,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getRevenueForCrop(input)).toBe(240);
    });
});

describe("getTotalrevenue", () => {
    test("Calculate total revenue with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costs: 2,
            revenue: 8,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            costs: 3,
            revenue: 7,
        };
        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalRevenue(crops)).toBe(296);
    });

    test("Calculate total revenue with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costs: 2,
            revenue: 8,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalRevenue({ crops })).toBe(0);
    });
});

describe("getTotalProfit", () => {
    test("Calculate total revenue with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costs: 2,
            revenue: 8,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            costs: 3,
            revenue: 7,
        };
        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalProfit(crops)).toBe(212);
    });

    test("Calculate total revenue with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costs: 2,
            revenue: 8,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalRevenue({ crops })).toBe(0);
    });
});

describe("getYieldForPlantEnvi", () => {
    const corn = {
        name: "corn",
        yield: 8,
        costs: 2,
        revenue: 8,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: 30,
                medium: 0,
                high: -30,
            },
        },
    };

    const environmentFactors = {
        sun: "low",
        wind: "medium",
    };

    test("Get yield for plant with environment factors", () => {
        expect(getYieldForPlantEnvi(corn, environmentFactors)).toBe(4);
    });
});

describe("getYieldForCropEnvi", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 8,
            costs: 2,
            revenue: 8,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 30,
                    medium: 0,
                    high: -30,
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCropEnvi(input)).toBe(40);
    });
});

describe("getTotalYieldEnvi", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 8,
            costs: 2,
            revenue: 8,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 30,
                    medium: 0,
                    high: -30,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 5,
            costs: 3,
            revenue: 7,
            factors: {
                sun: {
                    low: -20,
                    medium: 0,
                    high: 20,
                },
                wind: {
                    low: 30,
                    medium: 0,
                    high: -30,
                },
            },
        };

        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYieldEnvi(crops)).toBe(48);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYieldEnvi({ crops })).toBe(0);
    });
});

describe("getRevenueForCropEnvi", () => {
    test("Get revenue for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costs: 2,
            revenue: 8,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 30,
                    medium: 0,
                    high: -30,
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getRevenueForCropEnvi(input)).toBe(120);
    });
});

describe("getTotalProfitEnvi", () => {
    test("Calculate total revenue with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costs: 2,
            revenue: 8,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 30,
                    medium: 0,
                    high: -30,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            costs: 3,
            revenue: 7,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 30,
                    medium: 0,
                    high: -30,
                },
            },
        };
        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalProfitEnvi(crops)).toBe(64);
    });

    test("Calculate total revenue with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costs: 2,
            revenue: 8,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalRevenueEnvi({ crops })).toBe(0);
    });
});