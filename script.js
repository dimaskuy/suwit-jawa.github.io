console.log("-- Suwit Jawa v2.0");

/*  UNTUK BROWSER YANG SUPPORT PENUH METHOD forEach:
const pilihan = document.querySelectorAll('li > img');
  pilihan.forEach(function(e) {
    console.log(e);
  });
*/

const gambarComputer = document.querySelector('.img-computer');
const pilihan = Array.from(document.querySelectorAll('.pilihan > img'));
const info = document.querySelector('.info');


function getPilihanComputer() {
  const computer = Math.random()
    if (computer < 0.33) return 'semut';
    else if (computer >= 0.33 && computer < 0.667 ) return 'manusia';
    return 'gajah';
}

const scoreComputer = document.getElementById('score-computer');
  let scoreComputerCount = 0;
const scorePlayer = document.getElementById('score-player');
  let scorePlayerCount = 0;

const kesempatan = document.getElementById('kesempatan');
let kesempatanTotal = 3;

function getHasil(computer, player) {
  if (player === computer) {
    return 'SERI';
  }
  // if (player === 'semut') return (computer === 'manusia')? 'KALAH..' : 'MENANG!';
    else if (player === 'semut') {
      if (computer === 'manusia') {
        scoreComputerCount += 1;
        kesempatanTotal -= 1;
        return 'KALAH..';
      } else {
        scorePlayerCount += 1;
        return 'MENANG!';
      }
    }
  // if (player === 'manusia') return (computer === 'semut')? 'MENANG!' : 'KALAH..';
    else if (player === 'manusia') {
      if (computer === 'semut') {
        scorePlayerCount += 1;
        return 'MENANG!';
      } else {
        scoreComputerCount += 1;
        kesempatanTotal -= 1;
        return 'KALAH..';
      }
    }
  // if (player === 'gajah') return (computer === 'manusia')? 'MENANG!' : 'KALAH..';
    else if (player === 'gajah') {
      if (computer === 'manusia') {
        scorePlayerCount += 1;
        return 'MENANG!';
      } else {
        scoreComputerCount += 1;
        kesempatanTotal -= 1;
        return 'KALAH..';
      }
    }
}

let bg;
function infoBG(hasil) {
  if (hasil === 'SERI') {
    info.style.backgroundColor = '#EDEDED';
    info.classList.add('text-black');
  } else if (hasil === 'MENANG!') {
    info.classList.remove('text-black');
    info.style.backgroundColor = 'lightseagreen';
  } else if (hasil === 'KALAH..') {
    info.classList.remove('text-black');
    info.style.backgroundColor = 'crimson';
  }
}

const scoreResult = document.querySelector('.nofocus')
const scoreResultObject = document.getElementById('score-result-object');


let i = 0;
function putarGambar() {
  const waktuMulai = new Date().getTime();

  setInterval(function() {
    if (new Date().getTime() - waktuMulai > 1100) {
      clearInterval;
      return;
    }

    gambarComputer.setAttribute('src', pilihan[i++].getAttribute('src'));
      if (i === pilihan.length) {
        i = 0;
      }
  }, 120);
}


function noteComp() {
  const text = Math.random();
    if(text < 0.2) return 'Better luck next time (ndak bisa basa enggres)';
    else if(text >= 0.2 && text < 0.4) return 'BISA YOK!';
    else if(text >= 0.4 && text < 0.6) return 'Masa menyerah sih?';
    else if(text >= 0.6 && text < 0.8) return 'BGST lu wahai Computer!';
      return 'Ya nggak tau, kok tanya saya..';
}

function notePlayer() {
  const text = Math.random();
    if(text < 0.2) return 'GG Gaming!';
    else if(text >= 0.2 && text < 0.4) return '*(playing NCS Safe and Sound Music)*';
    else if(text >= 0.4 && text < 0.6) return 'Computernya kena mental (emote batu)';
    else if(text >= 0.6 && text < 0.8) return 'To the moon!';
      return 'hmm... INTERESTING!';
}


// PROGRAM SETELAH REFACTORY

