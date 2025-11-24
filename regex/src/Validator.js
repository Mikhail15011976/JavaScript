function validateUsername(username) {    
    if (username.length < 3 || username.length > 20) {
        return false;
    }
    
    const validUsernamePattern = /^[a-zA-Z0-9_-]+$/;
    if (!validUsernamePattern.test(username)) {
        return false;
    }
    
    if (/^[^a-zA-Z]/.test(username)) {
        return false;
    }
    
    if (/_$/.test(username) || /-$/.test(username)) {
        return false;
    }
    
    if (/\d{4,}/.test(username)) {
        return false;
    }
    
    if (username.includes('__') || username.includes('--')) {
        return false;
    }

    return true;
}

module.exports = { validateUsername };
