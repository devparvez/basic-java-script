const addButton = document.querySelector('#add');
const addNewNote = (text=' ') =>{
  const note = document.createElement('div');
  note.classList.add("note");

  const htmlData = ` 
  <div class="note">
    <div class="operation">
        <button class="edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
        <button class="delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
    </div>

    <div class="main ${text ? " ":" hidden "}"></div>
    <textarea class="${text ? "hidden":" "}" ></textarea>
</div>
  
  
  `;

  note.insertAdjacentHTML('afterbegin',htmlData);
  //console.log(note);

  //-------------Getting references------------------
  const editButton = note.querySelector('.edit');
  const delButton = note.querySelector('.delete');
  const mainButton = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  delButton.addEventListener('click',()=>{
    note.remove();
  });

  textArea.value = text;
  mainButton.innerHTML = text;

  editButton.addEventListener('click',()=>{
    mainButton.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  })

  textArea.addEventListener('change',(event)=>{
    const value =event.target.value;
  })




  document.body.appendChild(note);



}



addButton.addEventListener('click',() => addNewNote());