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
    if (firstName1 === null || firstName1 === "" || firstName1 === " ")  //  That is the code that gives an error in an alert if you have not entered anything,
    {
       errorMessage1box.innerHTML ="Invalid, you must enter a valid name";// Show error if empty
      isValid = false;
    } 
    else if (!isNaN(firstName1))
    {
      errorMessage1box.innerHTML = "Name must contain only letters.";// Show error if it's a number
      isValid = false;
    }
    else if (/\d/.test(firstName1)) 
    {
    errorMessage1box.innerHTML = "Name must not contain numbers."; // Show error if it contains any digit
    isValid = false;
    } 
    else if (!/^[A-Z]/.test(firstName1))
    {
      errorMessage1box.innerHTML = "The first letter of the name must be a capital letter.";// Show error if it doesn't start with capital
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
      WelMsg.innerHTML="Kia Ora " + firstName1 + " Let us help you select your dream jewellery. Select from the categories below";
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
    { key: "Ear_YG_18", category: "Earrings", material: "Yellow Gold", name: "Yellow Gold earrings 1", image: "images/gold earrings.jpg", price: 80, market_price: 8000, karat:18  },
    { key: "Ear_YG_20", category: "Earrings", material: "Yellow Gold", name: "Yellow Gold earrings 2", image: "images/Gold earring 2.jpg", price: 100, market_price: 10000, karat:20 },
    { key: "Ear_RG_18", category: "Earrings", material: "Rose Gold", name: "Rose Gold earrings 1", image: "images/rose gold earrings.jpg", price: 160, market_price: 16000, karat:18 },
    { key: "Ear_RG_20", category: "Earrings", material: "Rose Gold", name: "Rose Gold earrings 2", image: "images/Rose Gold earring diamond.jpg", price: 260, market_price: 16000, karat:20 },
    { key: "Ear_WG_18", category: "Earrings", material: "White Gold", name: "White Gold earrings", image: "images/white gold earrings.webp", price: 180, market_price: 18000,karat:18 },
    { key: "Ear_HE_22", category: "Earrings", material: "High End Jewellery", name: "High End Yellow Gold earrings", image: "images/HE yellow gold earring.jpg", price: 160, market_price: 16000, karat:22},         
    { key: "Ear_HE_24", category: "Earrings", material: "High End Jewellery", name: "High End White Gold earrings", image: "images/HE White gold earring.png", price: 260, market_price: 26000, karat:24},
    { key: "Ear_HE_24", category: "Earrings", material: "High End Jewellery", name: "High End Rose Gold earrings", image: "images/HE rose gold earring.jpg", price: 360, market_price: 36000, karat:24},
    { key: "Ring_YG_18", category: "Rings", material: "Yellow Gold", name: "Yellow Gold rings", image: "images/gold ring.jpg", price: 120, market_price: 12000, karat:18},
    { key: "Ring_RG_20", category: "Rings", material: "Rose Gold", name: "Rose Gold rings 1", image: "images/Rose gold ring.png", price: 160, market_price: 16000, karat:20,},
    { key: "Ring_RG_18", category: "Rings", material: "Rose Gold", name: "Rose Gold rings 2", image: "images/Rose gold ring simple.jpg", price: 260, market_price: 26000, karat:18,},
    { key: "Ring_WG_22", category: "Rings", material: "White Gold", name: "White Gold rings", image: "images/white gold ring.webp", price: 180, market_price: 18000, karat:22 },
    { key: "Ring_HE_24", category: "Rings", material: "High End Jewellery", name: "HE Rose Gold rings 1", image: "images/HE Rose Gold ring.jpg", price: 260, market_price: 26000, karat:24},
    { key: "Ring_HE_24", category: "Rings", material: "High End Jewellery", name: "HE Rose Gold rings 2", image: "images/HE Rose gold ring 2.jpg", price: 360, market_price: 36000, karat:20},
    { key: "Ring_HE_24", category: "Rings", material: "High End Jewellery", name: "HE Yellow Gold rings", image: "images/HE Yellow Gold ring.jpg", price: 260, market_price: 26000, karat:24 },        
    { key: "Ring_HE_24", category: "Rings", material: "High End Jewellery", name: "HE White Gold rings", image: "images/White gold ring HE.jpg", price: 260, market_price: 26000, karat:22},
    { key: "Bracelet_YG_18", category: "Bracelets", material: "Yellow Gold", name: "Yellow Gold bracelet", image: "images/gold bracelet chain.jpg", price: 280, market_price: 28000, karat:18},
    { key: "Bracelet_RG_20", category: "Bracelets", material: "Rose Gold", name: "Rose Gold bracelet", image: "images/rose gold bracelet.jpeg", price: 260, market_price: 80, karat:20 },
    { key: "Bracelet_WG_22", category: "Bracelets", material: "White Gold", name: "White Gold bracelet", image: "images/white gold bracelet.webp", price: 280, market_price: 80, karat:22},
    { key: "Bracelet_HE_24", category: "Bracelets", material: "High End Jewellery", name: "HE Yellow Gold bracelet", image: "images/HE YG bracelet.jpg", price: 360, market_price: 36000, karat:24},        
    { key: "NecklaceSet_YG_18", category: "Necklace Sets", material: "Yellow Gold", name: "Yellow Gold Necklace set", image: "images/gold green set.webp", price: 380, market_price: 38000, karat:18 },
    { key: "NecklaceSet_RG_20", category: "Necklace Sets", material: "Rose Gold", name: "Rose Gold Necklace set", image: "images/rose gold necklace.webp", price: 360, market_price: 36000, karat:20 },
    { key: "NecklaceSet_WG_22", category: "Necklace Sets", material: "White Gold", name: "White Gold Necklace set", image: "images/white gold set.avif", price: 380, market_price: 380000, karat:22  },
    { key: "NecklaceSet_HE_24", category: "Necklace Sets", material: "High End Jewellery", name: "HE Rose Gold Necklace set", image: "images/HE Rose Gold Necklaceset.jpg", price: 460, market_price: 46000, karat:24}        
 ];

