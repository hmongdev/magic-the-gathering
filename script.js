// storing all the land elements in array: panels
const lands = document.querySelectorAll('.land');
console.log(lands);

// forEach = higher-order method that accepts functions as arguments
// purpose: add eventListener to each land that expands when clicked
lands.forEach(land => {
    land.addEventListener('click', () => {
        removeActiveClasses();
        land.classList.add('active');
    })
});

// purpose: removes active classes so they collapse when clicked
const removeActiveClasses = () => {
    lands.forEach(land => {
        land.classList.remove('active');
    })
}