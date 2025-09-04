function capitalize(str) {
    if (!str) return "";

    return str[0].toUpperCase() + str.slice(1);
}

// console.log("Capitalize: " + capitalize("test"));

function reverse(str) {
    if (!str) return "";
    return str.split('').reverse().join('');
}

// console.log("Reverse: " + reverse("test"));

function contains(str, substr) {
    if(!str || !substr) return false;

    if(str.includes(substr)) {
        return true;
    }
    else {
        return false;
    }
}

// console.log("Contains: " + contains("Test", "es"));

module.exports = { capitalize, reverse, contains };