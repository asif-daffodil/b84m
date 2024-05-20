function leapYear(year) {   
    if (typeof year !== 'number' || year <= 0 || !Number.isInteger(year)) {
        return('Invalid input. Please provide a positive integer year.');
    }
 
    if ((year % 400 == 0) ||
        (year % 100 != 0) && 
        (year % 4 == 0)) 
    {
        return true;
    }
    else {
        return false;
    }
}
    console.log(leapYear(2000));
    console.log(leapYear(1700));
    console.log(leapYear(2024)); 
    console.log(leapYear(1821)); 
    console.log(leapYear(-3000)); 
    console.log(leapYear(0));    
    console.log(leapYear('year'));