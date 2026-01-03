// let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     //event.preventDefault();
//     //it prevent the default process (that is after submission the page goes to /action) this is prevented
//     alert("form submitted"); 
// });


// -----------Extracting  data from the forms-----------------
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event)
// {
//     event.preventDefault();
//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.innerText);// this gives blank because the submitted value is not stored in innerText 
//     // it will be stored in "value" attribute
//     console.log(inp.value);
// });

let form = document.querySelector("form");
// form.addEventListener("submit", function(event)
// {
//     event.preventDefault();
//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//     console.dir(user.value);
//     console.dir(pass.value);
//     alert(`Hi!\nUserName: ${user.value}\n Password: ${pass.value}`);
// });
//_______________________________________
//also we can also use form object

// form.addEventListener("submit", function(event)
// {
//     event.preventDefault();
//     let user = this.elements[0]; //form.elements[0] or document.querySelector("#pass");
//     let pass = this.elements[1];
//     console.dir(user.value);    
//     console.dir(pass.value);
//     alert(`Hi!\nUserName: ${user.value}\n Password: ${pass.value}`);
// });



//____________________________Change Events__________________________

// the change event occurs when the value of an element has been changed (only works on <input> , <textarea>, and <select> elements)
// it track the change between initial and final state
form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("FORM SUBMITTED");
});
form.addEventListener("change", function()
{
    let user = document.querySelector("#user");
    console.log("change event");
    console.log(`final value ${user.value}`);
});
//___________________________________________________________________
 

//____________________________input Event____________________________
//this track the small changes also
// it tracks only character keys not for like ctrl key ,etc
form.addEventListener("input", function()
{
    let user = document.querySelector("#user");
    console.log("input event");
    console.log(`final value ${user.value}`);
});