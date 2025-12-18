const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

//versione estesa di map

const people = posts.map(function(post) {
  return "il nome degli autori è " + post.author;
});


//versione più compatta

const people1 = posts.map((post) =>
`il nome degli autori è  ${post.author}`
);

console.log(people, people1);
