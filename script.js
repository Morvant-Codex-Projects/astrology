console.log("Hello")

function birthdaySubmitHandler(event) {
    
    event.preventDefault();

    console.log(event.target.birthday.value);

const today = new Date(event.target.birthday.value);
//returns a new date Object with the requested date/time attached

const month = today.getMonth(event);
//returns the month from 0-11

const day = today.getDate(event);
//returns the day of the month(from 0-31)


document.addEventListener(birthdaySubmitHandler(event));
document.writeln(console.log("").value)



if (Date >= 0/21 && Date <= 3/19) {
    console.log("Aries").value;
} else if (Date >= 3/20 && Date <= 4/20) {
    console.log("Taurus").value;
} else if (Date >= 4/21 && Date <= 5/20) {
    console.log("Gemini").value;
} else if (Date >= 5/21 && Date <= 6/22) {
    console.log("Cancer").value;
} else if (Date >= 6/23 && Date <= 7/22) {
    console.log("Leo").value; 
} else if (Date >= 7/23 && Date <= 8/22) {
    console.log("Virgo").value;
} else if (Date >= 8/23 && Date <= 9/22) {
    console.log("Libra").value;
} else if (Date >= 9/23 && Date <= 10/21) {
    console.log("Scorpio").value;
} else if (Date >= 10/22 && Date <= 11/21) {
    console.log("Sagittarius").value;
}  else if (Date >= 11/22 && Date <= 0/19) {
    console.log("Capricorn").value;
}  else if (Date >= 0/20 && Date <= 1/18) {
    console.log("Aquarius").value; 
}  else if (Date >= 1/20 && Date <= 2/18) {
    console.log("Pisces").value;
}





console.log("Month:", month, "Day:", day) ;


}


















