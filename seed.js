const db = require('./server/db');
const Campus = require('./server/db/models/campus');
const Student = require('./server/db/models/student');


const campuses = [
  { name: 'Hufflepuff',
    imageUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/3/30/Hufflepuff%E2%84%A2_Crest_%28Painting%29.png/revision/latest?cb=20091129184403',
    description:
    'Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherins Heir mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma and Parvati Sorting Hat Minister of Magic blue turban remember my last.' },
  { name: 'Gryffindor',
    imageUrl: 'http://vignette1.wikia.nocookie.net/harrypotter/images/f/f2/Gryffindor%E2%84%A2_Crest.png/revision/latest?cb=20091129182119',
    description: 'Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky quills The Boy Who Lived bat spleens cupboard under the stairs flying motorcycle. Sirius Black Holyhead Harpies, you’ve got dirt on your nose. Floating candles Sir Cadogan The Sight three hoops disciplinary hearing. Grindlewald pig’s tail Sorcerers Stone biting teacup. Side-along dragon-scale suits Filch 20 points, Mr. Potter.' },
  { name: 'Slytherin',
    imageUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/e/ef/Slytherin%E2%84%A2_Crest_%28Painting%29.png/revision/latest?cb=20091129190321',
    description: 'Prefects bathroom Trelawney veela squashy armchairs, SPEW: Gamp’s Elemental Law of Transfiguration. Magic Nagini bezoar, Hippogriffs Headless Hunt giant squid petrified. Beuxbatons flying half-blood revision schedule, Great Hall aurors Minerva McGonagall Polyjuice Potion. Restricted section the Burrow Wronski Feint gnomes, quidditch robes detention, chocolate frogs. Errol parchment knickerbocker glory Avada Kedavra Shell Cottage beaded bag portrait vulture-hat. Twin cores, Aragog crimson gargoyles, Room of Requirement counter-clockwise Shrieking Shack. Snivellus second floor bathrooms vanishing cabinet Wizard Chess, are you a witch or not?' },
  { name: 'Ravenclaw',
    imageUrl: 'http://vignette1.wikia.nocookie.net/harrypotter/images/6/6c/Ravenclaw%E2%84%A2_Crest_%28Painting%29.png/revision/latest?cb=20091129184403',
    description: 'Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.' }
];

const students = [{
  firstName: 'Harry',
  lastName: 'Potter',
  email: 'harrypotter@hogwarts.magic',
  gpa: 2.2,
  campusId: 2
}, {
  firstName: 'Hannah',
  lastName: 'Abbott',
  email: 'hannahabbott@hogwarts.magic',
  gpa: 2.3,
  campusId: 1
}, {
  firstName: 'Katie',
  lastName: 'Bell',
  email: 'katiebell@hogwarts.magic',
  gpa: 3.2,
  campusId: 2
}, {
  firstName: 'Susan',
  lastName: 'Bones',
  email: 'susanbones@hogwarts.magic',
  gpa: 3.3,
  campusId: 1
}, {
  firstName: 'Terry',
  lastName: 'Boot',
  email: 'terryboot@hogwarts.magic',
  gpa: 1.5,
  campusId: 4
}, {
  firstName: 'Lavender',
  lastName: 'Brown',
  email: 'lavenderbrown@hogwarts.magic',
  gpa: 2.5,
  campusId: 2
}, {
  firstName: 'Millicent',
  lastName: 'Bulstrode',
  email: 'millicent@hogwarts.magic',
  gpa: 2.7,
  campusId: 3
}, {
  firstName: 'Cho',
  lastName: 'Chang',
  email: 'chocang@hogwarts.magic',
  gpa: 3.8,
  campusId: 4
}, {
  firstName: 'Penelope',
  lastName: 'Clearwater',
  email: 'penelopec@hogwarts.magic',
  gpa: 3.9,
  campusId: 4
}, {
  firstName: 'Hermione',
  lastName: 'Granger',
  email: 'hermione@hogwarts.magic',
  gpa: 4.0,
  campusId: 2
}, {
  firstName: 'Ron',
  lastName: 'Weasley',
  email: 'ronweasley@hogwarts.magic',
  gpa: 2.8,
  campusId: 2
}, {
  firstName: 'Ginny',
  lastName: 'Weasley',
  email: 'ginnyweasley@hogwarts.magic',
  gpa: 3.9,
  campusId: 2
}, {
  firstName: 'Vincent',
  lastName: 'Crabbe',
  email: 'vincentcrabbe@hogwarts.magic',
  gpa: 1.8,
  campusId: 3
}, {
  firstName: 'Colin',
  lastName: 'Creevey',
  email: 'ccreevey@hogwarts.magic',
  gpa: 2.3,
  campusId: 2
}, {
  firstName: 'Cedric',
  lastName: 'Diggory',
  email: 'cdiggory@hogwarts.magic',
  gpa: 3.4,
  campusId: 1
}, {
  firstName: 'Marietta',
  lastName: 'Edgecombe',
  email: 'mariettaedgecombe@hogwarts.magic',
  gpa: 2.8,
  campusId: 4
}, {
  firstName: 'Seamus',
  lastName: 'Finnegam',
  email: 'seamusfinnegan@hogwarts.magic',
  gpa: 2.5,
  campusId: 2
}, {
  firstName: 'Marcus',
  lastName: 'Flint',
  email: 'marcusflint@hogwarts.magic',
  gpa: 3.1,
  campusId: 3
}];




const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
  ));

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();

