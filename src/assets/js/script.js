
/*********************************************************************************************** */

// const formationPositions = ['GK', 'ST1', 'ST2', 'LM', 'CM1', 'CM2', 'RM', 'LB', 'CB1', 'CB2', 'RB'];
// const changementSection = document.getElementById('changments');
// let selectedPlayer = null; // To store the currently selected player for changing
// const addPlayerButton = document.getElementById('addplayer');
// const popup = document.getElementById('popup');

// function toggle() {
//   popup.classList.toggle('hidden');
// }
// document.getElementById('player-form').addEventListener('submit', function (event) {
//     event.preventDefault();
  
//     const name = document.getElementById('name').value;
//     const position = document.getElementById('position').value;
//     const rating = document.getElementById('rating').value;
//     const pace = document.getElementById('pace').value;
//     const shooting = document.getElementById('shooting').value;
//     const passing = document.getElementById('passing').value;
//     const dribbling = document.getElementById('dribbling').value;
//     const defending = document.getElementById('defending').value;
//     const physical = document.getElementById('physical').value;
  
//     const clubFile = document.getElementById('club').files[0];
//     const nationalityFile = document.getElementById('nationality').files[0];
//     const imageSrcFile = document.getElementById('image-src').files[0];
  
//     const clubImage = clubFile ? URL.createObjectURL(clubFile) : '';
//     const nationalityImage = nationalityFile ? URL.createObjectURL(nationalityFile) : '';
//     const playerImage = imageSrcFile ? URL.createObjectURL(imageSrcFile) : '';
  
//     const playerCard = document.createElement('div');
//     playerCard.classList.add('player-card', 'w-40', 'h-[300px]', 'rounded', 'p-4', 'text-white', 'm-2');
  
//     playerCard.innerHTML = `
    //   <img onclick="this.parentElement.remove()" src="/FUT-Champions-Web-App-Ultimate-Team/src/assets/img/signs-close-icon.png" alt="" class="w-[1rem]">
    //   <img src="/FUT-Champions-Web-App-Ultimate-Team/src/assets/img/b26753144641409.628faf874d704.png" alt="" class="w-[1rem]">
    //   <div class="wrapper">
    //     <div class="relative w-[100px] h-[180px] bg-cover bg-center bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
    //       <div class="relative flex text-[#e9cc74] px-[0.3rem]">
    //         <div class="absolute py-[0.8rem_0] text-xs uppercase font-light">
    //           <div class="text-[1rem] mt-5">${rating}</div>
    //           <div>${position}</div>
    //           <div class="block">
    //             <img src="${nationalityImage}" alt="${name} nationality" class="w-[1rem] h-[14px] object-contain" />
    //           </div>
    //           <div class="block">
    //             <img src="${clubImage}" alt="Club logo" class="w-[1rem] h-[14px] object-contain" />
    //           </div>
    //         </div>
    //         <div class="w-[70px] h-[80px] mx-auto overflow-hidden">
    //           <img src="${playerImage}" alt="${name}" class="w-full h-full object-contain relative right-[-1rem] bottom-0" />
    //         </div>
    //       </div>
  
    //       <div class="w-full flex justify-around text-[#88e635] text-[0.7rem] font-bold uppercase">
    //         <span class="ml-[0.4rem] text-shadow-lg">${position}</span>
    //       </div>
  
    //       <div class="relative">
    //         <div class="text-[#e9cc74] w-[90%] mx-auto">
    //           <div class="text-center w-[100%] text-[0.6rem] uppercase border-b-2 border-[#e9cc74]/[0.1]">
    //             <span class="block text-shadow-lg">${name}</span>
    //           </div>
    //           <div class="flex justify-center">
    //             <div class="pr-[1.5rem] border-r-2 border-[#e9cc74]/[0.1]">
    //               <div class="flex items-center text-[0.5rem] uppercase">
    //                 <span class="font-bold mr-[0.3rem]">${pace}</span>
    //                 <span class="font-light">PAC</span>
    //               </div>
    //               <div class="flex items-center text-[0.5rem] uppercase">
    //                 <span class="font-bold mr-[0.3rem]">${shooting}</span>
    //                 <span class="font-light">SHO</span>
    //               </div>
    //               <div class="flex items-center text-[0.5rem] uppercase">
    //                 <span class="font-bold mr-[0.3rem]">${passing}</span>
    //                 <span class="font-light">PAS</span>
    //               </div>
    //             </div>
    //             <div>
    //               <div class="flex items-center text-[0.5rem] uppercase">
    //                 <span class="font-bold mr-[0.3rem]">${dribbling}</span>
    //                 <span class="font-light">DRI</span>
    //               </div>
    //               <div class="flex items-center text-[0.5rem] uppercase">
    //                 <span class="font-bold mr-[0.3rem]">${defending}</span>
    //                 <span class="font-light">DEF</span>
    //               </div>
    //               <div class="flex items-center text-[0.5rem] uppercase">
    //                 <span class="font-bold mr-[0.3rem]">${physical}</span>
    //                 <span class="font-light">PHY</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
//     `;
  
//     const positionContainer = document.getElementById(position);
//     if ((positionContainer).innerHTML.includes('<div class="wrapper">')) {
//       alert("player already exists in this position");
//     } else {
//       positionContainer.innerHTML = '';
//       positionContainer.appendChild(playerCard);
//     }
  
//     if (isFormationFilled()) {
//       movePlayerToChangement(playerCard);
//     }
  
//     toggle();
//   });
  
//   function isFormationFilled() {
//     return formationPositions.every(position => document.getElementById(position).children.length > 0);
//   }
  
