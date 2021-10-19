let title = document.querySelector('#title');
let author = document.querySelector('#author');
let year = document.querySelector('#year');
let btn = document.querySelector('.btn');
let bookList = document.querySelector('#book-list');

btn.addEventListener('click',function(e){
    e.preventDefault();
  if(title.value == '' && author.value == '' && year.value == ''  ){
      alert('Please input something');
  }else{
    const newRow = document.createElement('tr');
     const newTitle = document.createElement('th');
     newTitle.innerHTML = title.value;
     newRow.appendChild(newTitle);

     const newAuthor = document.createElement('th');
     newAuthor.innerHTML = author.value;
     newRow.appendChild(newAuthor);

     const newYear = document.createElement('th');
     newYear.innerHTML = year.value;
     newRow.appendChild(newYear);
     bookList.appendChild(newRow);
  }
})
