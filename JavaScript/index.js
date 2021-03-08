
const languageButton = document.querySelector('#LanguageButton');
const languageCheckbox = document.querySelector('#Language')
let languageChecked = languageCheckbox.checked

let wantedLanguage = "english"
languageButton.addEventListener('click', ()=>{
    // EN = FALSE | PT-BR = TRUE 
    if(!languageChecked){
        languageChecked = true;
        languageButton.className = "PT-BR";
        wantedLanguage = "portuguese";
    }else{
        languageChecked = false;
        languageButton.className = "EN";
        wantedLanguage = "english";
    }
    text = data[wantedLanguage];

    for(id of Object.keys(text)){
        content = text[id];
        targetElement = document.getElementById(`${id}`);
        targetElement.innerText = content;
        
    }

})














const boxes = document.querySelectorAll('article.Box');

boxes.forEach((box)=>{
    box.addEventListener('focusout', ()=>{
        box.classList.add("Open");
    })
})
