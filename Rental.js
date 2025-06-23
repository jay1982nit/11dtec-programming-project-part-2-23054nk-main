/**********************************************************/
// Rental.js
// written by Nityaa Kansara
// Term 2 2025
/**********************************************************/


/**************************************************************************FUNCTION  OPENFORM******************************************************************************/
 let firstName1;
 let  lastName1;
 function openForm() {
  document.getElementById("popupForm").style.display = "block";

}
/**************************************************************************FUNCTION  SUBMIT FORM***************************************************************************/
function SubmitForm(event) 
{
  if (event) event.preventDefault();  // Prevent form from submitting
  let isValid = true;
  /**********validate First Name***********************/
    firstName1 = document.getElementById("Firstnamebox").value.trim();
    console.log("First name is:", firstName1);
    let errorMessage1= document.getElementById("errorMessage1box");
    if (firstName1 === null || firstName1 === "" || firstName1 === " ")  //  That is the code that gives an error in an alert if you have not entered anything, Nityaa to update 
    {
       errorMessage1box.innerHTML ="Invalid, you must enter a valid name";
      isValid = false;
    } 
    else if (!isNaN(firstName1))
    {
      errorMessage1box.innerHTML = "Name must contain only letters.";
      isValid = false;
    }
    else if (/\d/.test(firstName1)) 
    {
    errorMessage1box.innerHTML = "Name must not contain numbers.";
    isValid = false;
    } 
    else if (!/^[A-Z]/.test(firstName1))
    {
      errorMessage1box.innerHTML = "The first letter of the name must be a capital letter.";
      isValid = false; // Prevent form submission
    }
    else 
    {
      errorMessage1box.innerHTML = ""; // Clear any old messages
    } 
   /***********validate last Name***************************/ 
    lastName1= document.getElementById("Lastnamebox").value.trim();

  console.log("Last name is:", lastName1);  // Optional: just to check
     let errorMessage2= document.getElementById("errorMessage2box");
      if (lastName1 === null || lastName1 === "" || lastName1 === " ")  //  That is the code that gives an error in an alert if you have not entered anything, Nityaa to update 
    {
       errorMessage2box.innerHTML ="Invalid, you must enter a valid name";
      isValid = false;
    } 
    else if (!isNaN(lastName1))
    {
      errorMessage2box.innerHTML = "Name must contain only letters.";
      isValid = false;
    }
    else if (/\d/.test(lastName1)) 
    {
    errorMessage2box.innerHTML = "Name must not contain numbers.";
    isValid = false;
    } 
    else if (!/^[A-Z]/.test(lastName1))
    {
      errorMessage2box.innerHTML = "The first letter of the name must be a capital letter.";
      isValid = false; // Prevent form submission
    }
    else 
    {
      errorMessage2box.innerHTML = ""; // Clear any old messages
    } 
   /************validate age****************************/
  
  const MINAGE = 18;
  const MAXAGE = 100;
  let userAge ;
  let age = document.getElementById("Agebox").value.trim();
  console.log ("this is the type of age=", typeof(age));
     let errorMessage3= document.getElementById("errorMessage3box");
  userAge = Number(age)
  console.log ("this is the type of age=", typeof(userAge));
    if (userAge == null || userAge == "" || userAge == " " )
    {
      errorMessage3box.innerHTML  = "invalid input";
      isValid = false;
    }
    else if  (isNaN (userAge))
    {
      errorMessage3box.innerHTML  = "Please enter numbers only.";
      isValid = false;
    }
    else if (userAge < MINAGE || userAge > MAXAGE)
    {
      errorMessage3box.innerHTML  = "you must enter a vaild age between " + MINAGE + " and " + MAXAGE;
      isValid = false;
    }
    else  
    {
      errorMessage3box.innerHTML = ""; // All good
    } 

  console.log ("you are: " + userAge);

  if (isValid) 
  {
      document.getElementById("popupForm").style.display = "none";
      document.getElementById("rentcontainer").style.display = "none";
      let WelMsg = document.getElementById("WelMsg")
      document.getElementById("WelMsg").style.display = "block";
      WelMsg.innerHTML="Kia Ora " + firstName1 + " Let us help you select your dream jewellery. Select from the categories below  (Nityaa to update)";
      showItems("category");   
  }
  return false; // Ensure form does not reload page
} // submit form ending 
/*******************************************************************************FUNCTION  CLOSE FORM*************************************************************************************/
function closeForm() 
{
  document.getElementById("Firstnamebox").value = "";
  document.getElementById("Lastnamebox").value = "";
  document.getElementById("Agebox").value = "";
  document.getElementById("errorMessage1box").value = "";
  document.getElementById("errorMessage2box").value = "";
  document.getElementById("errorMessage3box").value = "";
  document.getElementById("popupForm").style.display = "none";
}
/**************************************************************************ARRAY OF JEWERLY CATEGORIES******************************************************************************/
// which category is clicked in Jewel and Material container
