const React = require('react');
const confetti = require('./confetti');
const chatHighlighter = require('./chat-highlighter');

(function () {
  require('./css-overrides');
  require('./chat-drag')();

  try {
    const el = document.querySelector('.gravatar');
    const key = Object.keys(el).find(k => /__reactInternalInstance/.test(k));
    let target = el[key];

    let store;
    while (target.return) {
      if (target.memoizedProps && target.memoizedProps.store) {
        store = target.memoizedProps.store;
        break;
      }
      target = target.return;
    }
    
    const getSocket = () => {
      return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          try {
            const state = store.getState();
            window.store = store;
            if (state.games && state.games.socket) {
              resolve(state.games.socket);
              clearInterval(interval);
              console.log('Connected to socket');
            }
          } catch (e) {}
        }, 500);
      });
    };
    const user = document.querySelector('.gravatar').parentElement.innerText;

    let socketRef;
    let socketEvents = [];
    let socketEventAt = 0;

    const shutdown = () => {
      if (document.querySelector('#crucible-streamer-addons')) document.querySelector('#crucible-streamer-addons').remove();
      if (document.querySelector('#crucible-streamer-addons-css')) document.querySelector('#crucible-streamer-addons-css').remove();

      socketRef.off('gamestate', handleSocketEvent);
    };


    // TODO The visual que code should read the chat and not from the socket

    const userHand = document.querySelectorAll('.player-home-row-container')[1];
    const userBoard = document.querySelectorAll('.player-board')[1];

    const showNoFightingAlert = () => {
      userBoard.style.borderTop = '5px dashed #cc3fff';
      userBoard.style.marginTop = '-10px';
      userBoard.style.paddingTop = '5px';
    };

    const handleSocketEvent = (game) => {
      chatHighlighter.update();

      const messages = window.store.getState().lobby.currentGame.messages;

      if (messages) {
        const newEvents = messages.slice(socketEventAt);
        socketEventAt = messages.length;

        if (newEvents.length) {
          socketEvents = socketEvents.concat(newEvents);

          newEvents.forEach((event) => {
            confetti(event, user);
          });
        }
      }
    };

    getSocket()
      .then((socket) => {
        socketRef = socket;
        socket.on('gamestate', handleSocketEvent);

        if (document.querySelector('#crucible-streamer-addons')) document.querySelector('#crucible-streamer-addons').remove();
        if (document.querySelector('#crucible-streamer-addons-css')) document.querySelector('#crucible-streamer-addons-css').remove();

        const shutdownInterval = setInterval(() => {
          if (!isInGame()) {
            shutdown();
            clearInterval(shutdownInterval);
          }
        }, 500);
      });

    const isInGame = () => !!document.querySelector('.player-home-row-container');
  } catch (e) {
    console.error('Crucible Addons error:');
    console.error(e);
  }
}());
