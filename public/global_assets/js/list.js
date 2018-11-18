Vue.component('list_bars', {
    template: `
    <div class="reset">
     <div class="list_bars">
        <p class="filter-bar--text">{{info.name}}</p>
        <p class="filter-bar--text">{{info.id}}</p>
        <p class="filter-bar--text">{{info.ageGroup}}</p>
        <p class="filter-bar--text" :class="info.vaccinated"></p>
        <p class="filter-bar--text" :class="info.neutered"></p>
        <p class="filter-bar--text">{{info.breed}}</p>
        <p class="filter-bar--text" :class="info.status"></p>
        <p @click="showDetails" ref="test" :class="caret" class="filter-bar--text"><img src="../global_assets/SVG/arrow.svg" alt=""></p>
      </div>
      <div class="list__detail" v-show="show">
          <slot></slot>
      </div>
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
                vaccinated: 'noVaccinated',
                neutered: 'yesSpayed',
                breed: 'Persian',
                status: 'statusRed'
       },
            {
                id: 001,
                name: 'bailey',
                ageGroup: 10,
                vaccinated: 'yesVaccinated',
                neutered: 'noSpayed',
                breed: 'Siamese',
                status: 'statusGreen'
      },
            {
                id: 001,
                name: 'bailey',
                ageGroup: 10,
                vaccinated: 'noVaccinated',
                neutered: 'yesSpayed',
                breed: 'British Shorthair',
                status: 'statusYellow'
      },
            {
                id: 001,
                name: 'bailey',
                ageGroup: 10,
                vaccinated: 'yesVaccinated',
                neutered: 'yesSpayed',
                breed: 'American Curl',
                status: 'statusGreen'
      },
            {
                id: 001,
                name: 'bailey',
                ageGroup: 10,
                vaccinated: 'yesVaccinated',
                neutered: 'yesSpayed',
                breed: 'Bengal',
                status: 'statusYellow'
      },
            {
                id: 001,
                name: 'bailey',
                ageGroup: 10,
                vaccinated: 'yesVaccinated',
                neutered: 'noSpayed',
                breed: 'Ragdoll',
                status: 'statusYellow'
      },
            {
                id: 001,
                name: 'bailey',
                ageGroup: 10,
                vaccinated: 'noVaccinated',
                neutered: 'noSpayed',
                breed: 'Scotish Fold',
                status: 'statusRed'
      },
            {
                id: 001,
                name: 'bailey',
                ageGroup: 10,
                vaccinated: 'noVaccinated',
                neutered: 'yesSpayed',
                breed: 'Ragamuffin',
                status: 'statusRed'
      },
            {
                id: 001,
                name: 'bailey',
                ageGroup: 10,
                vaccinated: 'yesVaccinated',
                neutered: 'yesSpayed',
                breed: 'Bengal',
                status: 'statusGreen'
      },
            {
                id: 001,
                name: 'bailey',
                ageGroup: 10,
                vaccinated: 'yesVaccinated',
                neutered: 'noSpayed',
                breed: 'American Curl',
                status: 'statusYellow'
      },
            {
                id: 001,
                name: 'bailey',
                ageGroup: 10,
                vaccinated: 'yesVaccinated',
                neutered: 'yesSpayed',
                breed: 'Black',
                status: 'statusGreen'
      },
            {
                id: 001,
                name: 'bailey',
                ageGroup: 10,
                vaccinated: 'yesVaccinated',
                neutered: 'yesSpayed',
                breed: 'Tabby',
                status: 'statusGreen'
      },
            {
                id: 001,
                name: 'bailey',
                ageGroup: 10,
                vaccinated: 'noVaccinated',
                neutered: 'noSpayed',
                breed: 'Scottish Fold',
                status: 'statusRed'
      },
            {
                id: 001,
                name: 'bailey',
                ageGroup: 10,
                vaccinated: 'noVaccinated',
                neutered: 'noSpayed',
                breed: 'American Shorthair',
                status: 'statusYellow'
      }
    ],
        onShow: ''
    },
    computed: {
      weedTest() {
        fetch('http://localhost:3000/api/allCats').then((res)=>{
          console.log(res.body);
          res.json();
        });
      }
    }
});
