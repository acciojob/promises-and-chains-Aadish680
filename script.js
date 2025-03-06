
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let userName = document.getElementById("name").value.trim();
    let userAge = document.getElementById("age").value.trim();


    if (userName === "" || userAge === "") {
        alert("Please enter valid details.");
        return;
    }

    userAge = parseInt(userAge); 

    let checkAge = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userAge > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000); 
    });

   
    checkAge
        .then(message => alert(message)) 
        .catch(error => alert(error));   
});
