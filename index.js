function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Fill in a To-Do");
  } 
  else {
    document.getElementById("myUL").appendChild(li);
  }

  document.getElementById("myInput").value = "";

  const DeleteButton = document.createElement('button');
  DeleteButton.innerHTML='🗑️';
  DeleteButton.classList.add("Delete-btn");
  li.appendChild(DeleteButton);

  const completedButton = document.createElement('button');
  completedButton.innerHTML='✔️';
  completedButton.classList.add("complete-btn");
  li.appendChild(completedButton);
  
}

myUL.addEventListener('click',deleted);

function deleted(e){
  const item=e.target;
  if(item.classList[0]==="Delete-btn"){
    const todo=item.parentElement;
    todo.remove();
  }

  if(item.classList[0]=="complete-btn"){
    const todo=item.parentElement;
    todo.classList.toggle("completed");
  }
}