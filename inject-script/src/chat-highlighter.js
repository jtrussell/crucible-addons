let elementAt = 0;

const cardsToHighlight = [
  'The Evil Eye',
  'Shadow of Dis',
  'Scrambler Storm',
  'Inky Gloom',
  'Into the Night',
  'Miasma',
  'Stealth Mode',
  'Etan\'s Jar',
  'Mark of Dis',
  'Control the Weak',
  'Waking Nightmare',
  'Opposition Research',
];

const update = () => {
  const links = Array.from(
    document.querySelectorAll('.chat .card-link')
  );

  links.slice(elementAt).forEach((el) => {
    if (/plays/.test(el.parentNode.innerText) && cardsToHighlight.includes(el.innerText)) {
      el.style.backgroundColor = '#fc7f79';
      el.style.color = '#000';
      el.style.padding = '2px';
    }
  });

  elementAt = links.length;
};

module.exports = {
  update,
};
