const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
let ac=movies.filter(a => a.genre == 'Sci-Fi')
console.log(ac)
let acs=movies.filter(a => {

if ( a.title == 'Inception')
{
    console.log(a.title,a.rating);
}})
let aca = movies.reduce((a, b) => a + b.rating, 0) / movies.length;
console.log(aca);
let ed= movies.find(a => a.title == 'Joker')
console.log(ed)
let ds=movies.findIndex(a=> a.title == "Avengers")
console.log(ds)
