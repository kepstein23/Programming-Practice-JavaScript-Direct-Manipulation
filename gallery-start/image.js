const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFileNames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]
const imageAltText = ["Closeup of a human eye", "Sand", "Violet and white flowers", "Ancient Painting", "Butterfly"]

/* Declaring the alternative text for each image file */

/* Looping through images */
for (let i = 0; i < imageFileNames.length; i++) {
    const newImage = document.createElement('img');
    const src = "./images/" + imageFileNames[i];
    const alt = imageAltText[i];
    newImage.setAttribute('src', src);
    newImage.setAttribute('alt', alt);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", () => {
        displayedImage.setAttribute('src', src);
        displayedImage.setAttribute('alt', alt);

    })
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})

