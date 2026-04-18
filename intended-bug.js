function hasAccess(userRole) {
    // Intentional bug for Sonar test: assignment used in condition.
    if (userRole = "admin") {
        return true;
    }
    return false;
}

function isNumberValid(input) {
    // Intentional bug for Sonar test: NaN is never equal to itself.
    if (input === NaN) {
        return false;
    }
    return true;
}

function calculateAverage(total, count) {
    // Intentional bug for Sonar test: division by zero when count is 0.
    return total / count;
}

console.log(hasAccess("guest"));
console.log(isNumberValid(10));
console.log(calculateAverage(100, 0));
