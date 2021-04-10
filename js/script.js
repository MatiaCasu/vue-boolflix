const app = new Vue ({
  el: "#app",
  data: {
    inputSearch: "",
    chosenMovies: [],
  },
  methods: {
    searchMovie: function(){
      axios.get("https://api.themoviedb.org/3/search/movie",{
        params: {
          api_key: "6e64cd787a186dfc16b5296cbc3e06c2",
          language: "it-IT",
          query: this.inputSearch
        }
      })
      .then( response =>{
        this.chosenMovies = response.data.results;
        this.inputSearch = "";
        // console.log(response.data.results);
      });
    },
    transformVote : function(vote, starIndex){
      let voteStar = Math.ceil(vote / 2);
      if(voteStar >= starIndex){
        return "fas"
      }
      else{
        return "far"
      }
    }
  }
});