pilihan.forEach(function(img) {
  img.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = this.className;  // mengambil nama class senidri
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    setTimeout(function() {
      if (pilihanComputer === 'semut') {
        gambarComputer.setAttribute('src', 'https://i.ibb.co/g3wfxgM/semut.png');
        gambarComputer.setAttribute('alt', 'Semut');
        gambarComputer.setAttribute('title', 'Semut');
      }
      else if (pilihanComputer === 'manusia') {
        gambarComputer.setAttribute('src', 'https://i.ibb.co/swkWMHt/orang.png');
        gambarComputer.setAttribute('alt', 'Manusia');
        gambarComputer.setAttribute('title', 'Manusia');
      }
      else if (pilihanComputer === 'gajah') {
        gambarComputer.setAttribute('src', 'https://i.ibb.co/x8GqR9f/gajah.png');
        gambarComputer.setAttribute('alt', 'Gajah');
        gambarComputer.setAttribute('title', 'Gajah');
      }

      info.textContent = hasil;
      infoBG(hasil);

      scoreComputer.textContent = scoreComputerCount;
      scorePlayer.textContent = scorePlayerCount;

      kesempatan.textContent = kesempatanTotal;
        if (kesempatanTotal < 0) {
          kesempatan.textContent = kesempatanTotal = 0;
        }

      if (scoreComputerCount >= 4) {
        scoreResult.classList.remove('hidden');
        scoreResultObject.textContent = 'Computer';
        scoreResultObject.style.color = '#5C33F6';
        document.getElementById('score-result-note').textContent = noteComp();
        scoreComputer.textContent = scoreComputerCount = 4;
          // scoreComputer.textContent = scoreComputerCount = 0;
          // scorePlayer.textContent = scorePlayerCount = 0;
          // info.classList.remove('text-black');
          // info.style.backgroundColor = '#F9F9F9';
          // info.textContent = '';
      }
      else if (scorePlayerCount >= 4) {
        scoreResult.classList.remove('hidden');
        scoreResultObject.textContent = 'Player';
        scoreResultObject.style.color = '#DA0037';
        document.getElementById('score-result-note').textContent = notePlayer();
        scorePlayer.textContent = scorePlayerCount = 4;
          // scoreComputer.textContent = scoreComputerCount = 0;
          // scorePlayer.textContent = scorePlayerCount = 0;
          // info.classList.remove('text-black');
          // info.style.backgroundColor = '#F9F9F9';
          // info.textContent = '';
      }
    }, 1100);

      putarGambar();
  });
});


scoreResult.querySelector('button').addEventListener('click', function() {
  scoreResult.classList.add('hidden');
    scoreComputer.textContent = scoreComputerCount = 0;
    scorePlayer.textContent = scorePlayerCount = 0;
    kesempatan.textContent = kesempatanTotal = 3;

    info.classList.remove('text-black');
    info.style.backgroundColor = '#F9F9F9';
    info.textContent = '';
    info.classList.remove('text-black');
    info.style.backgroundColor = '#F9F9F9';
    info.textContent = '';
});



/* PROGRAM SEBELUM REFACTORY:
const semut = document.querySelector('.semut');
  semut.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
      if (pilihanComputer === 'semut') {
        gambarComputer.setAttribute('src', 'https://i.ibb.co/g3wfxgM/semut.png');
        gambarComputer.setAttribute('alt', 'Semut');
        gambarComputer.setAttribute('title', 'Semut');
      }
      else if (pilihanComputer === 'manusia') {
        gambarComputer.setAttribute('src', 'https://i.ibb.co/swkWMHt/orang.png');
        gambarComputer.setAttribute('alt', 'Manusia');
        gambarComputer.setAttribute('title', 'Manusia');
      }
      else if (pilihanComputer === 'gajah') {
        gambarComputer.setAttribute('src', 'https://i.ibb.co/x8GqR9f/gajah.png');
        gambarComputer.setAttribute('alt', 'Gajah');
        gambarComputer.setAttribute('title', 'Gajah');
      }

    const pilihanPlayer = this.className;  // mengambil nama class senidri

    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    info.textContent = hasil;
  });


const manusia = document.querySelector('.manusia');
  manusia.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
      if (pilihanComputer === 'semut') {
        gambarComputer.setAttribute('src', 'https://i.ibb.co/g3wfxgM/semut.png');
        gambarComputer.setAttribute('alt', 'Semut');
        gambarComputer.setAttribute('title', 'Semut');
      }
      else if (pilihanComputer === 'manusia') {
        gambarComputer.setAttribute('src', 'https://i.ibb.co/swkWMHt/orang.png');
        gambarComputer.setAttribute('alt', 'Manusia');
        gambarComputer.setAttribute('title', 'Manusia');
      }
      else if (pilihanComputer === 'gajah') {
        gambarComputer.setAttribute('src', 'https://i.ibb.co/x8GqR9f/gajah.png');
        gambarComputer.setAttribute('alt', 'Gajah');
        gambarComputer.setAttribute('title', 'Gajah');
      }

    const pilihanPlayer = this.className;  // mengambil nama class senidri

    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    info.textContent = hasil;
  });


const gajah = document.querySelector('.gajah');
  gajah.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
      if (pilihanComputer === 'semut') {
        gambarComputer.setAttribute('src', 'https://i.ibb.co/g3wfxgM/semut.png');
        gambarComputer.setAttribute('alt', 'Semut');
        gambarComputer.setAttribute('title', 'Semut');
      }
      else if (pilihanComputer === 'manusia') {
        gambarComputer.setAttribute('src', 'https://i.ibb.co/swkWMHt/orang.png');
        gambarComputer.setAttribute('alt', 'Manusia');
        gambarComputer.setAttribute('title', 'Manusia');
      }
      else if (pilihanComputer === 'gajah') {
        gambarComputer.setAttribute('src', 'https://i.ibb.co/x8GqR9f/gajah.png');
        gambarComputer.setAttribute('alt', 'Gajah');
        gambarComputer.setAttribute('title', 'Gajah');
      }

    const pilihanPlayer = this.className;  // mengambil nama class senidri

    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    info.textContent = hasil;
  });
*/
