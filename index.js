// 3 attempts of login 

let attempts = 3;

if (attempts > 0 && attempts <= 3) {
    console.log(`You have ${attempts} attempts left.`);
    attempts--;
} else {
    console.log(" Account locked.No more attempts left.");
}

// user info
function createLoginTracker(userInfo) {
    username = userInfo.username;
    password = userInfo.password;

    return function createLoginTracker() {
        if (attempts > 0 && attempts <= 3) {
    console.log(`You have ${attempts} attempts left.`);
    attempts--;
        } else {
    console.log(" Account locked.No more attempts left.");
    
    }  
}
}
