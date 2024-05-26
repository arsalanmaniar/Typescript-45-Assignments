var current_users = ["arsalan", "usama", "sufiyan", "hamza", "ali"];
var new_users = ["Arsalan"];
new_users.forEach(function (new_users) {
    if (current_users.some(function (current_users) { return current_users.toLocaleLowerCase() === new_users.toLocaleLowerCase(); })) {
        console.log("".concat(new_users, " will need to enter new user name"));
    }
    else {
        console.log("".concat(new_users, " is available"));
    }
});
