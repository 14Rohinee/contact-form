$(document).ready(function(){
    $(document).on('click','#btn',function(){
        validateForm();
     })
});
function validateForm(){
    var nameReg = /^[A-Za-z]+$/;
    var firstName = $('#fname').val();
    var lastName = $('#lname').val();
    var countryName = $('#country').val();
    var Email = $('#email').val(); 
    var Subject = $('#subject').val(); 
    var Message = $('#message').val(); 
    if (firstName == "" || lastName==""|| countryName==""|| Email =="" || Subject=="" || Message=="") {
        alert("Please fill all the fields");
        return false;
    }
    if (!nameReg.test(firstName) || !nameReg.test(lastName) || !nameReg.test(countryName) || !nameReg.test(Subject)) {
     alert("Please enter only alphabet character");  
     return false; 
    }
}

