const ecran = document.getElementById("screenAnimanga");

document.getElementById("add-logo").addEventListener("click", () => {
    ecran.classList.add("ouvert");
});

// clic sur le fond sombre = fermer
ecran.addEventListener("click", (e) => {
    if (e.target === ecran) ecran.classList.remove("ouvert");
});

ecran.addEventListener("wheel", (e) => {
    e.preventDefault();
}); { passive: false };


fetch("animes.json")
    .then(reponse => reponse.json())
    .then(animes => {
        console.log(animes);
    });