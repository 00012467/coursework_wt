let users = [];
const addUser = (ev)=>{
    ev.preventDefault();  //to stop the form submitting and realoading the website
    let user = {
        Name: document.getElementById('name').value,
        Surname: document.getElementById('surname').value,
        Email: document.getElementById('phone').value,
        Password: document.getElementById('password')
    }
    users.push(user);
    document.forms[0].reset(); // to clear the form for the next entries

    //saving to localStorage
    localStorage.setItem('UserList', JSON.stringify(users) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('sbmt').addEventListener('click', addUser);
});