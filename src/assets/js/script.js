
// document.addEventListener('DOMContentLoaded', async function() {

//     const url = '/FUT-Champions-Web-App-Ultimate-Team/src/assets/js/players.json';

//     let response = await fetch(url);
//     let data = await response.json();

//     const players = data.players; 

//     players.forEach(player => {

//         const playerCard = document.createElement('div');
//         playerCard.innerHTML = `
//             <div class="relative w-[100px] h-[180px] bg-cover bg-center bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
//               <div class="relative flex text-[#e9cc74] px-[0.3rem]">
//                   <div class="absolute py-[0.8rem_0] text-xs uppercase font-light">
//                       <div class="text-[1rem] mt-5">${player.rating}</div>
//                       <div>${player.position}</div>
//                       <div class="block">
//                           <img src="${player.flag}" alt="${player.nationality}" class="w-[1rem] h-[14px] object-contain" />
//                       </div>
//                       <div class="block">
//                           <img src="${player.logo}" alt="${player.club}" class="w-[1rem] h-[14px] object-contain" />
//                       </div>
//                   </div>
//                   <div class="w-[70px] h-[80px] mx-auto overflow-hidden">
//                       <img src="${player.photo}" alt="${player.name}" class="w-full h-full object-contain relative right-[-1rem] bottom-0" />
//                   </div>
//               </div>

//               <div class="w-full flex justify-around text-[#88e635] text-[0.7rem] font-bold uppercase">
//                   <span class="ml-[0.4rem] text-shadow-lg">${player.position}</span>
//                   <span class="ml-[0.4rem] text-shadow-lg">${player.position}</span>
//               </div>

//               <div class="relative">
//                   <div class="text-[#e9cc74] w-[90%] mx-auto">
//                       <div class="text-center w-[100%] text-[0.6rem] uppercase border-b-2 border-[#e9cc74]/[0.1]">
//                           <span class="block text-shadow-lg">${player.name}</span>
//                       </div>
//                       <div class="flex justify-center">
//                           <div class="pr-[1.5rem] border-r-2 border-[#e9cc74]/[0.1]">
//                               <div class="flex items-center text-[0.5rem] uppercase">
//                                   <span class="font-bold mr-[0.3rem]">${player.pace}</span>
//                                   <span class="font-light">PAC</span>
//                               </div>
//                               <div class="flex items-center text-[0.5rem] uppercase">
//                                   <span class="font-bold mr-[0.3rem]">${player.shooting}</span>
//                                   <span class="font-light">SHO</span>
//                               </div>
//                               <div class="flex items-center text-[0.5rem] uppercase">
//                                   <span class="font-bold mr-[0.3rem]">${player.passing}</span>
//                                   <span class="font-light">PAS</span>
//                               </div>
//                           </div>
//                           <div>
//                               <div class="flex items-center text-[0.5rem] uppercase">
//                                   <span class="font-bold mr-[0.3rem]">${player.dribbling}</span>
//                                   <span class="font-light">DRI</span>
//                               </div>
//                               <div class="flex items-center text-[0.5rem] uppercase">
//                                   <span class="font-bold mr-[0.3rem]">${player.defending}</span>
//                                   <span class="font-light">DEF</span>
//                               </div>
//                               <div class="flex items-center text-[0.5rem] uppercase">
//                                   <span class="font-bold mr-[0.3rem]">${player.physical}</span>
//                                   <span class="font-light">PHY</span>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>
//         `;

//     document.getElementById('players-container').appendChild(playerCard);
//     });

// });









// const formationPositions = ['GK', 'ST1', 'ST2', 'LM', 'CM1', 'CM2', 'RM', 'LB', 'CB1', 'CB2', 'RB'];
// const changementSection = document.getElementById('changments');
// let selectedPlayer = null; // To store the currently selected player for changing

  


// const addPlayerButton = document.getElementById('addplayer');
// const popup = document.getElementById('popup');

// function toggle() {
//   popup.classList.toggle('hidden');
// }
// document.getElementById('player-form').addEventListener('submit', function (event) {
//   event.preventDefault();

//   const name = document.getElementById('name').value;
//   const position = document.getElementById('position').value;
//   const rating = document.getElementById('rating').value;
//   const pace = document.getElementById('pace').value;
//   const shooting = document.getElementById('shooting').value;
//   const passing = document.getElementById('passing').value;
//   const dribbling = document.getElementById('dribbling').value;
//   const defending = document.getElementById('defending').value;
//   const physical = document.getElementById('physical').value;

//   const clubFile = document.getElementById('club').files[0];
//   const nationalityFile = document.getElementById('nationality').files[0];
//   const imageSrcFile = document.getElementById('image-src').files[0];

//   const clubImage = clubFile ? URL.createObjectURL(clubFile) : '';
//   const nationalityImage = nationalityFile ? URL.createObjectURL(nationalityFile) : '';
//   const playerImage = imageSrcFile ? URL.createObjectURL(imageSrcFile) : '';

