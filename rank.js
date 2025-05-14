
document.addEventListener("DOMContentLoaded", () => {
  const gameButton = document.getElementById("game-selector");
  const dropdown = document.getElementById("game-dropdown");
  const selectedGame = document.getElementById("selected-game");
  const teamBody = document.getElementById("team-body");
  const playerBody = document.getElementById("player-body");

  const games = {
    "PUBG": {
      teams: [
        [1, "KyrgyzHunters", 20, 15, 5, "Player1, Player2", 300],
        [2, "NomadForce", 18, 10, 3, "Player3, Player4", 250],
        [3, "Norce", 18, 12, 1, "Player3, Player4", 200]
      ],
      players: [
        [1, "SniperKG", "KyrgyzHunters", "6.3", 3, 150],
        [2, "ShadowWolf", "NomadForce", "5.1", 2, 170]
      ]
    },

    "Mobile Legends": {
      teams: [
        [1, "KyrgyzHunters", 20, 15, 5, "Player1, Player2", 300]
      ], 
      players: [
        [1, "SniperKG", "KyrgyzHunters", "6.3", 3, 150]
      ]
    },
    
    "Honor of Kings": {
      teams: [
        [1, "KyrgyzHunters", 20, 17, 3, "Player, Player2", 300]
      ], 
      players: [
        [1, "SniperKG", "KyrgyzHunters", "6.3", 2, 150]
      ]
    },

    "Clash Royale": {
      teams: [
        [1, "KyrgyzHunters",19, 15, 8, "Player1, Player2", 300]
      ], 
      players: [
        [1, "SniperKG", "KyrgyzHunters", "3", 3, 120]
      ]
    },

    "Standoff": {
      teams: [
        [1, "KyrgyzHunters", 20, 11, 3, "Player1, Player2", 190]
      ], 
      players: [
        [1, "SniperKG", "KyrgyzHunters", "6.3", 3, 150]
      ]
    },
    "Minecraft": {
      teams: [
        [1, "KyrgyzHunters", 20, 20, 7, "Player1, Player2", 500]
      ], 
      players: [
        [1, "SniperKG", "KyrgyzHunters", "8", 2, 330]
      ]
    },
    "Call of Duty": {
      teams: [
        [1, "KyrgyzHunters", 20, 15, 5, "Player1, Player2", 300]
      ], 
      players: [
        [1, "SniperKG", "KyrgyzHunters", "6.3", 3, 150]
      ]
}
  
  };

  gameButton.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
  });

  dropdown.addEventListener("click", (e) => {
    const game = e.target.getAttribute("data-game");
    if (game) {
      selectedGame.textContent = game;
      dropdown.classList.add("hidden");
      updateTables(game);
    }
  });

  function updateTables(game) {
    teamBody.innerHTML = "";
    playerBody.innerHTML = "";

    games[game]?.teams?.forEach(row => {
      const tr = document.createElement("tr");
      row.forEach(cell => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      });
      teamBody.appendChild(tr);
    });

    games[game]?.players?.forEach(row => {
      const tr = document.createElement("tr");
      row.forEach(cell => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      });
      playerBody.appendChild(tr);
    });
  }

  // Запуск по умолчанию
  updateTables("PUBG");
});

