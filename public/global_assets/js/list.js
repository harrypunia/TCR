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

      }
    }
  }
});


Vue.component('list_bars_fosters', {
  template: `
    <div class="reset">
     <div class="list_bars">
        <p class="filter-bar--text">{{info.name}}</p>
        <p class="filter-bar--text">{{info.phone}}</p>
        <p class="filter-bar--text">{{info.address}}</p>
        <p class="filter-bar--text">{{info.emial}}</p>
        <p class="filter-bar--text">{{info.city}}</p>
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
      }
    }
  }
});

var app = new Vue({
  el: '#define-list',
  data: {
    infoList: [],
    fosters: [
      {
      name: 'Omar',
      phone: '416-799-600',
      address: 'Univeristy Avenue',
      emial: 'omar@gmail.com',
      city: 'Toronto'
      },
      {
      name: 'DEVON',
      phone: '416-799-600',
      address: 'Univeristy Avenue',
      emial: 'devon@gmail.com',
      city: 'Toronto'
    },
    {
    name: 'Harry',
    phone: '416-799-600',
    address: 'Univeristy Avenue',
    emial: 'harry@gmail.com',
    city: 'Toronto'
    }
  ],
    onShow: ''
  },
  computed: {
    test() {
      fetch('https://giftthecode.glitch.me/api/allcats').then(response => response.json())
        .then((data) => {
          let catList = [];
          for (let i = 0; i < data.length; i++) {
            (data[i].spayNeut) ? (data[i].spayNeut = 'yesSpayed') : (data[i].spayNeut = 'noSpayed');
            (data[i].vaccinesUpToDate) ? (data[i].vaccinesUpToDate = 'yesVaccinated') : (data[i].vaccinesUpToDate = 'noVaccinated');
            catList.push({
              name: data[i].name,
              id: data[i].catID,
              ageGroup: data[i].age,
              vaccinated: data[i].vaccinesUpToDate,
              neutered: data[i].spayNeut,
              breed: data[i].Breed,
              status: 'statusYellow'
            });
          }
          this.infoList = catList;
        }).catch((err) => {
          console.log(err);
        });
    }
  }
});