//   const playerCard = document.createElement('div');
//   playerCard.classList.add('player-card', 'w-40', 'h-[300px]', 'rounded', 'p-4', 'text-white', 'm-2');

//   playerCard.innerHTML = `
// <img onclick="this.parentElement.remove()" src="/FUT-Champions-Web-App-Ultimate-Team/src/assets/img/signs-close-icon.png" alt="" class="w-[1rem]">
//            <div class="wrapper">
//             <div class="relative w-[100px] h-[180px] bg-cover bg-center bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
//                 <div class="relative flex text-[#e9cc74] px-[0.3rem]">
//                     <div class="absolute py-[0.8rem_0] text-xs uppercase font-light">
//                         <div class="text-[1rem] mt-5">${rating}</div>
//                         <div>${position}</div>
//                         <div class="block">
//                             <img src="${nationalityImage}" alt="${name} nationality" class="w-[1rem] h-[14px] object-contain" />
//                         </div>
//                         <div class="block">
//                             <img src="${clubImage}" alt="Club logo" class="w-[1rem] h-[14px] object-contain" />
//                         </div>
//                     </div>
//                     <div class="w-[70px] h-[80px] mx-auto overflow-hidden">
//                         <img src="${playerImage}" alt="${name}" class="w-full h-full object-contain relative right-[-1rem] bottom-0" />
//                     </div>
//                 </div>

//                 <div class="w-full flex justify-around text-[#88e635] text-[0.7rem] font-bold uppercase">
//                     <span class="ml-[0.4rem] text-shadow-lg">${position}</span>
//                 </div>

//                 <div class="relative">
//                     <div class="text-[#e9cc74] w-[90%] mx-auto">
//                         <div class="text-center w-[100%] text-[0.6rem] uppercase border-b-2 border-[#e9cc74]/[0.1]">
//                             <span class="block text-shadow-lg">${name}</span>
//                         </div>
//                         <div class="flex justify-center">
//                             <div class="pr-[1.5rem] border-r-2 border-[#e9cc74]/[0.1]">
//                                 <div class="flex items-center text-[0.5rem] uppercase">
//                                     <span class="font-bold mr-[0.3rem]">${pace}</span>
//                                     <span class="font-light">PAC</span>
//                                 </div>
//                                 <div class="flex items-center text-[0.5rem] uppercase">
//                                     <span class="font-bold mr-[0.3rem]">${shooting}</span>
//                                     <span class="font-light">SHO</span>
//                                 </div>
//                                 <div class="flex items-center text-[0.5rem] uppercase">
//                                     <span class="font-bold mr-[0.3rem]">${passing}</span>
//                                     <span class="font-light">PAS</span>
//                                 </div>
//                             </div>
//                             <div>
//                                 <div class="flex items-center text-[0.5rem] uppercase">
//                                     <span class="font-bold mr-[0.3rem]">${dribbling}</span>
//                                     <span class="font-light">DRI</span>
//                                 </div>
//                                 <div class="flex items-center text-[0.5rem] uppercase">
//                                     <span class="font-bold mr-[0.3rem]">${defending}</span>
//                                     <span class="font-light">DEF</span>
//                                 </div>
//                                 <div class="flex items-center text-[0.5rem] uppercase">
//                                     <span class="font-bold mr-[0.3rem]">${physical}</span>
//                                     <span class="font-light">PHY</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//   `;

//   const positionContainer = document.getElementById(position);
//   if ((positionContainer).innerHTML.includes('<div class="wrapper">')){
//     alert("player exist");
//   }
//    else {

//     positionContainer.innerHTML = '';
//     positionContainer.appendChild(playerCard);
//   }
//   if (isFormationFilled()) {
//     movePlayerToChangement(playerCard);
// }
//   toggle();

// });




// function selectPlayer(playerCard) {
//     if (selectedPlayer) {
//         alert("You already have a player selected for change.");
//         return;
//     }
//     selectedPlayer = playerCard;
//     alert('Player selected for change. Please select a substitution.');
// }

// function changePlayer(substitutionCard) {
//     if (!selectedPlayer) {
//         alert("No player selected for change.");
//         return;
//     }

//     const selectedPosition = selectedPlayer.querySelector('.ml-[0.4rem]').textContent;
//     const substitutionPosition = substitutionCard.querySelector('.ml-[0.4rem]').textContent;

//     // Swap players
//     const tempCard = selectedPlayer.cloneNode(true);
//     selectedPlayer.replaceWith(substitutionCard.cloneNode(true));
//     substitutionCard.replaceWith(tempCard);

//     alert(`Changed ${selectedPosition} with ${substitutionPosition}.`);
//     selectedPlayer = null;
// }

