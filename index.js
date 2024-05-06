const form = document.getElementById( 'form' )

const  contactlist = document.getElementById('contactlist')

form.addEventListener('submit', handelSubmission)



function handelSubmission(event){
    event.preventDefault()
    
    const pictureInput = form['picture']
    const picture = pictureInput.value;

    const nameInput = form['name']
    const name = nameInput.value;

    const phoneInput = form['phone']
    const phone = phoneInput.value;

    const li = document.createElement('li');

    const img = document.createElement('img');
    img.src = picture
    li.appendChild(img);

    const division = document.createElement('div');
    li.appendChild(division);

    const h3 = document.createElement('h3');
    h3.innerHTML= name
    division.appendChild('h3')
    
    const span = document.createElement('span');
    span.innerHTML = phone;
    division.appendChild('span');

    li.appendChild('division')
    contactlist.appendChild(li)
}