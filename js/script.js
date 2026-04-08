const btNav = document.getElementById("btNav");
const divNav = document.getElementById("divNav");

btNav.addEventListener('click', (event)=>{
    event.preventDefault();
    divNav.classList.toggle('hidden');
});