let selectedCategory ="";
let selectedMaterial ="";



function showItems (type) 
{ 
  console.log ("enter the function show item: " + type)
  currentStage = type;// Track current stage (category, material, or final)
  const container = document.getElementById ("mainContainer");
  const backButton = document.getElementById ("backButton");
  container.innerHTML="";
  container.style.display = "flex";

  //show or hide back button depending on stage
  backButton.style.display = type === "category" ? "none" : "inline-block";

  if (type === "category") 
  {
      let added = [];// To track unique categories 
    for (let i = 0; i < Products.length; i++) 
   {
      let category = Products[i].category;
      if(!added.includes(category)) 
    {
       added.push(category);
      //create wrapper div
      const wrapper = document.createElement ("div");// Create item box
      wrapper.className = "item";
      wrapper.onclick = () => 
      {
        selectedCategory = category;// Save chosen category
        showItems ("material");// Go to material stage
      };

      // create image 
      const img = createImage(Products[i].image, category);// Create image element
      wrapper.appendChild (img);

      //create label
      const label = document.createElement ("p");// Add text label
      label.textContent = category;
      label.className = "productinfo";
      wrapper.appendChild (label);

      container.appendChild (wrapper);// Add to page
    }
   }
  }  
  else if (type === "material") 
  {
    WelMsg.innerHTML= firstName1 + " Please Select from the material from below";
    let added = [];
    for (let i = 0; i < Products.length; i++) 
    {
      let product = Products[i];
      if (product.category === selectedCategory && !added.includes(product.material)) 
      {
        added.push (product.material);

        const wrapper = document.createElement ("div");
        wrapper.className = "item";
        wrapper.onclick = () => 
        {
          selectedMaterial = product.material;// Save chosen material
          showItems ("final");// Move to final stage
        };

        const img = createImage (product.image, product.material); // create Image
        wrapper.appendChild (img);

        const label = document.createElement ("p"); // Material name
        label.textContent = product.material;
        label.className = "productinfo";
        wrapper.appendChild (label);

        container.appendChild (wrapper); // Add to container
      }  
    }
  } 
  else if (type === "final") 
  {
    WelMsg.innerHTML=firstName1 + " please select your desired piece";
    let found = false;// Flag to check if matching product is found
    for (let i = 0; i < Products.length; i++) 
    {
      let product = Products [i];
      if (product.category === selectedCategory && product.material === selectedMaterial) 
      {
        found = true;
        const item = document.createElement ("div");
        item.className = "item";
        const img = createImage (product.image, product.name);
            img.onclick = () => 
          {
            console.log("Product clicked:", product.name);
            selectedProduct = product;// Store selected product
            showProduct(product);
          };
        const name = document.createElement ("P");// Name display
        name.textContent = product.name;
        name.className = "product-info";
        const price = document.createElement ("p");
        price.textContent = `price: $${product.price} \n (Market price: $${product.market_price})`;
        price.className = "product-info";

        item.appendChild (img);
        item.appendChild (name);
        item.appendChild (price);

        container.appendChild (item);// Add product to screen
      }
    }
    if (!found) 
    {
    container.textContent = "No matching products found.";// Show message if no match
    }
  }
}

