 const users = [
    {
        name: "Jane Doe",
        gender: "Female",
        image: "./images/jane.png"
    },
    {
        name: "John Doe",
        gender: "Male",
        image: "./images/john.png"
    }
];

let current = 0;

// Toggle between Jane and John
function toggle() {

    if (current === 0) {
        current = 1;
    } else {
        current = 0;
    }

    document.getElementById("card-name").innerText = users[current].name;
    document.getElementById("card-gender").innerText = users[current].gender;
    document.getElementById("img").src = users[current].image;
}

// Get Random User
function getRandomUser() {

    fetch("https://randomuser.me/api")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            let user = data.results[0];

            document.getElementById("card-name").innerText =
                user.name.first + " " + user.name.last;

            document.getElementById("card-gender").innerText =
                user.gender;

            document.getElementById("img").src =
                user.picture.large;
        })
        .catch(function(error) {
            console.log(error);
        });
}