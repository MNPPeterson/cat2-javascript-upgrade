const bannerImg = document.getElementById('bannerimg');
const bannerText = document.getElementById('bannertext');


bannerImg.addEventListener('click', function () {


    bannerText.classList.toggle('show');

});

let wishlistinput = document.getElementById('WishlistInput');
let addbutton = document.getElementById('AddButton');
let WishContainer = document.getElementById('wishlistcontainer');

addbutton.addEventListener("click", function (event) {

    let wishlistInputValue = wishlistinput.value;
    if (wishlistInputValue != "") {
        let li = document.createElement("li");
        let button = document.createElement("button");

        li.textContent = wishlistInputValue;
        button.textContent = "Delete";

        button.addEventListener("click", event => {
            li.remove()
        })






        li.appendChild(button);
        WishContainer.appendChild(li);




        wishListInput.value = "";
    }

})

let submitbtn = document.querySelector("#InfoForm button");
let InfOutput = document.querySelector("#InfoOutput");
let InfForm = document.querySelector("#InfoForm");

const name = document.querySelector("#CookName");
const email = document.querySelector("#CookEmail");

const savedName = localStorage.getItem('savedCookName');
const savedEmail = localStorage.getItem('savedCookEmail');

if (savedName) name.value = savedName;
if (savedEmail) email.value = savedEmail;

name.addEventListener('input', () => {
    localStorage.setItem('savedCookName', nameField.value);
});

email.addEventListener('input', () => {
    localStorage.setItem('savedCookEmail', emailField.value);
});


InfForm.addEventListener("submit", event => {
    event.preventDefault();


    if (name.value == "" || email.value == "") {
        InfOutput.textContent = "Fill out both attributes pls"

    } else {

        InfOutput.innerHTML =
            "<p>Name:" + name.value + "</p>" +
            "<p>Email:" + email.value + "</p>"


        localStorage.removeItem('savedCookName');
        localStorage.removeItem('savedCookEmail');

        name.value = "";
        email.value = "";



    }

})



const culinaryCourses = [
    {
        name: "Professional Pastry & Baking",
        price: "KSh 45,000",
        duration: "8 Weeks"
    },
    {
        name: "African Heritage & Fusion Cuisine",
        price: "KSh 35,000",
        duration: "6 Weeks"
    },
    {
        name: "Fundamentals of Culinary Arts",
        price: "KSh 60,000",
        duration: "12 Weeks"
    },
    {
        name: "Advanced Knife Skills & Saucier",
        price: "KSh 20,000",
        duration: "3 Weeks"
    }
];


const coursesContainer = document.getElementById('coursescontainer');


culinaryCourses.forEach(course => {
    
    const card = document.createElement('div');
    card.classList.add('course-card');

    
    card.innerHTML = `
        <h2>${course.name}</h2>
        <p class="price">Price: ${course.price}</p>
        <p class="duration">Duration: ${course.duration}</p>
    `;

    coursesContainer.appendChild(card);
});

