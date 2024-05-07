// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = (drivers) => {
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(2, 4);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(n) {
    return function(fare) {
        return fare * n;
    };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3); 

function selectDifferentDrivers(drivers, selectingDrivers){
    return selectingDrivers(drivers);
}