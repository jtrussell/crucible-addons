/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const parseEvents = __webpack_require__(/*! ./parseEvents */ \"./src/parseEvents.js\");\n\nconst main = (response) => {\n  window.addEventListener('load', function() {\n    console.log(\"cruciblestats ready v0.0.3\");\n\n    waitForDecks()\n    .then(getDecks)\n    .then(decks => {\n      const opponentDeckID = decks.deckA.owner === 'stronglink' ? decks.deckB.id : decks.deckA.id;\n      const ownDeckID = decks.deckA.owner === 'stronglink' ? decks.deckA.id : decks.deckB.id;\n\n      const navEl = document.querySelector('li.dropdown').parentNode;\n      const opponentDeckEl = document.createElement('a');\n      opponentDeckEl.setAttribute('href', 'https://decksofkeyforge.com/decks/' + opponentDeckID);\n      opponentDeckEl.setAttribute('target', '_blank');\n      opponentDeckEl.innerText = 'opponent deck';\n      navEl.appendChild(opponentDeckEl);\n\n      const ownDeckEl = document.createElement('a');\n      ownDeckEl.setAttribute('href', 'https://decksofkeyforge.com/decks/' + ownDeckID);\n      ownDeckEl.setAttribute('target', '_blank');\n      ownDeckEl.innerText = 'own deck';\n      navEl.appendChild(ownDeckEl);\n      \n      document.querySelector('a.navbar-brand').remove();\n      document.querySelector('li.dropdown').remove();\n\n      return decks;\n    })\n    .then(recordEvents)\n    .then(events => {\n      const result = parseEvents(events);\n      window.a = result;\n      console.log(result);\n\n      const own = result.winner.name === 'stronglink' ? 'winner' : 'loser';\n      const opponent = result.winner.name !== 'stronglink' ? 'winner' : 'loser';\n\n      const ownHouseData = {\n        ownTurnsDis: 0,\n        ownTurnsLogos: 0,\n        ownTurnsBrobnar: 0,\n        ownTurnsUntamed: 0,\n        ownTurnsShadows: 0,\n        ownTurnsSanctum: 0,\n        ownTurnsMars: 0,\n      }\n\n      Object.keys(result[own].turnsPerHouse)\n        .forEach(house => {\n          ownHouseData['ownTurns' + house[0].toUpperCase() + house.slice(1)] = result[own].turnsPerHouse[house];\n        });\n\n      const opponentHouseData = {\n        opponentTurnsDis: 0,\n        opponentTurnsLogos: 0,\n        opponentTurnsBrobnar: 0,\n        opponentTurnsUntamed: 0,\n        opponentTurnsShadows: 0,\n        opponentTurnsSanctum: 0,\n        opponentTurnsMars: 0,\n      }\n\n      Object.keys(result[opponent].turnsPerHouse)\n        .forEach(house => {\n          opponentHouseData['opponentTurns' + house[0].toUpperCase() + house.slice(1)] = result[opponent].turnsPerHouse[house];\n        });\n\n      const message = {\n        type: 'RECORD_GAME',\n        data: {\n          userID: 1,\n          result: result.winner.name === 'stronglink' ? 'win' : 'loss',\n          turns: result.totalTurns,\n          date: (new Date()).toISOString(),\n          ownDeckName: result[own].deckName,\n          ownDeckID: result[own].deckID,\n          ownKeys: result[own].keys,\n          ownChecks: result[own].checks,\n          ownCardsDrawn: result[own].cardsDrawn,\n          ownArtifactsPlayed: result[own].artifactsPlayed,\n          ownCreaturesPlayed: result[own].creaturesPlayed,\n          ownActionsPlayed: result[own].actionsPlayed,\n          ownTurnsDis: ownHouseData.ownTurnsDis,\n          ownTurnsLogos: ownHouseData.ownTurnsLogos,\n          ownTurnsBrobnar: ownHouseData.ownTurnsBrobnar,\n          ownTurnsUntamed: ownHouseData.ownTurnsUntamed,\n          ownTurnsShadows: ownHouseData.ownTurnsShadows,\n          ownTurnsSanctum: ownHouseData.ownTurnsSanctum,\n          ownTurnsMars: ownHouseData.ownTurnsMars,\n          ownAemberTotal: result[own].aemberTotal,\n          ownAemberLost: result[own].aemberLost,\n          ownAemberFromEffects: result[own].aemberFromEffects,\n          ownAemberFromCardPips: result[own].aemberFromCardPips,\n          ownAemberFromReaping: result[own].aemberFromReaping,\n          ownAemberFromStealing: result[own].aemberFromStealing,\n          opponentDeckName: result[opponent].deckName,\n          opponentDeckID: result[opponent].deckID,\n          opponentKeys: result[opponent].keys,\n          opponentChecks: result[opponent].checks,\n          opponentCardsDrawn: result[opponent].cardsDrawn,\n          opponentArtifactsPlayed: result[opponent].artifactsPlayed,\n          opponentCreaturesPlayed: result[opponent].creaturesPlayed,\n          opponentActionsPlayed: result[opponent].actionsPlayed,\n          opponentTurnsDis: opponentHouseData.opponentTurnsDis,\n          opponentTurnsLogos: opponentHouseData.opponentTurnsLogos,\n          opponentTurnsBrobnar: opponentHouseData.opponentTurnsBrobnar,\n          opponentTurnsUntamed: opponentHouseData.opponentTurnsUntamed,\n          opponentTurnsShadows: opponentHouseData.opponentTurnsShadows,\n          opponentTurnsSanctum: opponentHouseData.opponentTurnsSanctum,\n          opponentTurnsMars: opponentHouseData.opponentTurnsMars,\n          opponentAemberTotal: result[opponent].aemberTotal,\n          opponentAemberLost: result[opponent].aemberLost,\n          opponentAemberFromEffects: result[opponent].aemberFromEffects,\n          opponentAemberFromCardPips: result[opponent].aemberFromCardPips,\n          opponentAemberFromReaping: result[opponent].aemberFromReaping,\n          opponentAemberFromStealing: result[opponent].aemberFromStealing,\n        },\n        events\n      };\n\n      chrome.runtime.sendMessage(message);\n      window.b = message;\n      console.log(message);\n    });\n  });\n}\n\nconst recordEvents = (decks) => {\n  return new Promise((resolve, reject) => {\n\n    const script = document.createElement('script');\n    script.src = chrome.extension.getURL('inject.js');\n    (document.head || document.documentElement).appendChild(script);\n\n    let processedToIndex = 0;\n    const interval = setInterval(() => {\n      messages = document.querySelectorAll('.gamechat .message');\n      messages = Array.from(messages);\n      const messagesToParse = messages.slice(processedToIndex);\n\n      messagesToParse.forEach(message => {\n        // Observe until we see the game has ended\n        if (!/has won the game/.test(message.innerText)) {\n          return;\n        }\n\n        clearInterval(interval);\n        window.addEventListener('message', e => {\n          if (e.data.type === 'POST_GAME_EVENTS') {\n            resolve(e.data.events);\n          }\n        });\n\n        const event = new CustomEvent('GET_GAME_EVENTS');\n        window.dispatchEvent(event);\n      });\n\n      processedToIndex = messages.length;\n    }, 1000);\n\n    window.srestart = () => {\n      clearInterval(interval);\n      recordEvents();\n    };\n  });\n}\n\nconst waitForDecks = () => {\n  const deckAnchorElements = document.querySelectorAll('.gamechat .message a');\n  if (deckAnchorElements.length === 2) {\n    return Promise.resolve();\n  } else {\n    const promise = new Promise((resolve, reject) => {\n      setTimeout(() => {\n        waitForDecks().then(resolve);\n      }, 500);\n    });\n    return promise;\n  }\n}\n\nconst getDecks = () => {\n  const deckAnchorElements = document.querySelectorAll('.gamechat .message a');\n  const playerA = deckAnchorElements[0].parentElement.querySelector('span').innerText;\n\n  const deckA = {\n    name: deckAnchorElements[0].innerText,\n    url: deckAnchorElements[0].getAttribute('href'),\n    id: deckAnchorElements[0].getAttribute('href').replace('https://www.keyforgegame.com/deck-details/', ''),\n    owner: playerA,\n  };\n\n  const playerB = deckAnchorElements[1].parentElement.querySelector('span').innerText;\n  const deckB = {\n    name: deckAnchorElements[1].innerText,\n    url: deckAnchorElements[1].getAttribute('href'),\n    id: deckAnchorElements[1].getAttribute('href').replace('https://www.keyforgegame.com/deck-details/', ''),\n    owner: playerB,\n  };\n\n  return { deckA, deckB };\n}\n\nchrome.extension.sendMessage({}, main);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/parseEvents.js":
/*!****************************!*\
  !*** ./src/parseEvents.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const getTotalTurns = (events) => {\n  let turns = 0;\n  events.forEach(e => {\n    if (e.message && e.message.alert && e.message.alert.type === 'endofround' && e.message.alert.message[0] && /End of turn/.test(e.message.alert.message[0])) {\n      turns += 1;\n    }\n  });\n\n  return turns;\n};\n\nconst getKeysForPlayer = (player, events) => {\n  let keys = 0;\n  events.forEach(e => {\n    if (Array.isArray(e.message) && e.message[0].name === player && e.message[1] === ' forges a key, paying ') {\n      keys += 1;\n    }\n  });\n\n  return keys;\n};\n\nconst getChecksForPlayer = (player, events) => {\n  let checks = 0;\n  events.forEach(e => {\n    if (e.message && e.message.alert  && e.message.alert.message && e.message.alert.message[0] && e.message.alert.message[0].name === player && / declares Check!/.test(e.message.alert.message[1])) {\n      checks += 1;\n    }\n  });\n\n  return checks;\n};\n\n// join\n// pick house\n// player a no forge 0:0\n// end of turn 1\n// a: 0 ameber b:0 aember\n// Turn 1\n// player b no forge 0:0\n// end of turn 1\n// a: 0 ameber b:1 aember\n// Turn 2\n// player a no forge 0:1\n// end of turn 2\n// a: 1 ameber b:0 aember\n// Turn 2\n\n\nconst getAemberFromPipsForPlayer = (player, events) => {\n  const pipEvents = events.filter(e => {\n    return Array.isArray(e.message) && e.message[0].name === player && /gaining \\d amber/.test(e.message[3]);\n  });\n\n  let total = 0;\n  pipEvents.forEach(e => {\n    let string = e.message[3];\n    string = string.replace(', gaining ', '');\n    string = string.replace(' amber', '');\n    const amount = Number.parseInt(string, 10);\n    total += amount;\n  });\n  return total;\n}\n\nconst getAemberFromReapingForPlayer = (player, events) => {\n  const reapEvents = events.filter(e => {\n    return Array.isArray(e.message) && e.message[0].name === player && e.message[4] && e.message[4].message && e.message[4].message[0] === 'reap with ';\n  });\n  return reapEvents.length;\n};\n\nconst getAemberFromStealingForPlayer = (player, events) => {\n  const stealEvents = events.filter(e => {\n    return Array.isArray(e.message) && e.message[0].name === player && e.message[4] && e.message[4].message && /steal \\d amber from/.test(e.message[4].message[0]);\n  });\n\n  let total = 0;\n  stealEvents.forEach(e => {\n    let string = e.message[4].message[0];\n    string = string.replace('steal ', '');\n    string = string.replace(' amber from', '');\n    const amount = Number.parseInt(string, 10);\n    total += amount;\n  });\n  return total;\n}\n\nconst getCardsDrawnForPlayer = (player, events) => {\n  let checks = 0;\n  events.forEach(e => {\n    if (Array.isArray(e.message)  && e.message[0].name === player && /^ draws $/.test(e.message[1])) {\n      checks += e.message[2];\n    }\n  });\n  events.forEach(e => {\n    if (Array.isArray(e.message)  && e.message[0].name === player && /^ draws a card due to $/.test(e.message[1])) {\n      checks += 1;\n    }\n  });\n  return checks;\n};\n\nconst getCardTypePlayedForPlayer = (player, cardType, events) => {\n  return events.filter(e => {\n    return Array.isArray(e.message)  && e.message[0].name === player && / plays /.test(e.message[1]) && e.message[2].argType === 'card' && e.message[2].type === cardType;\n  }).length;\n};\n\nconst getTurnsPerHouseForPlayer = (player, events) => {\n  const houseEvents = events.filter(e => {\n    return Array.isArray(e.message) && e.message[0].name === player && /as their active house this turn/.test(e.message[3]);\n  });\n\n  const houseMap = {};\n  houseEvents.forEach(e => {\n    if (houseMap[e.message[2]] === undefined) {\n      houseMap[e.message[2]] = 0; \n    }\n    houseMap[e.message[2]] += 1;\n  });\n\n  return houseMap;\n}\n\n\n\nconst parseEvents = (events) => {\n  const playerA = events[0].message[0].name;\n  const playerB = events[1].message[0].name;\n\n  const playerADeckEvent = events.find(e => {\n    return e.message[1] === ' is playing as the Archon: ';\n  });\n  const playerADeckID = playerADeckEvent.message[2].link.replace('https://www.keyforgegame.com/deck-details/', '');\n  const playerADeckName = playerADeckEvent.message[2].label;\n\n  const playerBDeckEvent = events.find(e => {\n    return e.message[1] === ' is playing as the Archon: ' && e !== playerADeckEvent;\n  });\n  const playerBDeckID = playerBDeckEvent.message[2].link.replace('https://www.keyforgegame.com/deck-details/', '');\n  const playerBDeckName = playerBDeckEvent.message[2].label;\n\n  const winnerName = events.find(e => {\n    if (e.message.alert && e.message.alert.message[1] === ' has won the game') {\n      return e;\n    }\n  }).message.alert.message[0].name;\n\n  let loserName;\n  let loserDeckID;\n  let loserDeckName;\n  let winnerDeckID;\n  let winnerDeckName;\n\n  if (winnerName === playerA) {\n    winnerDeckID = playerADeckID;\n    winnerDeckName = playerADeckName;\n    loserName = playerB;\n    loserDeckID = playerBDeckID;\n    loserDeckName = playerBDeckName;\n  } else {\n    winnerDeckID = playerBDeckID;\n    winnerDeckName = playerBDeckName;\n    loserName = playerA;\n    loserDeckID = playerADeckID;\n    loserDeckName = playerADeckName;\n  }\n\n  const winner = {\n    name: winnerName,\n    deckID: winnerDeckID,\n    deckName: winnerDeckName,\n    url: 'https://decksofkeyforge.com/decks/' + winnerDeckID,\n    keys: getKeysForPlayer(winnerName, events),\n    checks: getChecksForPlayer(winnerName, events),\n    cardsDrawn: getCardsDrawnForPlayer(winnerName, events),\n    artifactsPlayed: getCardTypePlayedForPlayer(winnerName, 'artifact', events),\n    creaturesPlayed: getCardTypePlayedForPlayer(winnerName, 'creature', events),\n    actionsPlayed: getCardTypePlayedForPlayer(winnerName, 'action', events),\n    turnsPerHouse: getTurnsPerHouseForPlayer(winnerName, events),\n    aemberTotal: -1,\n    aemberLost: -1,\n    aemberFromEffects: -1,\n    aemberFromCardPips: getAemberFromPipsForPlayer(winnerName, events),\n    aemberFromReaping: getAemberFromReapingForPlayer(winnerName, events),\n    aemberFromStealing: getAemberFromStealingForPlayer(winnerName, events),\n  };\n\n  const loser = {\n    name: loserName,\n    deckID: loserDeckID,\n    deckName: loserDeckName,\n    url: 'https://decksofkeyforge.com/decks/' + loserDeckID,\n    keys: getKeysForPlayer(loserName, events),\n    checks: getChecksForPlayer(loserName, events),\n    cardsDrawn: getCardsDrawnForPlayer(loserName, events),\n    artifactsPlayed: getCardTypePlayedForPlayer(loserName, 'artifact', events),\n    creaturesPlayed: getCardTypePlayedForPlayer(loserName, 'creature', events),\n    actionsPlayed: getCardTypePlayedForPlayer(loserName, 'action', events),\n    turnsPerHouse: getTurnsPerHouseForPlayer(loserName, events),\n    aemberTotal: -1,\n    aemberLost: -1,\n    aemberFromEffects: -1,\n    aemberFromCardPips: getAemberFromPipsForPlayer(loserName, events),\n    aemberFromReaping: getAemberFromReapingForPlayer(loserName, events),\n    aemberFromStealing: getAemberFromStealingForPlayer(loserName, events),\n  };\n\n  const totalTurns = getTotalTurns(events);\n\n  return {\n    winner,\n    loser,\n    totalTurns,\n    date: events[0].date,\n  };\n};\n\nmodule.exports = parseEvents;\n\n\n//# sourceURL=webpack:///./src/parseEvents.js?");

/***/ })

/******/ });