var firsName;
var lastName;
var email;
var phone;
var error;
var buttonClick = document.getElementById('btn-send').onclick = function () {
    firstName = document.getElementById('fName');
    lastName = document.getElementById('lName');
    email = document.getElementById('email');
    phone = document.getElementById('phone');


    
    checkNumber(firstName);
    checkNumber(lastName);
    checkEmail(email);
    checkPhone(phone);
    checkEmpty(firstName);
    checkEmpty(lastName);
    checkEmpty(email);
    checkEmpty(phone);
    checkSpace(firstName);
    checkSpace(lastName);

    errorCheck();

};
function checkAll()
{
   
}


function checkEmpty(element) 
{
    var test = element.value;
    if (test.length == 0) 
    {
        error = true;
    }
}

function checkNumber(element) 
{
    var numTest = element.value;
    for (var x = 0; x < numTest.length; x++) 
    {
        if (!isNaN(numTest.charAt(x))) 
        {
            error = true;
            
        }
        
    }
}
function checkSpace(element)
{var space = element.value;

    if (/\s/.test(space)) 
    {
       error=true;
    }
}

function checkEmail(email)
{
var testEmail = email.value;
   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
  if (!re.test(testEmail))
  {
 error = true;
  }

}
function checkPhone(phone)
{
    var phoneTest = phone.value;
    var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!re.test(phoneTest))
    {
        error=true;
    }
}
function errorCheck() 
{
    if (error) 
    {
        alert("Error there's something wrong with your information.");
        error=false;
    }
}