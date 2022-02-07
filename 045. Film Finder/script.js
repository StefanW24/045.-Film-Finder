const moviesList = document.getElementById("moviesList");

const addMoviesToDom = (TheMovies) => {
  const array = TheMovies.map(function (TheMovies) {
    const movieWebpage = "https://www.imdb.com/title/" + TheMovies.imdbID;
    return (
      "<li class='moviesListItem'><a href=" + movieWebpage + "><img src=" + TheMovies.Poster + " alt=''></a></li>"
    );
  });

  array.forEach(function (TheMovies) {
    moviesList.innerHTML += TheMovies;
  });
};

addMoviesToDom(movies)

const addEventListeners = () => {
  const buttons = document.querySelectorAll("input[name='filter']")
  buttons.forEach(function (item) {
    item.addEventListener("change", function (event) {
      handleOnChangeEvent(event.target.value)
      console.log(event.target.value)
    })
  })
}

addEventListeners()

const handleOnChangeEvent = (message) => {
  switch (message) {
    case "newMovies": filterLatestMovies();
      console.log(`Hey i am ${message} film`)
      break;
    case "Avengers": filterMovies("Avengers");
      console.log(`Hey i am ${message} film`)
      break;
    case "Xmen": filterMovies("X-Men");
      console.log(`Hey i am ${message} film`)
      break;
    case "Princess": filterMovies("Princess");
      console.log(`Hey i am ${message} film`)
      break;
    case "Batman": filterMovies("Batman");
      console.log(`Hey i am ${message} film`)
      break;
  }
}

const filterLatestMovies = () => {
  const resultLatestMovies = movies.filter(function (TheMovies) {
    return parseInt(TheMovies.Year) >= 2014;
  });
  console.log(resultLatestMovies)
  clearList();
  addMoviesToDom(resultLatestMovies);
};


const filterMovies = (film) => {
  const resultFilterMovies = movies.filter(function (TheMovies) {
    return TheMovies.Title.includes(film)
  });
  console.log(resultFilterMovies)
  clearList();
  addMoviesToDom(resultFilterMovies);
};

const clearList = () => {
  const movieListItems = document.querySelectorAll('.moviesListItem');
  movieListItems.forEach(TheMovies => TheMovies.remove());
};

const filterAllMovies = () => {
  clearList();
  addMoviesToDom(movies);
};

const radioItems = document.querySelectorAll(".radio-item");

radioItems.forEach(link => {
  link.addEventListener("click", function () {
    radioItems.forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");
  })
})