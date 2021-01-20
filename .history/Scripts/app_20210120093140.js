/* Custom Javascript Here */
"use strict";   // Indicate that the code should be executed in "strict mode".

// IIFE - Immediately Invoked Function Expression (Anonymous Self-Executing Function)
//-Acts as a Closure, Limits Scope Leak
(function()
{
    function Start()
    {
        console.log("App Started...");

        let paragraphOneText = "This is a simple site to demonstrate DOM Manipulation for ICE 1.";

        let paragraphOneElement = document.getElementById("paragraphOne");

        let paragraphOneParagraph = document.getElementsByTagName("p");

        console.log(paragraphOneParagraph);
    }

    window.addEventListener("load", Start);
})();




