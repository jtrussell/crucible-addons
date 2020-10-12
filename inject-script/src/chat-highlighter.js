let elementAt = 0;

const playHighlight = [
  'Scrambler Storm',
  'Stealth Mode',
  'Foggify',
  'Fogbank',
  'Skippy Timehog',
  'Foggify',
  'Sow Salt',
  'Shadow of Dis',
  'Inky Gloom',
  'Into the Night',
  'Miasma',
  'Etan\'s Jar',
  'Mark of Dis',
  'Control the Weak',
  'Opposition Research',
];

const useHighlight = [
  'Lifeward',
  'Lucky Dice',
];

const update = () => {
  const links = Array.from(
    document.querySelectorAll('.chat .card-link')
  );

  links.slice(elementAt).forEach((el) => {
    if (/plays/.test(el.parentNode.innerText) && playHighlight.includes(el.innerText)) {
      el.style.backgroundColor = '#fc7f79';
      el.style.color = '#000';
      el.style.padding = '2px';
    }

    if (/uses/.test(el.parentNode.innerText) && useHighlight.includes(el.innerText)) {
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
