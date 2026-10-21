/*const container=document.querySelector('container');
const image= document.getElementById('img')
const heightInput=document.getElementById('height');
const weightInput=document.getElementById('weight');
const resultat= document.getElementById('resultat');
const button= document.getElementById('calculate')

const weight= parseFloat(weightInput.value);
const height= parseFloat(heightInput.value);

if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0){
    return resultat.textContent = 'please entrer le poids et la taille';
}
let imc= weight / (height * height);
imc = imc.toFixed(2);

let categorie;
if(imc < 18.5){
    alert=(categorie,'maigre');
}else if(imc >= 18.5 && imc < 25){
    alert=(categorie,'poids normal');
}else if (imc > 25 && imc < 30){
    alert=(categorie,'surpoid');
}else {
    alert='obesité';
}
resultat.textContent='ton poids:${imc} (${categorie})';
console.log('resultat');
const weightInput = document.getElementById('height');
const heightInput = document.getElementById('weight');
const resultat= document.getElementById('resultat');
const button = document.getElementById('calculate');

let height = document.getElementById(heightInput.value);
if (function.addEventListener('height || weightInput || heightInput || weight')){
    console.log();
}


if 
=("") => {
    height=height.value
}
console.log()*/
// On récupère les éléments du DOM
/*
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultat = document.getElementById("resultat");
const button = document.getElementById("calculate");

// Quand on clique sur le bouton → on calcule l'IMC
button.addEventListener("click", function () {
    
    // On récupère les valeurs
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    // Vérification : si vide → message d'erreur
    if (!height || !weight) {
        resultat.textContent = "Veuillez entrer une taille et un poids.";
        return;
    }

    // Calcul de l'IMC : poids / (taille en mètre)^2
    const heightMeters = height / 100;
    const imc = weight / (heightMeters * heightMeters);

    // On arrondit à 2 décimales
    const imcRounded = imc.toFixed(2);

    // Détermination de la catégorie
    let message = "";

    if (imc < 18.5) {
        message = "Vous êtes en insuffisance pondérale.";
    } else if (imc < 25) {
        message = "Vous avez un IMC normal.";
    } else if (imc < 30) {
        message = "Vous êtes en surpoids.";
    } else {
        message = "Obésité.";
    }

    // Affichage final
    resultat.textContent = `Votre IMC est de ${imcRounded}\n${message}`;
});
/*Modification de l'indicateur de poids*/


const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculateBtn = document.getElementById("calculate");
const resultat = document.getElementById("resultat");
const pointeur = document.getElementById("pointeur");
const valeurPointeur = document.getElementById("valeur-pointeur");

calculateBtn.addEventListener("click", () => {
    const heightCm = Number(heightInput.value);
    const weightKg = Number(weightInput.value);

    if (
        heightInput.value === "" ||
        weightInput.value === "" ||
        heightCm <= 0 ||
        weightKg <= 0
    ) {
        resultat.textContent =
            "Veuillez entrer une hauteur et un poids valides.";
        return;
    }

    const heightM = heightCm / 100;
    const imc = weightKg / (heightM * heightM);

    let categorie;

    if (imc < 18.5) {
        categorie = "Insuffisance pondérale";
    } else if (imc < 25) {
        categorie = "Corpulence habituelle";
    } else if (imc < 30) {
        categorie = "Surpoids";
    } else {
        categorie = "Obésité";
    }

    resultat.textContent =
        `Votre IMC : ${imc.toFixed(1)}\n` +
        `Catégorie : ${categorie}`;

    // Positionner le pointeur sur l'image
    // IMC de 15 = bord gauche ; IMC de 40 = bord droit
    const imcMin = 15;
    const imcMax = 40;

    const pourcentage = Math.max(
        0,
        Math.min(100, ((imc - imcMin) / (imcMax - imcMin)) * 100)
    );

    pointeur.style.left = `${pourcentage}%`;
    valeurPointeur.textContent = `IMC ${imc.toFixed(1)}`;
});
