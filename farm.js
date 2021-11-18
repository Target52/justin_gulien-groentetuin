//constanten
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

const input = {
    crop: corn,
    numCrops: 10,
};

const environmentFactors = {
    sun: "low",
    wind: "medium",
};

const crops = [
    { crop: corn, numCrops: 10 },
    { crop: pumpkin, numCrops: 2 },
];


//functions

const getYieldForPlant = (plant) => plant.yield

const getYieldForCrop = (plant) => plant.crop.yield * plant.numCrops

const getTotalYield = (crops) => {
    let yieldForCrop = 0
    for (i = 0; i < crops.length; i++) {
        yieldForCrop += getYieldForCrop(crops[i])
    }
    return yieldForCrop
}

const getCostsForPlant = (plant) => plant.costs * plant.yield

const getCostsForCrop = (plant) => plant.crop.costs * getYieldForCrop(plant)

const getTotalCosts = (crops) => {
    let costsForCrop = 0
    for (i = 0; i < crops.length; i++) {
        costsForCrop += getCostsForCrop(crops[i])
    }
    return costsForCrop
}

const getRevenueForCrop = (plant) => plant.crop.revenue * getYieldForCrop(plant)

const getTotalRevenue = (crops) => {
    let revenueForCrop = 0
    for (i = 0; i < crops.length; i++) {
        revenueForCrop += getRevenueForCrop(crops[i])
    }
    return revenueForCrop
}

const getProfitForCrop = (plant) => getRevenueForCrop(plant) - getCostsForCrop(plant)

const getTotalProfit = (crops) => getTotalRevenue(crops) - getTotalCosts(crops)

const getYieldForPlantEnvi = (plant, environmentFactors) => {
    if (environmentFactors.sun) {
        factor = (plant.factors.sun[environmentFactors.sun] / 100)
    }
    if (environmentFactors.wind) {
        factor += (plant.factors.wind[environmentFactors.wind] / 100)
    }
    return plant.yield + (factor * plant.yield)
}

const getYieldForCropEnvi = (plant) => {
    if (environmentFactors.sun) {
        factor = (plant.crop.factors.sun[environmentFactors.sun] / 100)
    }
    if (environmentFactors.wind) {
        factor += (plant.crop.factors.wind[environmentFactors.wind] / 100)
    }
    console.log((plant.crop.yield + (factor * plant.crop.yield)) * plant.numCrops)
    return (plant.crop.yield + (factor * plant.crop.yield)) * plant.numCrops
}

const getTotalYieldEnvi = (crops) => {
    let yieldForCropEnvi = 0
    for (i = 0; i < crops.length; i++) {
        yieldForCropEnvi += getYieldForCropEnvi(crops[i])
    }
    return yieldForCropEnvi
}

const getRevenueForCropEnvi = (plant) => plant.crop.revenue * getYieldForCropEnvi(plant)

const getTotalRevenueEnvi = (crops) => {
    let revenueForCropEnvi = 0
    for (i = 0; i < crops.length; i++) {
        revenueForCropEnvi += getRevenueForCropEnvi(crops[i])
    }
    return revenueForCropEnvi
}

const getProfitForCropEnvi = (plant) => getRevenueForCropEnvi(plant) - getCostsForCrop(plant)

const getTotalProfitEnvi = (crops) => getTotalRevenueEnvi(crops) - getTotalCosts(crops)

module.exports = {
    getTotalProfitEnvi,
    getTotalRevenueEnvi,
    getProfitForCropEnvi,
    getRevenueForCropEnvi,
    getTotalYieldEnvi,
    getYieldForCropEnvi,
    getYieldForPlantEnvi,
    getTotalCosts,
    getCostsForPlant,
    getYieldForCrop,
    getYieldForPlant,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getTotalRevenue,
    getProfitForCrop,
    getTotalProfit
}
