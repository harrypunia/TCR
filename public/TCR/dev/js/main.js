Vue.component('catInfo',{
  template: `
    <div class="reset">
     <div class="catInfo">
        <p class="filter-bar--text">{{cat.name}}</p>
        <p class="filter-bar--text">{{cat.id}}</p>
        <p class="filter-bar--text">{{cat.ageGroup}}</p>
        <p class="filter-bar--text">{{cat.vaccinated}}</p>
        <p class="filter-bar--text">{{cat.neutered}}</p>
        <p class="filter-bar--text">{{cat.breed}}</p>
        <p class="filter-bar--text">{{cat.status}}</p>
        <p @click="showDetails" ref="test" :class="caret" class="filter-bar--text"><img src="../global_assets/SVG/arrow.svg" alt=""></p>
      </div>
      <div class="cat-profile" v-show="show">
        <h1> Hi </h1>
      </div>
    </div>
  `,
  props: ['cat'],
  data() {
    return {
      show: false,
      caret: "down-caret"
    }
  },
  methods: {
    showDetails(e) {
      this.$refs.test.parentElement.parentElement.parentElement.classList.add('open');
      this.show = !this.show;
      if (this.show) {
        this.caret = "up-caret";
        // app.onShow = 'open'
      } else {
        this.caret = "down-caret";
        this.$refs.test.parentElement.parentElement.parentElement.classList.remove('open');
        app.onShow = ''
      }
    }
  }
});

var app = new Vue({
  el: '#define-list',
  data: {
    catsList: [
      {
        id: 001,
        name: 'Tom',
        ageGroup: 10,
        vaccinated: 'no',
        neutered: 'yes',
        breed: 'PUUSSSY',
        status: 'Alive'
       },
      {
        id: 001,
        name: 'bailey',
        ageGroup: 10,
        vaccinated: 'no',
        neutered: 'yes',
        breed: 'PUUSSSY',
        status: 'Alive'
      },
      {
        id: 001,
        name: 'bailey',
        ageGroup: 10,
        vaccinated: 'no',
        neutered: 'yes',
        breed: 'PUUSSSY',
        status: 'Alive'
      },
      {
        id: 001,
        name: 'bailey',
        ageGroup: 10,
        vaccinated: 'no',
        neutered: 'yes',
        breed: 'PUUSSSY',
        status: 'Alive'
      },
      {
        id: 001,
        name: 'bailey',
        ageGroup: 10,
        vaccinated: 'no',
        neutered: 'yes',
        breed: 'PUUSSSY',
        status: 'Alive'
      },
      {
        id: 001,
        name: 'bailey',
        ageGroup: 10,
        vaccinated: 'no',
        neutered: 'yes',
        breed: 'PUUSSSY',
        status: 'Alive'
      },
      {
        id: 001,
        name: 'bailey',
        ageGroup: 10,
        vaccinated: 'no',
        neutered: 'yes',
        breed: 'PUUSSSY',
        status: 'Alive'
      },
      {
        id: 001,
        name: 'bailey',
        ageGroup: 10,
        vaccinated: 'no',
        neutered: 'yes',
        breed: 'PUUSSSY',
        status: 'Alive'
      },
      {
        id: 001,
        name: 'bailey',
        ageGroup: 10,
        vaccinated: 'no',
        neutered: 'yes',
        breed: 'PUUSSSY',
        status: 'Alive'
      },
      {
        id: 001,
        name: 'bailey',
        ageGroup: 10,
        vaccinated: 'no',
        neutered: 'yes',
        breed: 'PUUSSSY',
        status: 'Alive'
      },
      {
        id: 001,
        name: 'bailey',
        ageGroup: 10,
        vaccinated: 'no',
        neutered: 'yes',
        breed: 'PUUSSSY',
        status: 'Alive'
      },
      {
        id: 001,
        name: 'bailey',
        ageGroup: 10,
        vaccinated: 'no',
        neutered: 'yes',
        breed: 'PUUSSSY',
        status: 'Alive'
      },
      {
        id: 001,
        name: 'bailey',
        ageGroup: 10,
        vaccinated: 'no',
        neutered: 'yes',
        breed: 'PUUSSSY',
        status: 'Alive'
      },
      {
        id: 001,
        name: 'bailey',
        ageGroup: 10,
        vaccinated: 'no',
        neutered: 'yes',
        breed: 'PUUSSSY',
        status: 'Alive'
      },
      {
        id: 001,
        name: 'bailey',
        ageGroup: 10,
        vaccinated: 'no',
        neutered: 'yes',
        breed: 'PUUSSSY',
        status: 'Alive'
      }
    ],
    onShow: ''
  }
});
