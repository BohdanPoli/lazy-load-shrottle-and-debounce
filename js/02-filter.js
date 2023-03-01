const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

const listItemsMarkup = createListItemsMarkup(tech);
populateList(listItemsMarkup);

function onFilterChange(e) {
  const filter = e.target.value.toLowerCase();
  const filteredItems = tech.filter(element =>
    element.label.toLowerCase().includes(filter),
  );
  const listItemsMarkup = createListItemsMarkup(filteredItems);
  populateList(listItemsMarkup);
}

function createListItemsMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}
