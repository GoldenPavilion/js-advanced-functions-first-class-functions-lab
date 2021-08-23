const returnFirstTwoDrivers = function(driverArray){
    return driverArray.slice(0, 2)
}

const returnLastTwoDrivers = function(driverArray){
    return driverArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function(multiplier){
        return int * multiplier
    }
}