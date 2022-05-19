let todo;
let counter = 0;

function ToDoAdd(){
 if(document.querySelector('#inputId').value!= ''){

    let newdiv = document.createElement('div');
    newdiv.classList ='TaskDiv';
    newdiv.innerHTML = '<span class="taskh1">	&nbsp;' + document.querySelector('#inputId').value + ' <button onclick=deleteDiv(' + counter + ') class="buttonClose">X</button></span>';
    console.log(newdiv);
    document.querySelector('.allTasks').appendChild(newdiv);
    counter = counter +1;
 }
   
 
}
 function deleteDiv(a){
     let full = document.querySelectorAll('.TaskDiv');
     full[a].remove();
     console.log(full);
     counter = counter-1;
 }