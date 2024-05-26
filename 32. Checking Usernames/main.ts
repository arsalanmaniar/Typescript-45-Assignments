let current_users: string[] = [`arsalan` , `usama`, `sufiyan`, `hamza` , `ali`]
let new_users: string[] = [`Arsalan`]

new_users.forEach((new_users) => {
if(
    current_users.some(
        (current_users) => current_users.toLocaleLowerCase() === new_users.toLocaleLowerCase()
    )
){
    console.log(`${new_users} will need to enter new user name`)
}



else{
    console.log(`${new_users} is available`)
}

});
