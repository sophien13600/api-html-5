const input = document.querySelector('#nom')
const texte = document.querySelector('#texte')
const nombre = document.querySelector('#nombre')
const tel = document.querySelector('#tel')
const mail = document.querySelector('#mail')

function checkNom(){
    const pattern = /^[A-Z]{1}[a-z]{2,19}$/
    if(pattern.test(input.value)){
        console.log('Valeur correcte');
        
    }else{
        console.error('Merci de saisir une premiere lettre majuscule');
        
    }
}

function checkTexte() {
    const pattern = /^[A-Z]{1}.*[A-Z]{1}$/
    if (pattern.test(texte.value)) {
        console.log("Valeur correcte");

    } else {
        console.error("Merci de saisir une première lettre en majuscule");

    }
}
function checkNombre(){
// const pattern = /^(1|2)[0-9]/
    const pattern = /^(1|2)\d{2,50}/
    if (pattern.test(nombre.value)) {
        console.log("Valeur correcte");

    } else {
        console.error("Merci de saisir une première lettre en majuscule");

    }
}
function checkTel(){
    const pattern = /^0[6-7]\d{8}$/
    //const pattern = /^(06|07){1}\d{8}$/

if (pattern.test(tel.value)) {
        console.log("Valeur correcte");

    } else {
        console.error("Merci de saisir un tel correcte");

    }
}
function checkMail(){
    const pattern = /\w{2,}@\w{2,}\.[a-zA-Z]{2,3}$/
    if (pattern.test(mail.value)) {
        console.log("Valeur correcte");

    } else {
        console.error("mail incorrecte");

    }
}

/*
* : 0 ou plusieurs
+ : 1 ou plusieurs
? : 0 ou 1
{n,m} : min n, max m
{n} : exatement n
{n,} : min n
{,m} : max
\d : un chiffre
\D : tout sauf un chiffre
\w : caractere alpha numerique
\W tout sauf caractere alpha numerique
\s: whitespace
\S: tout sauf whitespace
\t: tabulation
\n: retour à la ligne
......
[a-d] : a, b, c ou d
[a-dA-D] : a, b, c, d, A, B, C, D
[^a-d] : tout sauf abcd
 */