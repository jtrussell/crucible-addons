const main = (response) => {
  waitForDecks()
  .then(getDecks)
  .then(decks => {
    const user = document.querySelector('.gravatar').parentElement.innerText;

    const topUser = document.querySelector('b').innerText;
    if (decks[0].owner !== topUser) {
      decks = [
        decks[1],
        decks[0]
      ];
    }

    decks.forEach((deck, i) => {
      const container = document.querySelectorAll('.panel.player-stats')[i];
      const deckLink = document.createElement('div');
      deckLink.style.margin = '0 5px 3px 5px';
      deckLink.classList.add('crucible-addons');
      deckLink.innerHTML = `
        <a
          style='text-decoration: underline !important;'
          href='${'https://decksofkeyforge.com/decks/' + deck.id}' target='_blank'
        >
          Deck
        </a>
      `;
      container.insertBefore(deckLink, container.children[1]);
    });
  })

  waitForGameStart()
  .then(() => {
    document.querySelectorAll('.player-stats-row b');
    const script = document.createElement('script');
    script.src = chrome.extension.getURL('inject.js');
    script.setAttribute('data-src', 'crucible-addons');
    (document.head || document.documentElement).appendChild(script);

    const interval = setInterval(() => {
      if (!isInGame()) {
        clearInterval(interval);
        clear();
        main();
      }
    }, 500);
  })
}

const isInGame = () => {
  return !!document.querySelector('.player-home-row-container');
}

const waitForGameStart = () => {
  const inGame = isInGame();
  if (inGame) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
    return promise;
  } else {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        waitForGameStart().then(resolve);
      }, 500);
    });
    return promise;
  }
}

const clear = () => {
  document.querySelectorAll('.crucible-addons')
    .forEach(el => el.remove());
  const script = document.querySelector('script[data-src="crucible-addons"]');
  if (script)
    script.remove();
}

const waitForDecks = () => {
  const deckAnchorElements = document.querySelectorAll('.gamechat .message a');
  if (deckAnchorElements.length === 2) {
    return Promise.resolve();
  } else {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        waitForDecks().then(resolve);
      }, 500);
    });
    return promise;
  }
}

const getDecks = () => {
  const deckAnchorElements = document.querySelectorAll('.gamechat .message a');
  const playerA = deckAnchorElements[0].parentElement.querySelector('span').innerText;

  const deckA = {
    name: deckAnchorElements[0].innerText,
    url: deckAnchorElements[0].getAttribute('href'),
    id: deckAnchorElements[0].getAttribute('href').replace('https://www.keyforgegame.com/deck-details/', ''),
    owner: playerA,
  };

  const playerB = deckAnchorElements[1].parentElement.querySelector('span').innerText;
  const deckB = {
    name: deckAnchorElements[1].innerText,
    url: deckAnchorElements[1].getAttribute('href'),
    id: deckAnchorElements[1].getAttribute('href').replace('https://www.keyforgegame.com/deck-details/', ''),
    owner: playerB,
  };

  return [deckA, deckB];
}

main();
