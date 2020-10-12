setTimeout(() => {
  if (document.querySelector('#crucible-streamer-addons-css')) {
    document.querySelector('#crucible-streamer-addons-css').remove();
  }

  const style = document.createElement('style');
  style.type = 'text/css';
  const cssOverrides = `
    .panel {
      box-shadow: none;
    }

    .navbar-sm {
      width: 143%;
      transform-origin: top left;
      transform: scale(0.7);
    }

    .main-window {
      user-select: none;
    }

    .chat-status .state {
      border: none;
    }

    .gamechat {
      overflow-y: hidden;
      position: fixed;
      right: 5px;
      width: 310px;
      top: 50px;
      height: 500px;
    }
    .gamechat input {
      font-size: 12px;
      height: 22px;
    }
    .gamechat .messages::-webkit-scrollbar {
      display: none;
    }
    .gamechat input {
      border-radius: 0;
    }




    .prompt-area {
      position: fixed;
      left: 0 !important;
      z-index: 9999;
      bottom: 60px !important;
    }

    .prompt-area .panel {
      background: black;
    }


    .game-board {
      top: 25px;
    }

    .stat-image.amber {
      transform: scale(1.3);
      margin: 10px;
    }

    .our-side .keys {
      transform: scale(1.2);
      transform-origin: left;
      position: relative;
      top: 0px;
      left: -5px;
    }

    .player-stats {
      border: none !important;
      background: none;
      height: 60px;
    }

    .state {
      border: none !important;
    }

    .play-area .drop-target {
      margin: 0px;
    }
    .player-home-row {
      overflow: unset;
    }
    .player-home-row.our-side {
      margin-top: 0px;
      margin-bottom: 17px;
    }
    .player-home-row.our-side .player-home-row-container > .drop-target:nth-child(2) {
      transform: scale(1.4);
      transform-origin: left;
      position: absolute;
      left: 275px;
      bottom: 75px;
    }
    .player-home-row.our-side .player-home-row-container > .drop-target:nth-child(3) {
      margin-left: 685px;
      margin-top: -20px;
    }
    .player-home-row.our-side .player-home-row-container .identity {
      margin-top: -20px;
    }
    .player-home-row.our-side .player-home-row-container > .drop-target:nth-child(4) {
      margin-top: -20px;
    }
    .player-home-row.our-side .player-home-row-container > .drop-target:nth-child(5) {
      margin-top: -20px;
    }
    .player-home-row.our-side .player-home-row-container > .drop-target:nth-child(6) {
      margin-top: -20px;
    }
    .player-home-row.our-side .player-home-row-container > .drop-target:nth-child(7) {
      margin-top: -20px;
    }
    .player-home-row.our-side .player-home-row-container .overlay {
      transform: none;
    }
    .player-home-row.our-side .player-home-row-container {
      margin-left: 220px;
    }






    .wrapper {
      overflow-y: hidden;
    }

    .gray-scale-filter {
      filter: grayscale(1);
    }

    .menu-pane-source {
      background: black;
    }

    .phase-indicator.main {
      background: rgb(255, 35, 1);
    }

    .board-middle {
      margin: 0;
    }

    .play-area {
      padding-left: 0px;
    }

    .play-area .player-board {
      justify-content: space-evenly;
      margin-left: 50px;
      border: none;
    }

    .messages {
      overflow-y: hidden;
    }

    .board-middle {
      margin-left: 5px;
      overflow: hidden;
    }

    .card.horizontal {
      margin: 0;
    }

    .player-board .game-card.large.vertical {
      height: 87px !important;
    }

    .player-board .card-wrapper {
      top: 0 !important;
    }

    .card-wrapper .menu {
      transform: scale(0.5);
      transform-origin: top left;
      height: 200px;
      overflow-y: scroll;
    }

    .player-home-row-container:first-of-type .panel.card-pile.identity {
      height: 128px;
    }

    .card-large .card-name {
      display: none;
    }

    .card-large .card-alt {
      display: none;
    }

    .upgrade {
      margin-top: -106px !important;
    }

    .player-home-row:nth-child(1) {
      margin-top: -60px;
    }

    .player-home-row:nth-child(1) .hand {
      overflow: hidden;
    }

    .player-home-row:nth-child(1) .hand .card-wrapper {
      margin-top: 55px;
    }

    .player-home-row:nth-child(1) .card-pile {
      overflow: hidden;
    }

    .player-home-row:nth-child(1) .card-pile .card-wrapper {
      margin-top: 55px;
    }

    .player-home-row:nth-child(1) .discard .panel .card-wrapper {
      margin-top: 0px;
    }

    .player-home-row:nth-child(1) .keys img:nth-child(1) {
      margin-top: 60px;
    }

    .player-stats-row:nth-child(1) {
      position: absolute;
      top: 75px;
      left: 60px;
    }

    .player-stats-row:nth-child(1) .player-avatar {
      display: none;
    }

    .player-home-row:nth-child(1) .panel-header {
      top: unset;
      bottom: 0;
    }

    .player-board:nth-child(1) .card-row:nth-child(1) {
      width: calc(100% - 200px);
      margin-top: -50px;
    }

    .player-board:nth-child(1) .card-row:nth-child(2) {
      width: calc(100% - 650px);
      transform: scale(1.3);
      transform-origin: left;
    }

    .player-board:nth-child(2) .card-row:nth-child(1) {
      width: calc(100% - 650px);
      transform: scale(1.3);
      transform-origin: left;
    }

    .player-board:nth-child(2) .card-row:nth-child(2) {
      width: calc(100% - 200px);
    }
    
    .card-row .card.large.vertical {
      height: 87px;
    }
  `;

  const node = document.createTextNode(cssOverrides);
  style.appendChild(node);

  setTimeout(() => {
    document.querySelector('.messages').style.overflowY = 'scroll';
  }, 1000);

  document.head.append(style);
  document.head.children[document.head.children.length - 1].setAttribute('id', 'crucible-streamer-addons-css');
}, 1000);
