Vue.component('list_bars', {
    template: `
    <div class="reset">
     <div class="list_bars">
        <p class="filter-bar--text">{{info.name}}</p>
        <p class="filter-bar--text">{{info.id}}</p>
        <p class="filter-bar--text">{{info.ageGroup}}</p>
        <p class="filter-bar--text">{{info.vaccinated}}</p>
        <p class="filter-bar--text">{{info.neutered}}</p>
        <p class="filter-bar--text">{{info.breed}}</p>
        <p class="filter-bar--text">{{info.status}}</p>
        <p @click="showDetails" ref="test" :class="caret" class="filter-bar--text"><img src="../global_assets/SVG/arrow.svg" alt=""></p>
      </div>
      <div class="cat-profile" v-show="show">
        <div class="cat_profile"></div>
      </div>
    </div>
  `,
    props: ['info'],
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
        infoList: [
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
