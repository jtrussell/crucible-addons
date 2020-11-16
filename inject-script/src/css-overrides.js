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
      height: 700px;
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
      bottom: 45px !important;
    }

    .card {
      box-shadow: none !important;
    }

    .card-row.creatures {
      margin: 0 !important;
    }

    .player-board {
      border-bottom: none !important;
    }

    .bg-dark {
      background: #000 !important;
    }

    .player-home-row.our-side .player-home-row-container .overlay {
      transform: none;
    }
    .player-home-row.our-side .player-home-row-container {
      margin-left: 220px;
    }

    .menu-pane-source {
      background: black;
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
