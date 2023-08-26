const button = document.querySelector('#button')
const answerContainer = document.getElementById('answer');
let answer = 'Click the button to find your future';
answerContainer.innerHTML = answer;

const getAnswer = () => {
    let randomNumber = Math.floor(Math.random() * 8);
    switch(randomNumber){
        case 0: answerContainer.innerHTML = 'Storms are up ahead'; break;
        case 1: answerContainer.innerHTML = 'Not yet'; break;
        case 2: answerContainer.innerHTML = 'The future is not clear'; break;
        case 3: answerContainer.innerHTML = 'Full speed ahead'; break;
        case 4: answerContainer.innerHTML = 'Try again tommorow'; break;
        case 5: answerContainer.innerHTML = 'Very possible'; break;
        case 6: answerContainer.innerHTML = 'Signs point to yes'; break;
        case 7: answerContainer.innerHTML = 'Kindness is better than not'; break;
        case 8: answerContainer.innerHTML = 'Maybe never'; break;
        default: answerContainer.innerHTML = 'Yes'; break;
    }
}

button.addEventListener('click', getAnswer);


