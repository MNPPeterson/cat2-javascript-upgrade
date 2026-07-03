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

