$(document).ready(function(){
//Pseudo Code
//Goal: have the user's form inputs render below the form in a log. Have the log toggle to view previous thought records
//Note to marker: i've left a lot of the console.log() things in to help remember my process for future projects. Also i didn't use template literals becaause i didn't see a use for them. If you are able to let me know if there is a good spot to use it that would be helpful :)

// Creating an object to hold each form variable. Leaving an empty string to host user's respective answers on form.
const thoughtRecord = {
    date: "",
    title: "",
    situation: "",
    automaticThoughts: "",
    emotion: "",
    evidence: "",
    alternativeThought:"",
    newEmotion: "",
};

//using an event listener to allow form content to be inputed. Wondering if there is a way to be less repetitive here. 
$('#date').on('input', function(event){
    thoughtRecord.date=event.target.value;
});

$('#title').on('input', function(event){
    thoughtRecord.title=event.target.value;
});

$('#situation').on('input', function(event){
    thoughtRecord.situation=event.target.value;
    console.log(thoughtRecord)
});

$('#automaticThought').on('input', function(event){
    console.log(event.target.value);
    thoughtRecord.automaticThoughts=event.target.value;
    console.log(thoughtRecord)
});

$('#emotion').on('input', function(event){
    console.log(event.target.value);
    thoughtRecord.emotion=event.target.value;
    console.log(thoughtRecord)
});

$('#evidence').on('input', function(event){
    console.log(event.target.value);
    thoughtRecord.evidence=event.target.value;
    console.log(thoughtRecord)
});

$('#alternativeThought').on('input', function(event){
    console.log(event.target.value);
    thoughtRecord.alternativeThought=event.target.value;
    console.log(thoughtRecord)
});

$('#newEmotion').on('input', function(event){
    console.log(event.target.value);
    thoughtRecord.newEmotion=event.target.value;
    console.log(thoughtRecord)
});

//using an event listener click and append so when button is clicked the form answers can be applied to page. 
$('#button').on('click', function(event){
    event.preventDefault();
    console.log('the button was clicked');
    $('.logOfThoughtRecords').append(`
    <div class='titleContainer'>
        <div class= 'arrowPlusTitle'>
             <i class="fa-solid fa-chevron-down"></i>
            <h3>${thoughtRecord.title}</h3>
        </div>
        <p>${thoughtRecord.date}</p>
    </div>
    
    <div class='formvisible'>
        <p>${thoughtRecord.situation}</p>
        <p>${thoughtRecord.automaticThoughts}</p>
        <p>${thoughtRecord.emotion}</p>
        <p>${thoughtRecord.evidence}</p>
        <p>${thoughtRecord.alternativeThought}</p>
        <p>${thoughtRecord.newEmotion}</p>
    </div>
    `);
});
    //Using an event lister to toggle the icon so that form answers appear slowly
    $('.logOfThoughtRecords').click(function(event){
    console.log(event);
    if(event.target.className === "fa-solid fa-chevron-down"){
       $(event.target.parentElement.parentElement.nextElementSibling).toggle('slow');
    }
 });

});
 

 
 