// function removePlayer(playerCard) {
//     const parentContainer = playerCard.closest('.bg-[url("/FUT-Champions-Web-App-Ultimate-Team/src/assets/img/stadium_background.webp")]');
//     if (parentContainer) {
//         parentContainer.removeChild(playerCard);
//         alert('Player removed from the formation.');
//     }
//     if (isFormationFilled()) {
//         alert('Formation is full!');
//     }
// }

// function isFormationFilled() {
//     return formationPositions.every(position => document.getElementById(position).children.length > 0);
// }

// function movePlayerToChangement(playerCard) {
//     changementSection.appendChild(playerCard);
//     alert('Player moved to the substitutions.');
// }

















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



// const formationPositions = ['GK', 'ST1', 'ST2', 'LM', 'CM1', 'CM2', 'RM', 'LB', 'CB1', 'CB2', 'RB'];
// const changementSection = document.getElementById('changments');
// let selectedPlayer = null; 
// const addPlayerButton = document.getElementById('addplayer');
// const popup = document.getElementById('popup');

// function toggle() {
//   popup.classList.toggle('hidden');
// }

// document.getElementById('player-form').addEventListener('submit', function (event) {
//   event.preventDefault();

//   const name = document.getElementById('name').value;
//   const position = document.getElementById('position').value;
//   const rating = document.getElementById('rating').value;
//   const pace = document.getElementById('pace').value;
//   const shooting = document.getElementById('shooting').value;
//   const passing = document.getElementById('passing').value;
//   const dribbling = document.getElementById('dribbling').value;
//   const defending = document.getElementById('defending').value;
//   const physical = document.getElementById('physical').value;

//   const clubFile = document.getElementById('club').files[0];
//   const nationalityFile = document.getElementById('nationality').files[0];
//   const imageSrcFile = document.getElementById('image-src').files[0];

//   const clubImage = clubFile ? URL.createObjectURL(clubFile) : '';
//   const nationalityImage = nationalityFile ? URL.createObjectURL(nationalityFile) : '';
//   const playerImage = imageSrcFile ? URL.createObjectURL(imageSrcFile) : '';

//   const playerCard = document.createElement('div');
//   playerCard.classList.add('player-card', 'w-40', 'h-[300px]', 'rounded', 'p-4', 'text-white', 'm-2');
//   playerCard.dataset.position = position;

//   playerCard.innerHTML = `
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
//   `;

//   const positionContainer = document.getElementById(position);
//   if ((positionContainer).innerHTML.includes('<div class="wrapper">')) {
//     alert("Player already exists in this position");
//   } else {
//     positionContainer.innerHTML = '';
//     positionContainer.appendChild(playerCard);
//   }

//   // Move player to substitutions right away
//   movePlayerToChangement(playerCard);

//   toggle();
// });

// // Move player to substitutions
// function movePlayerToChangement(playerCard) {
//   changementSection.appendChild(playerCard);
//   alert('Player moved to substitutions.');

//   // Double-click to move back to formation
//   playerCard.addEventListener('dblclick', function () {
//     movePlayerToFormation(playerCard);
//   });
// }

// // Move player back to formation
// function movePlayerToFormation(playerCard) {
//   const position = playerCard.dataset.position;
//   const positionContainer = document.getElementById(position);
//   positionContainer.innerHTML = '';
//   positionContainer.appendChild(playerCard);
//   alert('Player moved back to formation.');

//   // Double-click to move to substitutions
//   playerCard.addEventListener('dblclick', function () {
//     movePlayerToChangement(playerCard);
//   });
// }













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
      <img src="/FUT-Champions-Web-App-Ultimate-Team/src/assets/img/b26753144641409.628faf874d704.png" alt="" class="w-[1rem]">
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
  if ((positionContainer).innerHTML.includes('<div class="wrapper">')) {
    alert("Player already exists in this position");
  } else {
    positionContainer.innerHTML = '';
    positionContainer.appendChild(playerCard);
  }

  // Check if formation is filled, if yes, allow moving to substitutions
  if (isFormationFilled()) {
    movePlayerToChangement(playerCard);
  }

  toggle();
});

// Function to check if formation is completely filled
function isFormationFilled() {
  return formationPositions.every(position => document.getElementById(position).children.length > 0);
}

// Move player to substitutions section
function movePlayerToChangement(playerCard) {
  changementSection.appendChild(playerCard);
  alert('Player moved to substitutions.');

  // Add double-click event to move back to formation
  playerCard.addEventListener('dblclick', function () {
    movePlayerToFormation(playerCard);
  });
}

// Move player back to formation section
function movePlayerToFormation(playerCard) {
  const position = playerCard.dataset.position;
  const positionContainer = document.getElementById(position);
  positionContainer.innerHTML = '';
  positionContainer.appendChild(playerCard);
  alert('Player moved back to formation.');

  // Add double-click event to move back to substitutions
  playerCard.addEventListener('dblclick', function () {
    movePlayerToChangement(playerCard);
  });
}
