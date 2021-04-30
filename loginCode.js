function checkCreds() {
    //place to store first names
    var firstName = document.getElementById("fName").value;
    //place to store last names
    var lastName = document.getElementById("lName").value;
    //place to store badge ID
    var badgeNumb = document.getElementById("badgeID").value;
    //make the full name be first and last with space in between when giving access to new page
    var fullName = firstName + " " + lastName;

    //if input names or badge ID are incorrect display error
    if (fullName.length > 20 || fullName.length == 1) {
        document.getElementById("loginStatus").innerHTML = "full name has too many characters.";
    }
    else if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number.";
    }
    else {
        //if they're correct direct to index page
        alert("Access granted! Welcome " + fullName);
        location.replace("index.html");
    }

} //(fullName.length < 21 && fullName.length > 1 && badgeNumb < 1000 && badgeNumb > 0);