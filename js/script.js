
// Attraverso una chiamata axios all'API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.

// BONUS: Creare una select con tutti i generi dei dischi.
// In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.

function initVue2(){

  new Vue({

    el: '#app',

    data:{

      collection:[],
      selectedType:''
    },

    computed:{

      filteredGenre:function(){

        this.collection.sort(function(a, b){
          return a.year - b.year;
        })

        return this.collection.filter((el) =>{

          if(el.genre == this.selectedType){

            return el;
          }else if(this.selectedType == ''){

            return el;
          }

        })
      },

      musicType: function(){

        let arrTypes = [];
        for(let i=0; i<this.collection.length; i++){

          let oneAlbum = this.collection[i];
          let oneType = oneAlbum.genre;
          if(!arrTypes.includes(oneType)){

            arrTypes.push(oneType);
          }
        }
        return arrTypes;
      },


    },

    mounted: function (){

      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(data =>{
        this.collection = data.data.response

      })
      .catch(() => console.log('error'))
    },

  });
};


function init(){
  initVue2();
};

document.addEventListener('DOMContentLoaded', init);
