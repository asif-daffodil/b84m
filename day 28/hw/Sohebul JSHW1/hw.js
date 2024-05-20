
function isLeapYear(year) {
    if (Number.isInteger(year) && year > 0) {
        if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
            return year + " is a leap year";
        }
        else {
            return year + " is not a leap year";
        }
    } else {
        return "Invalid number. Please provide a valid year.";
    }
}

console.log(isLeapYear(2016));
