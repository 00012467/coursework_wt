let questions = [];
const addQuestion = (ev)=>{
    ev.preventDefault();  //to stop the form submitting and realoading the website
    let question = {
        Name: document.getElementById('name').value,
        Email: document.getElementById('email').value,
        Question: document.getElementById('question').value
    }
    questions.push(question);
    document.forms[0].reset(); // to clear the form for the next entries

    //saving to localStorage
    localStorage.setItem('QuestionList', JSON.stringify(questions) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('sbmt').addEventListener('click', addQuestion);
});