$('#butt').click(function() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var school = document.getElementById("school").value;

    firstInital = nameToInitials(firstName);
    console.log(firstInital);
    console.log(firstName, lastName);
  
    lastInital = nameToInitials(lastName);
    console.log(lastInital);
    alert(firstInital + lastInital + school);

})
                
function nameToInitials(name) {
    let inital = name.charAt(0);
    return inital;
  }
 
 