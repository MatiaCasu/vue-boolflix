/* Api key
6e64cd787a186dfc16b5296cbc3e06c2

"https://api.themoviedb.org/3/search/movie?api_key=&query=ritorno+al+futuro"
*/
const app = new Vue ({
  el: "#app",
  data: {
    inputSearch: "",
    chosenMovies: [],
  },
  methods: {
    searchMovie: function(){
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=6e64cd787a186dfc16b5296cbc3e06c2&language=it-IT&query=ritorno+al+futuro")
      .then( response =>{
        this.chosenMovies = response.data.results;
        // console.log(response.data.results);
      });
    }
  }
});
