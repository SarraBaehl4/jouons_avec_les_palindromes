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
  let day = parseInt(dateParties[0]);
  let month = parseInt(dateParties[1]);
  let year = parseInt(dateParties[2]);

  let date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

console.log(isValidDate("03/04/2001")); //true
console.log(isValidDate("03/14/2001")); //false
console.log(isValidDate("31/02/2000")); //false
console.log(isValidDate("tata")); //false
console.log(isValidDate("2000")); //false
console.log(isValidDate("29/02/2023")); //false (année 2023 non bissextile)
console.log(isValidDate("29/02/2024")); // true
