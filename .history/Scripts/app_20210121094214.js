/* Custom Javascript Here */
"use strict"; // Indicate that the code should be executed in "strict mode".

// IIFE - Immediately Invoked Function Expression (Anonymous Self-Executing Function)
//-Acts as a Closure, Limits Scope Leak
(function () {
  function displayHome() 
  {
    // This shows different ways of accessing an element; @see index.html <p> on line 51
    //-Each has its own use and solves different problems
    let paragraphOneText = "This is a simple site to demonstrate DOM Manipulation for ICE 1.";
    let paragraphOneElement = document.getElementById("paragraphOne");

    // let aParagraph = document.getElementsByTagName("p")[0];
    // let allParagraphs = document.getElementsByTagName("p");
    // let paragraphOneQuery = document.querySelector("p");
    // let paragraphOneQuerys = document.querySelectorAll("p");

    // Print each variable to the console, see how each one "points" to the same <p> element
    // console.log(paragraphOneElement);
    // console.log(aParagraph);
    // console.log(allParagraphs[0]);
    // console.log(paragraphOneQuery);
    // console.log(paragraphOneQuerys);

    // Assigning values to the textContent of the element we have a reference to
    paragraphOneElement.textContent = paragraphOneText;

    /* We can change the style as well..
      For the most part its best to use css sheets, but this can be useful when attempting
      dynamic effects on the webpage
    */
    //paragraphOneElement.style = "color: blue;";

    /* We can change the class of an element as well...
    * This is probably a better way of assigning css to elements (As compared to above)
    */
    //paragraphOneElement.className = "fs-4 fw-bold";


    // Injecting a new element
    let newParagraph = document.createElement("p");             // Create the Element
    newParagraph.setAttribute("id","paragraphTwo");             // Configure the Element
    newParagraph.textContent = "...And this is Paragraph two"   //--
    let mainContent = document.getElementsByTagName("main")[0]; // Get a reference to the Main Element
    mainContent.appendChild(newParagraph);                      // Append the new Element as a child of main

    // We can still make alterations to this element
    newParagraph.className = "fs-4 fw-bold";

    // Another way of injecting a new Element through Javascript
    let paragraphThree = '<p class ="fs-6">And this is the Third Paragraph</p>';    // Create the Element

    // Notice that this doesnt work, it is assigned as text verbatim, and erases all other content in main
    //mainContent.textContent = paragraphThree;

    let paragraphDiv = document.createElement('div');
    // Converting and Injecting the paragraph, it still erases all other content
    paragraphDiv.innerHTML = paragraphThree;

    // Insertions
    //-Example of insering before a node
    //newparagraph.before(paragraphDiv);

    // Inserting after a node
    newParagraph.after(paragraphDiv);

    // deletions

    //-Removing a single element
    //paragraphOneElement.remove();

    //-Removing a child element
    mainContent.removeChild(paragraphOneElement);

    // Updating & Modification
    //-Targetted Modifcation
    //mainContent.firstElementChild.textContent = "Welcome Home";

    // Bulk modififying mainContent
    //mainContent.innerHTML = 
    //'<h1 id="firstHeading">Welcome to WEBD6201 - Lab 1</h1>' +
    //'<p id="paragraphOne" class="fs-3 fw-bold">A new First Paragraph</p>';
  }

  function displayAbout() 
  {

  }

  function displayServices() 
  {

  }

  function displayProjects() 
  {

  }

  function displayContact() 
  {
    let fullName = document.getElementById("fullName");
    fullName.addEventListener("blur", function() {
      if (fullName.value.length < 2)
      {
        fullName.focus();
      }
    });
  }

  function Start() {
    console.log("App Started...");

    switch (document.title) {
      case "Home":
        displayHome();
        break;
      case "About":
        displayAbout();
        break;
      case "Projects":
        displayProjects();
        break;
      case "Services":
        displayServices();
        break;
      case "Contact":
        displayContact();
        break;
    }

    // Old Java Script

    

  }

  window.addEventListener("load", Start);
})();
