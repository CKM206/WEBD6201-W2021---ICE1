/* Custom Javascript Here */

"use strict";
// IIFE - Immediately Invoked Function Expression (Anonymous Self-Executing Function)
//Acts as a Closure, Limits Scope Leak
(function()
{
    function Start()
    {
        console.log("App Started...");
        let paragraphOneText = "This is a simple site to demonstrate DOM Manipulation for ICE 1.";
    }

    window.addEventListener("load", Start);
})();




