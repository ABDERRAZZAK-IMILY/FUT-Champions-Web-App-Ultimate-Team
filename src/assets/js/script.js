
const addpalyer = document.getElementById('addplayer');

const popup = document.getElementById('popup');

function toggle() {
    popup.classList.toggle('hidden');
}






document.getElementById('player-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const rating = document.getElementById('rating').value;
    const club = document.getElementById('club').value;
    const imageSrc = document.getElementById('image-src').value;
    const league = document.getElementById('league').value;
    const nationality = document.getElementById('nationality').value;
    const pace = document.getElementById('pace').value;
    const shooting = document.getElementById('shooting').value;
    const passing = document.getElementById('passing').value;
    const dribbling = document.getElementById('dribbling').value;
    const defending = document.getElementById('defending').value;
    const physical = document.getElementById('physical').value;

    const playerCard = document.createElement('div');
    playerCard.innerHTML = `
<div class="wrapper">
  <!-- *** fut-player-card ***-->
  <div class="fut-player-card">
    <!-- Player Card Top-->
    <div class="player-card-top">
      <div class="player-master-info">
        <div class="player-rating"><span>${rating}</span></div>
        <div class="player-position"><span>${position}</span></div>
        <div class="player-nation"><img src="${nationality}" alt="Argentina" draggable="false"/></div>
        <div class="player-club"><img src="${league}" alt="Barcelona" draggable="false"/></div>
      </div>
      <div class="player-picture"><img src="${imageSrc}" alt="${name}" draggable="false"/>
        <div class="player-extra"><span>${position}</span></div>
      </div>
    </div>
    <!-- Player Card Bottom-->
    <div class="player-card-bottom">
      <div class="player-info">
        <!-- Player Name-->
        <div class="player-name"><span>${name}</span></div>
        <!-- Player Features-->
        <div class="player-features">
          <div class="player-features-col"><span>
              <div class="player-feature-value">${pace}</div>
              <div class="player-feature-title">PAC</div></span><span>
              <div class="player-feature-value">${shooting}</div>
              <div class="player-feature-title">SHO</div></span><span>
              <div class="player-feature-value">${passing}</div>
              <div class="player-feature-title">PAS</div></span></div>
          <div class="player-features-col"><span>
              <div class="player-feature-value">${dribbling}</div>
              <div class="player-feature-title">DRI</div></span><span>
              <div class="player-feature-value">${defending}</div>
              <div class="player-feature-title">DEF</div></span><span>
              <div class="player-feature-value">${physical}</div>
              <div class="player-feature-title">PHY</div></span></div>
        </div>
      </div>
    </div>
  </div>
</div>
    `;

    document.getElementById('players-container').appendChild(playerCard);
});



document.addEventListener('DOMContentLoaded', async function() {

    const url = '/FUT-Champions-Web-App-Ultimate-Team/src/assets/js/players.json';

    let response = await fetch(url);
    let data = await response.json();

    const players = data.players; 

    players.forEach(player => {

        const playerCard = document.createElement('div');
        playerCard.innerHTML = `
            <div class="wrapper">
                <!-- *** fut-player-card ***-->
                <div class="fut-player-card">
                    <!-- Player Card Top-->
                    <div class="player-card-top">
                        <div class="player-master-info">
                            <div class="player-rating"><span>${player.rating}</span></div>
                            <div class="player-position"><span>${player.position}</span></div>
                            <div class="player-nation"><img src="${player.flag}" alt="${player.nationality}" draggable="false"/></div>
                            <div class="player-club"><img src="${player.logo}" alt="${player.club}" draggable="false"/></div>
                        </div>
                        <div class="player-picture">
                            <img src="${player.photo}" alt="${player.name}" draggable="false"/>
                            <div class="player-extra"><span>${player.position}</span></div>
                        </div>
                    </div>
                    <!-- Player Card Bottom-->
                    <div class="player-card-bottom">
                        <div class="player-info">
                            <!-- Player Name-->
                            <div class="player-name"><span>${player.name}</span></div>
                            <!-- Player Features-->
                            <div class="player-features">
                                <div class="player-features-col"><span>
                                    <div class="player-feature-value">${player.pace}</div>
                                    <div class="player-feature-title">PAC</div></span><span>
                                    <div class="player-feature-value">${player.shooting}</div>
                                    <div class="player-feature-title">SHO</div></span><span>
                                    <div class="player-feature-value">${player.passing}</div>
                                    <div class="player-feature-title">PAS</div></span></div>
                                <div class="player-features-col"><span>
                                    <div class="player-feature-value">${player.dribbling}</div>
                                    <div class="player-feature-title">DRI</div></span><span>
                                    <div class="player-feature-value">${player.defending}</div>
                                    <div class="player-feature-title">DEF</div></span><span>
                                    <div class="player-feature-value">${player.physical}</div>
                                    <div class="player-feature-title">PHY</div></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('players-container').appendChild(playerCard);
    });

});
