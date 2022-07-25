const hole = document.getElementsByClassName('hole');
const deadMole = document.getElementById('dead');
const lostMole = document.getElementById('lost');

for (let i = 0; i < hole.length; i++) {
    hole[i].onclick = function() {
        if (hole[i].className.includes('hole_has-mole')) {
            deadMole.textContent++;
            
            if (deadMole.textContent == 10 && lostMole.textContent < 5) {
                alert('Победа!');
                deadMole.textContent = 0;
                lostMole.textContent = 0;
            }

        } else {
            lostMole.textContent++;

            if (lostMole.textContent == 5 && deadMole.textContent < 10) {
                alert('Вы проиграли!');
                deadMole.textContent = 0;
                lostMole.textContent = 0;
            }           
        }
    }
}