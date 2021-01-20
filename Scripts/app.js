/* Custom Javascript Here */

// IIFE - Immediately Invoked Function Expression (Anonymous Self-Executing Function)
//Acts as a Closure, Limits Scope Leak
(function()
{
    function Start()
    {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);
})();




