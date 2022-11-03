let nameInput = document.querySelector("#input-name");
let phoneInput = document.querySelector("#input-phone");
let createButton = document.querySelector("#create");
let removeListButton = document.querySelector("#remove-all-list");
let ulContactList = document.querySelector("#contact-list");
let errorMessage = document.querySelector("#error-message");

//-------------------------------------------------------------------------- start of create button listener  
//add an event listener for the create (Skapa) button
createButton.addEventListener("click", function(){
    let name = nameInput.value;
    let phone = phoneInput.value;
    console.log('Name: ' + name);
    console.log('Phone: ' + phone);

    // if contact is empty
    if (name == '' || phone == '') {
        //show an error message
        errorMessage.innerHTML = 'Får ej skapa tom kontakt';
        errorMessage.style.display = 'block';
    } 

    // if contact is not empty
    else {
        errorMessage.style.display = 'none';

        //create a new li element
        let newLi = document.createElement('li');

        let contactName = document.createElement('input');
        contactName.disabled = true;

        let contactPhone = document.createElement('input');
        contactPhone.disabled = true;

        let buttonChangeContact = document.createElement('button');
        buttonChangeContact.classList.add('change-contact');
       
        let buttonDeleteContact = document.createElement('button');
        buttonDeleteContact.classList.add('delete-contact');
    
        contactName.value = name;
        contactPhone.value = phone;
        buttonChangeContact.innerText = "Ändra";
        buttonDeleteContact.innerText = "Radera";

        newLi.append(contactName, contactPhone, buttonChangeContact, buttonDeleteContact);
        newLi.classList.add('contact');
   
        // add a new li element in existing ul element
        ulContactList.appendChild(newLi);

        //Make input fields empty
        nameInput.value = '';
        phoneInput.value = '';

//-------------------------------------------------------------------------- start of delete button listener         
        //add an event listener for the delete (Radera) button
        buttonDeleteContact.addEventListener("click", function(){         
            //get the parent of the delete button(li) 
            let listItem = this.parentNode;
            listItem.remove();    
          });
//--------------------------------------------------------------------------  end of delete button listener  

//--------------------------------------------------------------------------  start of change button listener  
        //add an event listener for the change (Ändra) button
        buttonChangeContact.addEventListener("click", function(){
          
            errorMessage.style.display = 'none';

            let listItem = this.parentNode;
            console.log ('Disable|Enable')
            console.log (listItem.children[0].disabled)

            //if disabled, enable
            if (listItem.children[0].disabled && listItem.children[1].disabled){
                //make input fields enabled
                listItem.children[0].disabled = false;    
                listItem.children[1].disabled = false;
            }
           // if enable, disable 
           else{
                //if contakt is empty
                if (listItem.children[0].value == '' || listItem.children[1].value == '') {
                    //show an error message
                    errorMessage.innerHTML = 'Får ej spara tom kontakt';
                    errorMessage.style.display = 'block';
                } 
                else{
                    //add an event listener for the change (Ändra) button 
                    //to make input fields disabled and save new values   
                        listItem.children[0].disabled = true;    
                        listItem.children[1].disabled = true;                            
                }   
           }           
          });
//-------------------------------------------------------------------------- end of change button listener                      
    }  
})
//-------------------------------------------------------------------------- end of create button listener   

//--------------------------------------------------------------------------  
 //add an event listener for the remove list (Radera lista) button
removeListButton.addEventListener('click', function(){   
    ulContactList.innerHTML = '';
})
//--------------------------------------------------------------------------  





