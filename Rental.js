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
      //document.getElementById("MainContainer").style.display = "flex";
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

// for rental page 
 var Products = 
 [
    { key: "Ear_YG_18", category: "Earring", material: "Yellow Gold", name: "Yellow Gold earrings 1", image: "images/gold earrings.jpg", price: 80, market_price: 8000, karat:18  },
    { key: "Ear_YG_20", category: "Earring", material: "Yellow Gold", name: "Yellow Gold earrings 2", image: "images/Gold earring 2.jpg", price: 100, market_price: 10000, karat:20 },
    { key: "Ear_RG_18", category: "Earring", material: "Rose Gold", name: "Rose Gold earrings", image: "images/rose gold earrings.jpg", price: 160, market_price: 16000, karat:18 },
    { key: "Ear_WG_18", category: "Earring", material: "White Gold", name: "White Gold earrings", image: "images/white gold earrings.webp", price: 180, market_price: 18000,karat:18 },
    { key: "Ear_HE_22", category: "Earring", material: "High End Jewellery", name: "High End Yellow Gold earrings", image: "images/HE yellow gold earring.jpg", price: 160, market_price: 16000, karat:22},         
    { key: "Ear_HE_24", category: "Earring", material: "High End Jewellery", name: "High End White Gold earrings", image: "images/HE White gold earring.png", price: 160, market_price: 16000, karat:24},
    { key: "Ring_YG_18", category: "Ring", material: "Yellow Gold", name: "Yellow Gold rings", image: "images/gold ring.jpg", price: 120, market_price: 12000, karat:18},
    { key: "Ring_RG_20", category: "Ring", material: "Rose Gold", name: "Rose Gold rings", image: "images/Rose gold ring.jpg", price: 160, market_price: 16000, karat:20,},
    { key: "Ring_WG", category: "Ring", material: "WG", name: "White Gold rings", image: "images/white gold ring.webp", price: 80, market_price: 80 },
    { key: "Ring_HE", category: "Ring", material: "HE", name: "High End rings", image: "images/gold earrings.jpg", price: 60, market_price: 80 },        
    { key: "Bracelet_YG", category: "Bracelet", material: "YG", name: "Gold bracelet", image: "images/gold bracelet chain.jpg", price: 80, market_price: 80 },
    { key: "Bracelet_RG", category: "Bracelet", material: "RG", name: "Rose bracelet", image: "images/rose gold bracelet.jpeg", price: 60, market_price: 80 },
    { key: "Bracelet_WG", category: "Bracelet", material: "WG", name: "White Gold bracelet", image: "images/white gold bracelet.webp", price: 80, market_price: 80 },
    { key: "Bracelet_HE", category: "Bracelet", material: "HE", name: "High End bracelet", image: "images/gold earrings.jpg", price: 60, market_price: 80 },        
    { key: "NecklaceSet_YG", category: "NecklaceSet", material: "YG", name: "Gold Necklace set", image: "images/gold green set.webp", price: 80, market_price: 80 },
    { key: "NecklaceSet_RG", category: "NecklaceSet", material: "RG", name: "Rose Necklace set", image: "images/rose gold necklace.webp", price: 60, market_price: 80 },
    { key: "NecklaceSet_WG", category: "NecklaceSet", material: "WG", name: "White Gold Necklace set", image: "images/white gold set.avif", price: 80, market_price: 80 },
    { key: "NecklaceSet_HE", category: "NecklaceSet", material: "HE", name: "High End Necklace set", image: "images/gold earrings.jpg", price: 60, market_price: 80 }        
 ];

let selectdCategory ="";
let selectedMaterial ="";



function showItems (type) 
{ 
  console.log ("enter the function show item: " + type)
  currentStage = type;
  const container = document.getElementById ("MainContainer");
  const backBtn = document.getElementById ("backButton");
  container.innerHTML="";
  container.style.display = "flex";

  //show or hide back button depending on stage
  BackButton.style.display = type === "category" ? "none" : "inline-block";

  if (type === "category") 
  {
    let added = [];
    for (let i = 0; i < Products.length; i++) 
      
   {
      let category = Products[i].category;
      if(!added.includes(category)) 
    {
       added.push(category);
      //create wrapper div
      const wrapper = document.createElement ("div");
      wrapper.className = "item";
      wrapper.onclick = () => 
      {
        selectedCategory = category;
        showItems ("material");
      };

      // create image 
      const img = createImage(Products[i].image, category);
      wrapper.appendChild (img);

      //create label
      const label = document.createElement ("p");
      label.textContent = category;
      label.className = "product-info";
      wrapper.appendChild (label);

      container.appendChild (wrapper);
    }
   }
  }  
  else if (type === "material") 
  {
    WelMsg.innerHTML= firstName1 + " Please Select from the material from below  (Nityaa to update)";
    let added = [];
    for (let i = 0; i < Products.length; i++) {
   let p = Products[i];
   if (p.category === selectedCategory && !added.includes(p.material)) {
    added.push (p.material);

    const wrapper = document.createElement ("div");
    wrapper.className = "item";
    wrapper.onclick = () => {
      selectedMaterial = p.material;
      showItems ("final");
    };

    const img = createImage (p.image, p.material);
    wrapper.appendChild (img);

    const label = document.createElement ("p"); 
    label.textContent = p.material;
    label.className = "product - info";
    wrapper.appendChild (label);

    container.appendChild (wrapper);
   }   
  }
  } 
  else if (type === "final") 
  {
    WelMsg.innerHTML=firstName1 + " Please Select your desired piece  (Nityaa to update)";
  let found = false;
  for (let i = 0; i < Products.length; i++) {
    let p = Products [i];
    if (p.category === selectedCategory && p.material === selectedMaterial) {
      found = true;

      const item = document.createElement ("div");
      item.className = "item";

      const img = createImage (p.image, p.name);
      const name = document.createElement ("P");
      name.textContent = p.name;
      name.className = "product-info";
      const price = document.createElement ("p");
      price.textContent = `price: $${p.price} \n (Market price: $${p.market_price})`;
      price.className = "product-info";

      item.appendChild (img);
      item.appendChild (name);
      item.appendChild (price);

      container.appendChild (item);
    }
  }
  if (!found) {
    container.textContent = "No matching products found.";
  }
 }
}

function goBack () 
{
  if (currentStage === "final") {
    showItems ("material");
  } 
  else if (currentStage === "material") {
    showItems ("category");
  } 
}


// Create image element with given src and alt text
 function createImage(src, alt) 
  {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  return img;
   }





















