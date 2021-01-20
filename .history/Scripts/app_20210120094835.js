/* Custom Javascript Here */
"use strict";   // Indicate that the code should be executed in "strict mode".

// IIFE - Immediately Invoked Function Expression (Anonymous Self-Executing Function)
//-Acts as a Closure, Limits Scope Leak
(function()
{
    function Start()
    {
        console.log("App Started...");

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

        // Creating a new element
        let newParagraph = document.createElement("p");             // Create the Element
        newParagraph.setAttribute("id","paragraphTwo");             // Configure the Element
        newParagraph.textContent = "...And this is Paragraph two"   //--



    }

    window.addEventListener("load", Start);
})();




