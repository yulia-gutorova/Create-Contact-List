let nameInput = document.querySelector("#input-name");
let phoneInput = document.querySelector("#input-phone");
let createButton = document.querySelector("#create");
let removeListButton = document.querySelector("#remove-all-list");
let ulContactList = document.querySelector("#contact-list");
let errorMessage = document.querySelector("#error-message");

//-------------------------------------------------------------------------- start of remove button listener   
 //add an event listener for the remove list (Radera lista) button
 removeListButton.addEventListener('click', function(){  
    removeAllList()
})
//--------------------------------------------------------------------------  end of remove button listener  

//-------------------------------------------------------------------------- start of create button listener  
//add an event listener for the create (Skapa) button
createButton.addEventListener("click", function(){

      let name = nameInput.value;
    let phone = phoneInput.value;

    // if contact is empty
    if (name.trim() == '' || phone.trim() == '') {

        //add a new class 'empty' to mark an emty contact or umnark not empty contact
        if (name.trim() == ''){
            nameInput.classList.add("empty")
        }
        else {
            nameInput.classList.remove("empty")
        }

        if (phone.trim() == ''){
            phoneInput.classList.add("empty")
        }
        else {
            phoneInput.classList.remove("empty")
        }

        //show an error message
        errorMessage.innerHTML = 'Får ej skapa tom kontakt';
        errorMessage.style.display = 'block';
    } 

    // if contact is not empty
    else {

        //delete class 'empty' if contact is not empty

        if (nameInput.classList.contains("empty")){nameInput.classList.remove("empty")}
        if (phoneInput.classList.contains("empty")){phoneInput.classList.remove("empty")}

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
   
        // add a new li element in existing ul element
        ulContactList.appendChild(newLi);

        //Make input fields empty
        nameInput.value = '';
        phoneInput.value = ''; 

//-------------------------------------------------------------------------- start of delete button listener         
        //add an event listener for the delete (Radera) button
        buttonDeleteContact.addEventListener("click", function(e){  
            removeContact(e);      
          });
//--------------------------------------------------------------------------  end of delete button listener  

//--------------------------------------------------------------------------  start of change button listener  
        //add an event listener for the change (Ändra) button
        buttonChangeContact.addEventListener("click", function(e){         
            changeContact(e);       
          });
//-------------------------------------------------------------------------- end of change button listener                      
    }   
})

//-------------------------------------------------------------------------- end of create button listener   



//############################ Functions ###################################

//-------------------------------------------------------------------------- 
// removeAllList function
//--------------------------------------------------------------------------   
function removeAllList(){
    errorMessage.style.display = 'none';
    ulContactList.innerHTML = '';
}

//-------------------------------------------------------------------------- 
// changeContact function
//-------------------------------------------------------------------------- 
function changeContact(e){

    errorMessage.style.display = 'none';

    let listItem = e.target.parentNode;

    //if disabled, enable
    if (listItem.children[0].disabled && listItem.children[1].disabled){
        //make input fields enabled
        
        //buttonChangeContact.innerText = 'Spara';
        e.target.innerText = 'Spara';
        listItem.children[0].disabled = false;    
        listItem.children[1].disabled = false;
    }
    // if enabled, disable           
    else{

        //if contact is empty mark it, if not emty unmark
        if (listItem.children[0].value.trim() == '' || listItem.children[1].value.trim() == '') {
            
            //add a new class 'empty' to mark an emty contact
            if (listItem.children[0].value.trim() == ''){
                listItem.children[0].classList.add("empty")
            }
            else {
                listItem.children[0].classList.remove("empty")
            }

            if (listItem.children[1].value.trim() == ''){
                listItem.children[1].classList.add("empty")
            }
            else{
                listItem.children[1].classList.remove("empty")
            }
            
            //show an error message
            errorMessage.innerHTML = 'Får ej spara tom kontakt';
            errorMessage.style.display = 'block';
        }
            
        else{
            //buttonChangeContact.innerText = 'Ändra'; 
            e.target.innerText = 'Ändra'; 
            //delete class 'empty' 
            if (listItem.children[0].classList.contains("empty")){
                listItem.children[0].classList.remove("empty")
            }

            if (listItem.children[1].classList.contains("empty")){
                listItem.children[1].classList.remove("empty")
            }

            //add an event listener for the change (Ändra) button 
            //to make input fields disabled and save new values   
                listItem.children[0].disabled = true;    
                listItem.children[1].disabled = true;                            
        }   
    }  
}

//-------------------------------------------------------------------------- 
// removeContact function
//-------------------------------------------------------------------------- 
function removeContact(e){
    //get the parent of the delete button(li) 
    let listItem = e.target.parentNode;
    if (listItem.children[0].value.trim() == '' || listItem.children[1].value.trim() == '') {
        errorMessage.style.display = 'none';
    }
    listItem.remove();
}






