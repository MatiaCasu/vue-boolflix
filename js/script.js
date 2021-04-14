const app = new Vue ({
  el: "#app",
  data: {
    inputSearch: "",
    all: [],
    movies: [],
    tv: [],
    axiosElement:{
      uri: "https://api.themoviedb.org/3",
      httpBody: {
        movie: "/search/movie",
        tv: "/search/tv"
      },
      api: "6e64cd787a186dfc16b5296cbc3e06c2",
      languagesKey: {
        ita: "it-IT",
      }
    }
  },
  methods: {
    searchMovie: function(){
      // Chiamata Film
      axios.get(this.axiosElement.uri + this.axiosElement.httpBody.movie,{
        params: {
          api_key: this.axiosElement.api,
          language: this.axiosElement.languagesKey.ita,
          query: this.inputSearch
        }
      })
      .then( (response) =>{
        this.movies = [];
        this.movies.push(...response.data.results);
        this.movies.sort((a, b) =>{
          return b.vote_count - a.vote_count
        });
        this.all.push(...response.data.results);
      });

      // Chiamata Serie TV
      axios.get(this.axiosElement.uri + this.axiosElement.httpBody.tv,{
        params: {
          api_key: this.axiosElement.api,
          language: this.axiosElement.languagesKey.ita,
          query: this.inputSearch
        }
      })
      .then( (response) =>{
        this.tv = [];
        this.all = [];
        this.inputSearch = "";
        this.tv.push(...response.data.results);
        this.all.push(...response.data.results);
        this.tv.sort((a, b) =>{
          return b.vote_count - a.vote_count
        });
        this.all.sort((a, b) =>{
          return b.vote_count - a.vote_count
        });
      });
      // console.log(this.all, this.movies, this.tv);
    },
    transformVote : function(vote, starIndex){
      let voteStar = Math.ceil(vote / 2);
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
  }
});
