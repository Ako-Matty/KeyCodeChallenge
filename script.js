const heading = document.getElementById("heading");
const information = document.getElementById("information");
const key2 = document.getElementById("key2")
const key3 = document.getElementById("key3")
document.addEventListener(`keypress`, (event) =>{
    console.log(event.which)
//    console.log(event)

    information.textContent = event.which

    key2.textContent = event.code

    key3.textContent = event.key


    // information = event.key.charCodeAt;
    
    // if (event.key == `a`) { information.value = event.key;
    
    // }
    // if (event.ctrlKey) {
    //     alert (`combination of crtlKey + ${information} \n Key code Value: ${code}`)
    // } else {
    //     alert(``)
    // }

})