//   function movePlayerToChangement(playerCard) {
//     if (isFormationFilled()) {
//       changementSection.appendChild(playerCard);
//       alert('Player moved to the substitutions.');
//     }
//   }
  


/************************************************************************************************************************ */



const formationPositions = ['GK', 'ST1', 'ST2', 'LM', 'CM1', 'CM2', 'RM', 'LB', 'CB1', 'CB2', 'RB'];
const changementSection = document.getElementById('changments');
let selectedPlayer = null;
const addPlayerButton = document.getElementById('addplayer');
const popup = document.getElementById('popup');

function toggle() {
  popup.classList.toggle('hidden');
}

document.getElementById('player-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const position = document.getElementById('position').value;
  const rating = document.getElementById('rating').value;
  const pace = document.getElementById('pace').value;
  const shooting = document.getElementById('shooting').value;
  const passing = document.getElementById('passing').value;
  const dribbling = document.getElementById('dribbling').value;
  const defending = document.getElementById('defending').value;
  const physical = document.getElementById('physical').value;

  const clubFile = document.getElementById('club').files[0];
  const nationalityFile = document.getElementById('nationality').files[0];
  const imageSrcFile = document.getElementById('image-src').files[0];

  const clubImage = clubFile ? URL.createObjectURL(clubFile) : '';
  const nationalityImage = nationalityFile ? URL.createObjectURL(nationalityFile) : '';
  const playerImage = imageSrcFile ? URL.createObjectURL(imageSrcFile) : '';

  const playerCard = document.createElement('div');
  playerCard.classList.add('player-card', 'w-40', 'h-[300px]', 'rounded', 'p-4', 'text-white', 'm-2');
  playerCard.dataset.position = position;

  playerCard.innerHTML = `
    <img onclick="this.parentElement.remove()" src="/FUT-Champions-Web-App-Ultimate-Team/src/assets/img/signs-close-icon.png" alt="" class="w-[1rem]">
    <div class="wrapper">
      <div class="relative w-[100px] h-[180px] bg-cover bg-center bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
        <div class="relative flex text-[#e9cc74] px-[0.3rem]">
          <div class="absolute py-[0.8rem_0] text-xs uppercase font-light">
            <div class="text-[1rem] mt-5">${rating}</div>
            <div>${position}</div>
            <div class="block">
              <img src="${nationalityImage}" alt="${name} nationality" class="w-[1rem] h-[14px] object-contain" />
            </div>
            <div class="block">
              <img src="${clubImage}" alt="Club logo" class="w-[1rem] h-[14px] object-contain" />
            </div>
          </div>
          <div class="w-[70px] h-[80px] mx-auto overflow-hidden">
            <img src="${playerImage}" alt="${name}" class="w-full h-full object-contain relative right-[-1rem] bottom-0" />
          </div>
        </div>

        <div class="w-full flex justify-around text-[#88e635] text-[0.7rem] font-bold uppercase">
          <span class="ml-[0.4rem] text-shadow-lg">${position}</span>
        </div>

        <div class="relative">
          <div class="text-[#e9cc74] w-[90%] mx-auto">
            <div class="text-center w-[100%] text-[0.6rem] uppercase border-b-2 border-[#e9cc74]/[0.1]">
              <span class="block text-shadow-lg">${name}</span>
            </div>
            <div class="flex justify-center">
              <div class="pr-[1.5rem] border-r-2 border-[#e9cc74]/[0.1]">
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${pace}</span>
                  <span class="font-light">PAC</span>
                </div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${shooting}</span>
                  <span class="font-light">SHO</span>
                </div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${passing}</span>
                  <span class="font-light">PAS</span>
                </div>
              </div>
              <div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${dribbling}</span>
                  <span class="font-light">DRI</span>
                </div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${defending}</span>
                  <span class="font-light">DEF</span>
                </div>
                <div class="flex items-center text-[0.5rem] uppercase">
                  <span class="font-bold mr-[0.3rem]">${physical}</span>
                  <span class="font-light">PHY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const positionContainer = document.getElementById(position);
  if (positionContainer.innerHTML.includes('<div class="wrapper">')) {
    alert("Player already exists in this position");
  } else {
    positionContainer.innerHTML = '';
    positionContainer.appendChild(playerCard);
  }

  if (isFormationFilled()) {
    movePlayerToChangement(playerCard);
  }

  toggle();

  addClickListener(playerCard);
});

function isFormationFilled() {
  return formationPositions.every(position => document.getElementById(position).children.length > 0);
}

function movePlayerToChangement(playerCard) {
  changementSection.appendChild(playerCard);
  alert('Player moved to substitutions.');

  addDoubleClickListener(playerCard);
}

function movePlayerToFormation(playerCard) {
  const position = playerCard.dataset.position;
  const positionContainer = document.getElementById(position);

  if (positionContainer.children.length === 0) {
    positionContainer.appendChild(playerCard);
    alert('Player moved back to formation.');
  }

  addDoubleClickListener(playerCard);
}

function addDoubleClickListener(playerCard) {
  playerCard.addEventListener('dblclick', function () {
    const positionContainer = document.getElementById(playerCard.dataset.position);

    if (changementSection.contains(playerCard)) {
      movePlayerToFormation(playerCard);
    } 
    else if (positionContainer.contains(playerCard)) {
      movePlayerToChangement(playerCard);
    }
  });
}


function addClickListener(playerCard) {
    playerCard.addEventListener('click', function () {
      const positionContainer = document.getElementById(playerCard.dataset.position);
  
      if (changementSection.contains(playerCard)) {
        movePlayerToFormation(playerCard);
      } 
      else if (positionContainer.contains(playerCard)) {
        movePlayerToChangement(playerCard);
      }
    });
  }

  