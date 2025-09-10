const express = require('express');
const cors = require('cors');
const app = express();
const port = 3300;

// Middleware
app.use(cors());
app.use(express.json());

// Temporary film database (from the provided JSON)
const films = [
  {"id":"86e544fd-79de-4e04-be62-5be67d8dd92e","title":"Nausicaä of the Valley of the Wind","original_title":"風の谷のナウシカ","original_title_romanised":"Kaze no Tani no Naushika","image":"https://www.themoviedb.org/t/p/original/tcrkfB8SRPQCgwI88hQScua6nxh.jpg","movie_banner":"https://www.themoviedb.org/t/p/original/ulVUa2MvnJAjAeRt7h23FFJVRKH.jpg","description":"Warrior and pacifist Princess Nausicaä desperately struggles to prevent two warring nations from destroying themselves and their dying planet.","director":"Hayao Miyazaki","producer":"Isao Takahata","release_date":"1984","running_time":"117","rt_score":"89","people":["https://ghibliapi.dev/people/"],"species":["https://ghibliapi.dev/species/"],"locations":["https://ghibliapi.dev/locations/"],"vehicles":["https://ghibliapi.dev/vehicles/"],"url":"https://ghibliapi.dev/films/86e544fd-79de-4e04-be62-5be67d8dd92e"},
  {"id":"2baf70d1-42bb-4437-b551-e5fed5a87abe","title":"Castle in the Sky","original_title":"天空の城ラピュタ","original_title_romanised":"Tenkū no shiro Rapyuta","image":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg","movie_banner":"https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg","description":"The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.","director":"Hayao Miyazaki","producer":"Isao Takahata","release_date":"1986","running_time":"124","rt_score":"96","people":["https://ghibliapi.dev/people/598f7048-74ff-41e0-92ef-87dc1ad980a9","https://ghibliapi.dev/people/fe93adf2-2f3a-4ec4-9f68-5422f1b87c01","https://ghibliapi.dev/people/3bc0b41e-3569-4d20-ae73-2da329bf0786","https://ghibliapi.dev/people/40c005ce-3725-4f15-8409-3e1b1b14b583","https://ghibliapi.dev/people/5c83c12a-62d5-4e92-8672-33ac76ae1fa0","https://ghibliapi.dev/people/e08880d0-6938-44f3-b179-81947e7873fc","https://ghibliapi.dev/people/2a1dad70-802a-459d-8cc2-4ebd8821248b"],"species":["https://ghibliapi.dev/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"],"locations":["https://ghibliapi.dev/locations/"],"vehicles":["https://ghibliapi.dev/vehicles/4e09b023-f650-4747-9ab9-eacf14540cfb"],"url":"https://ghibliapi.dev/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"},
  // ... (Tambahkan semua data film lainnya dari JSON yang diberikan)
  {"id":"54063b82-c849-47d1-8b37-683012ac7d1f","title":"The Boy and the Heron","original_title":"君たちはどう生きるか","original_title_romanised":"Kimitachi wa Dō Ikiru ka","image":"https://www.themoviedb.org/t/p/original/ytJjBlZ8Z9qdiaLJfer6k6rbgtz.jpg","movie_banner":"https://www.themoviedb.org/t/p/original/dtziHHovfJPDDNHs8kdEcRbuVHA.jpg","description":"The psychological growth of a teenage boy through interactions with his friends and uncle.","director":"Hayao Miyazaki","producer":"Toshio Suzuki","release_date":"2023","running_time":"124","rt_score":"97","people":["https://ghibliapi.dev/people/"],"species":["https://ghibliapi.dev/species/"],"locations":["https://ghibliapi.dev/locations/"],"vehicles":["https://ghibliapi.dev/vehicles/"],"url":"https://ghibliapi.dev/films/54063b82-c849-47d1-8b37-683012ac7d1f"}
];

// Temporary review database
let reviews = [
  {
    id: 1,
    filmId: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    user: "AnimeLover99",
    rating: 5,
    comment: "Absolute Anime!"
  }
];

let nextReviewId = 2;

// GET /status
app.get('/status', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

// GET /films
app.get('/films', (req, res) => {
  res.status(200).json(films);
});

// GET /reviews
app.get('/reviews', (req, res) => {
  res.status(200).json(reviews);
});

// GET /reviews/:id
app.get('/reviews/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const review = reviews.find(r => r.id === id);
  if (review) {
    res.status(200).json(review);
  } else {
    res.status(404).json({ error: 'Review not found' });
  }
});

// POST /reviews
app.post('/reviews', (req, res) => {
  const { filmId, user, rating, comment } = req.body;

  if (!filmId || !user || !rating || !comment) {
    return res.status(400).json({ error: 'Missing required fields: filmId, user, rating, comment' });
  }
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(filmId)) {
    return res.status(400).json({ error: 'Invalid filmId format' });
  }
  if (typeof rating !== 'number' || rating < 1 || rating > 5) {
    return res.status(400).json({ error: 'Rating must be a number between 1 and 5' });
  }

  const newReview = {
    id: nextReviewId++,
    filmId,
    user,
    rating,
    comment
  };
  reviews.push(newReview);
  res.status(201).json(newReview);
});

// PUT /reviews/:id
app.put('/reviews/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { filmId, user, rating, comment } = req.body;
  const reviewIndex = reviews.findIndex(r => r.id === id);

  if (reviewIndex === -1) {
    return res.status(404).json({ error: 'Review not found' });
  }

  if (!filmId || !user || !rating || !comment) {
    return res.status(400).json({ error: 'Missing required fields: filmId, user, rating, comment' });
  }
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(filmId)) {
    return res.status(400).json({ error: 'Invalid filmId format' });
  }
  if (typeof rating !== 'number' || rating < 1 || rating > 5) {
    return res.status(400).json({ error: 'Rating must be a number between 1 and 5' });
  }

  reviews[reviewIndex] = { id, filmId, user, rating, comment };
  res.status(200).json(reviews[reviewIndex]);
});

// DELETE /reviews/:id
app.delete('/reviews/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const reviewIndex = reviews.findIndex(r => r.id === id);

  if (reviewIndex === -1) {
    return res.status(404).json({ error: 'Review not found' });
  }

  reviews.splice(reviewIndex, 1);
  res.status(204).send();
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});