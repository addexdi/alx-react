// Function named getFullYear that will return the current year
function getFullYear() {
    let currentYear = new Date();
    return currentYear.getFullYear();
}

// Function that return a str depent of bool
function getFooterCopy(isIndex) {
    if (!isIndex) return "Holberton School main dashboard";
    return "Holberton School";
}

// Function
function getLatestNotification() {
    return {
        __html: '<strong>Urgent requirement</strong> - complete by EOD'
    }    
}

// Export functions
export { getFullYear, getFooterCopy, getLatestNotification };
