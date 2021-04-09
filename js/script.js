const app = new Vue ({
  el: "#app",
  data: {
    inputSearch: "",
    chosenMovies: [],
  },
  methods: {
    searchMovie: function(){
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=6e64cd787a186dfc16b5296cbc3e06c2&language=it-IT",{
        params: {
          query: this.inputSearch
        }
      })
      .then( response =>{
        this.chosenMovies = response.data.results;
        console.log(response.data.results);
      });
    }
  }
});
