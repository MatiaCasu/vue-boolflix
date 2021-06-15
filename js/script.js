const app = new Vue ({
  el: "#app",
  data: {
  //  data
    inputSearch: "",
    all: [],
    movies: [],
    tv: [],

    // axiosElement
    uri: "https://api.themoviedb.org/3/search/",
    httpBody: {
      movie: "movie",
      tv: "tv"
    }
  },
  //  /data
  computed: {
    axiosParams: function(){
      return {
        params: {
          api_key: "6e64cd787a186dfc16b5296cbc3e06c2",
          language: "it-IT",
          query: this.inputSearch
        }
      }
    }
  },
  // methods
  methods: {
    searchMovie: function(){
      // Chiamata Film
      axios.get(this.uri + this.httpBody.movie, this.axiosParams)
        .then( (response) =>{
          this.movies = [];
          this.movies.push(...response.data.results);
          this.movies.sort((a, b) =>{
            return b.vote_count - a.vote_count
          });
          this.all.push(...response.data.results);
          console.log(response.data.results);
        });

      // Chiamata Serie TV
       axios.get(this.uri + this.httpBody.tv, this.axiosParams)
      .then( (response) =>{
        this.all = [];
        this.tv = [];
        this.inputSearch = "";
        this.tv.push(...response.data.results);
        this.all.push(...response.data.results);
        this.tv.sort((a, b) =>{
          return b.vote_count - a.vote_count
        });
        this.all.sort((a, b) =>{
          return b.vote_count - a.vote_count
        });
        console.log(this.all, this.movies, this.tv);
      });
    },
    transformVote : function(vote, starIndex){
      vote = parseInt(vote.toFixed());
      let voteStar = vote / 2;
      if(voteStar >= starIndex){
        return "fas"
      }
      else{
        return "far"
      }
    },
    changeFlag:  function(language){
      if(language === 'en'){
        return 'us'
      }
      else if(language === 'cs'){
        return 'cz'
      }
      else if(language === 'ja'){
        return 'jp'
      }
      else if(language === 'zh'){
        return 'cn'
      }
      else if(language === 'ko'){
        return 'kr'
      }
      else if(language === 'hi'){
        return 'in'
      }
      else {
        return language
      }
    }
  },
  // /methods

});
