
document.getElementById("votingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let userName = document.getElementById("name").value.trim();
    let userAge = document.getElementById("age").value.trim();

    // 1️⃣ Input Validation
    if (userName === "" || userAge === "") {
        alert("Please enter valid details.");
        return;
    }

    userAge = parseInt(userAge); // Convert age to a number

    // 2️⃣ Create a Promise
    let checkAge = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userAge > 18) {
                resolve(`Welcome, ${userName}. You can vote.`);
            } else {
                reject(`Oh sorry ${userName}. You aren't old enough.`);
            }
        }, 4000); // 4-second delay
    });

    // 3️⃣ Handle Promise Resolution/Rejection
    checkAge
        .then(message => alert(message)) // Show success message
        .catch(error => alert(error));   // Show failure message
});
