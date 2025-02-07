flashcard = document.getElementById('flashcard');
// previous_btn = document.getElementById('previous');
next_btn = document.getElementById('next');
definition_input = document.getElementById('consonant-def');
right_or_wrong = document.getElementById('right-or-wrong');
check_btn = document.getElementById('check');
flip_btn = document.getElementById('flip');
// let previousConsonant = '';
// let currentConsonant = '';
const consonants = {
    'א': 'Aleph',
    'ב': 'Bet',
    'ג': 'Gimel',
    'ד': 'Dalet',
    'ה': 'He',
    'ו': 'Vav',
    'ז': 'Zayin',
    'ח': 'Het',
    'ט': 'Tet',
    'י': 'Yod',
    'כ': 'Kaf',
    'ל': 'Lamed',
    'מ': 'Mem',
    'נ': 'Nun',
    'ס': 'Samekh',
    'ע': 'Ayin',
    'פ': 'Pe',
    'צ': 'Tsade',
    'ק': 'Qof',
    'ר': 'Resh',
    'ש': 'Shin',
    'ת': 'Tav'
  };

let randomName = '';
let randomLetter = '';
let is_def = false;

function displayRandomConsonant() {
    // previousConsonant = currentConsonant;
    // const consonants_obj = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'];
    let letters = Object.keys(consonants);
      
    let randomConsonantIndex = Math.floor(Math.random() * letters.length);
    randomLetter = letters[randomConsonantIndex];
    randomName = consonants[randomLetter];
    // currentConsonant = randomConsonant;
  flashcard.innerHTML = randomLetter;
//   console.log(previousConsonant);
}

function checkDefinition() {
    let definition = definition_input.value;
        definition_input.value = '';
        // console.log(definition);
        // console.log(randomName);
        if (definition === randomName) {
            console.log('Correct!');
            right_or_wrong.innerHTML = '';
            displayRandomConsonant();
        }
        else {
            console.log('Incorrect!');
            right_or_wrong.innerHTML = 'Incorrect!';
        }
}

next_btn.addEventListener('click', displayRandomConsonant);

definition_input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkDefinition();
        
        // displayRandomConsonant();
    }
});

flip_btn.addEventListener('click', function() {
    if (is_def) {
        flashcard.innerHTML = randomName;
        is_def = false;
    }
    else {
        flashcard.innerHTML = randomLetter;
        is_def = true;
    }
});



check_btn.addEventListener('click', checkDefinition);
displayRandomConsonant();