function goBack () 
{
  if (currentStage === "final") 
  {
    WelMsg.innerHTML= firstName1 + " Please Select from the material from below";
    showItems ("material");
  } 
  else if (currentStage === "material") 
  {
    WelMsg.innerHTML="Kia Ora " + firstName1 + " Let us help you select your dream jewellery. Select from the categories below";
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

function showProduct(product)
{  
  document.getElementById("popupBox").style.display = "block";
  //document.getElementById("mainContainer").classList.add("inactive"); // deactivate main container
  document.getElementById("popupMsg").innerHTML = firstName1 + " " +lastName1 + " you have selected one of the best products. Fill in details and 'Add to cart' to proceed further"
  document.getElementById("popupImage").innerHTML = `<img src="${product.image}" alt="${product.name}">`;
  document.getElementById("popupName").textContent = "Product Selected: " + product.name;
  document.getElementById("popupPrice").textContent = "Price per day: $" + product.price;
  document.getElementById("totalPrice").textContent = product.price;
  document.getElementById("karatSelect").value = "";
  document.getElementById("karatMessage").textContent = "";
  document.getElementById("daysSelect").value = "1";
  console.log("Popup shown for:", product.name);
}
    // Check if the selected karat matches the product's karat
function checkKarat() 
{
  const selectedKarat = document.getElementById("karatSelect").value;
  const message = document.getElementById("karatMessage");
    if (parseInt(selectedKarat) !== selectedProduct.karat) 
      {
        message.textContent = "Item not available with specified karat. Available: " + selectedProduct.karat + "K";
        console.log("Wrong karat. Expected:", selectedProduct.karat, "Selected:", selectedKarat);
      } else 
      {
        message.textContent = "";
        console.log("Correct karat selected:", selectedKarat);
      }
}

    // Calculate total rental price based on selected number of days
function calculateTotal() 
  {
    const days = parseInt(document.getElementById("daysSelect").value);
    const total = selectedProduct.price * days;
    document.getElementById("totalPrice").textContent = total;
    console.log("Days:", days, "Total rental price:", total);
  }

        // Close popup panel or Add to cart performs same taskpopupName
    function closePopup() 
    {
      document.getElementById("popupBox").style.display = "none";
      //document.getElementById("mainContainer").classList.remove("inactive"); // activate main container
      console.log("Popup closed.");
    }
    

    function addToCart() {
      const selectedKarat = document.getElementById("karatSelect").value;
      const message = document.getElementById("karatMessage");
        // Check if karat is selected
      if (selectedKarat === "") {
      message.textContent = "Please select a karat option.";
      message.style.color = "red";
      console.log("Karat not selected.");
      return; // Stop submission
    }
      document.getElementById("popupBox").style.display = "none";
      //document.getElementById("mainContainer").classList.remove("inactive"); // activate main container
      console.log("Popup closed.");
      alert= "Your product has been added to the cart"
    }