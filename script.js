//Etape 1:
function isValidDate(dateString) {
  let dateParties = dateString.split("/");
  // Vérifier que la date a exactement 3 parties
  if (dateParties.length !== 3) {
    return false;
  }
  // Vérifier que chaque partie a la bonne longueur
  if (
    dateParties[0].length !== 2 ||
    dateParties[1].length !== 2 ||
    dateParties[2].length !== 4
  ) {
    return false;
  }
  //changer le typeOf des 3 parties de la date
  let day = parseInt(dateParties[0]);
  let month = parseInt(dateParties[1])-1;
  let year = parseInt(dateParties[2]);

  let date = new Date(year, month, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day
  );
}
//console.log(isValidDate("03/04/2001")); //true
//console.log(isValidDate("31/02/2000")); //false

//Etape 2:
function isPalindrome(dateString) {
  if (isValidDate(dateString) === false) {
    //si dateString est invalide on arrete l'exécution et on return false
    return false;
  }
  let dateSansSlash = dateString.replace(/\//g, ""); //enlever les 2 slash de la date

  const dateArray = dateSansSlash.split(""); //le split découpe la chaine de caractère et rend un tableau

  const dateRevertArray = dateArray.toReversed(); //toReversed: inverse l'ordre des éléments d'un tableau

  for (let i = 0; i < dateArray.length; i++) {
    if (dateArray[i] !== dateRevertArray[i]) {
      return false;
    }
  }
  return true;
}
//console.log(isPalindrome("02/02/2020")); //true
//console.log(isPalindrome("22/02/2020"));//false

//Etape 3:
//fonction pour ajouter un 0 au 1er au 9eme jour du mois et aux 1er à 9eme mois
function ajoutZeroDevant(num) {
  return num.toString().padStart(2, "0");
}
function getNextPalindromes(x) {
  let dateDuJour = new Date(); // la fonction new Date récupère la date du jour
  let futurPalindromDates = []; //on crée un tableau vide pour pousser dedans les dates palindromes trouvées

  while (futurPalindromDates.length < x) {
    dateDuJour.setDate(dateDuJour.getDate() + 1); //on incrémente la date du jour de 1 jour

    let day = ajoutZeroDevant(dateDuJour.getDate());
    let month = ajoutZeroDevant(dateDuJour.getMonth() + 1);
    let year = dateDuJour.getFullYear();
    let dateAVerifier = `${day}/${month}/${year}`;
    if (isPalindrome(dateAVerifier)) {
      futurPalindromDates.push(`${day}/${month}/${year}`);
    }
  }
  return futurPalindromDates;
}
console.table(getNextPalindromes(10));
