const returnFirstTwoDrivers = function(driverArray){
    return driverArray.slice(0, 2)
}

const returnLastTwoDrivers = function(driverArray){
    return driverArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(int){
        return int * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(driversArray, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(driversArray);
}
