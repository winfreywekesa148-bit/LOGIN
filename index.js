// user info
function createLoginTracker(userInfo) {
    let attempts = 3;

    function attemptCount(attempts) {
        
        if (attempts > 0 && attempts <= 3) {
    console.log(`You have ${attempts} attempts left.`);
    attempts--;
         } else {
    console.log(" Account locked.No more attempts left."); 
    }

   }

   function passwordAttempt( password) {
    if (attempts <= 0) {
        console.log("Account locked. No more attempts left.");
    }

    if (password === userInfo.password) {
        console.log("Login successfull");
        attempts = 3; //reset
    } else {
        attemptCount(attempts);
    }
   }
   return {
    passwordAttempt
   };

}

const userInfo = {
    username: "user 1",
    password: "password123"
}

const tracker = createLoginTracker(userInfo);

tracker.passwordAttempt("wrongpassword");
tracker.passwordAttempt("password123");

console.log(createLoginTracker(userInfo));
