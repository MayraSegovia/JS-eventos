window.addEventListener('load', () => {
    const divSelector = document.getElementById('InitSelector');
    divSelector.addEventListener('change', languageSelector)
})



const languageSelector = () => {
    const divElement = document.getElementById('formSelector');
    const languageSelect = document.createElement('select');
    languageSelect.id = 'lenguageSelect'
    const timeSelect = document.createElement('select');
    timeSelect.id = 'timeSelection'
    const languages = [];
    const optionDefault = document.createElement('option');
    optionDefault.value = '';
    languageSelect.appendChild(optionDefault);
    const submitButton = document.createElement('button');
    submitButton.textContent  = 'Submit'
    submitButton.id = 'submitProducts'
    submitButton.addEventListener('click', subbmitAction)
    for(let i = 0; i < products.length; i++) {
        if(languages.indexOf(products[i].language) < 0){
            languages.push(products[i].language);
            const option = document.createElement('option');
            option.value = products[i].language;
            option.innerHTML = products[i].language;
            languageSelect.appendChild(option);
        }
    }
    divElement.appendChild(languageSelect);
    divElement.appendChild(timeSelect);
   divElement.appendChild(document.createElement('br')); ;
    divElement.appendChild(submitButton);
    inputSelect();
}


const inputSelect = () => {
    const valueInput = document.getElementById('lenguageSelect');
    valueInput.addEventListener('change', timeSelector)
}


const timeSelector = () => {
    const select = document.getElementById('lenguageSelect');
   const valueSelected = select.value

   if(valueSelected ){
    const filterProduct = products.filter(product => product.language === valueSelected)
    const timerSelector = document.getElementById('timeSelection')
    const optionDefault = document.createElement('option');
    optionDefault.value = '';
    timerSelector.appendChild(optionDefault);
    for(let i = 0; i < filterProduct.length; i++) {
        const option = document.createElement('option');
        option.value = products[i].turn.id;
        option.innerHTML = products[i].turn.time;
        timerSelector.appendChild(option);
    }
   }
}



const subbmitAction = () => { 
    const langSelect = document.getElementById('lenguageSelect');
    const lang = langSelect.value
    const timerSelector = document.getElementById('timeSelection');
    const time = timerSelector.value


    if(lang && time){
        let courseSelected = products.filter(product  => product.language === lang)
        courseSelected = courseSelected.filter(course => course.turn.id === parseInt(time))
        if(courseSelected.length > 0) {
            alert('Se inscribio al curso de ' + courseSelected[0].language + ' en el horario ' + courseSelected[0].turn.time + ' con un precio de $' + courseSelected[0].price)
        }
    }else{
        alert('No tiene seleccionado los campos necesarios')
    }
}


const products = [
    {
        id: 1,
        language: 'English',
        turn: {
            id: 1,
            label:'Morning',
            time: '9:00 to 13:00'
        },
        price: 15000,
        quantity: 20,
        currentStudents: 0,
    },
    {
        id: 2,
        language: 'English',
        turn: {
            id: 2,
            label:'Afternoon',
            time: '14:00 to 18:00'
        },
        price: 15000,
        quantity: 20,
        currentStudents: 0,
    },
    {
        id: 3,
        language: 'English',
        turn: {
            id: 3,
            label:'Night',
            time: '19:00 to 22:00'
        },
        price: 15000,
        quantity: 20,
        currentStudents: 0,
    },
    {
        id: 4,
        language: 'German',
        turn: {
            id: 1,
            label:'Morning',
            time: '9:00 to 13:00'
        },
        price: 25000,
        quantity: 20,
        currentStudents: 0,
    },
    {
        id: 5,
        language: 'German',
        turn: {
            id: 2,
            label:'Afternoon',
            time: '14:00 to 18:00'
        },
        price: 25000,
        quantity: 20,
        currentStudents: 0,
    },
    {
        id: 6,
        language: 'German',
        turn: {
            id: 3,
            label:'Night',
            time: '19:00 to 22:00'
        },
        price: 25000,
        quantity: 20,
        currentStudents: 0,
    },
    {
        id: 7,
        language: 'French',
        turn: {
            id: 1,
            label:'Morning',
            time: '9:00 to 13:00'
        },
        price: 30000,
        quantity: 20,
        currentStudents: 0,
    },
    {
        id: 8,
        language: 'French',
        turn: {
            id: 2,
            label:'Afternoon',
            time: '14:00 to 18:00'
        },
        price: 30000,
        quantity: 20,
        currentStudents: 0,
    },
]