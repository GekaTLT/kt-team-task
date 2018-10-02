<template>
  <div id="app-reddit">
    <SortItems @onThePage="changeOnThePage($event)" @sortItems="changeSortItems($event)"></SortItems>
    <Pagination v-if="!errorMess" @pageTo="loadReddit($event)" :numberOfPages="numberOfPages"></Pagination>
    <transition name="swype">
      <div v-if="!preloader  && !errorMess">
        <NewsBlock v-for="item in newsList" :obj="item.data" :key="item.data.title"></NewsBlock>
      </div>
    </transition>
    <Pagination v-if="!errorMess" @pageTo="loadReddit($event)" :numberOfPages="numberOfPages"></Pagination>
    <Error v-if="errorMess"></Error>
  </div>
</template>

<script>
import SortItems from './components/SortItems'
import NewsBlock from './components/NewsBlock'
import Pagination from './components/Pagination'
import LoadReddit from './ajax/loadReddit.js'
import Error from './components/Error'

export default {
  name: 'app-reddit',
  data: function () {
    return {
      preloader: true,
      amountElem: null,
      newsList: {},
      numberOfPages: 0,
      sort: '',
      errorMess: false
    }
  },
  components: {
    SortItems,
    NewsBlock,
    Pagination,
    Error
  },
  methods: {
    loadReddit: function (pageMoveTo = '') {
      this.preloader = true
      LoadReddit(this.amountElem, pageMoveTo, this.sort)
        .then(res => {
          this.newsList = res.newsArray
          this.numberOfPages = res.numberOfPages
          this.preloader = false
        })
        .catch(() => {
          this.preloader = false
          this.errorMess = true
        })
    },
    changeOnThePage: function (event) {
      this.amountElem = event
    },
    changeSortItems: function (event) {
      this.sort = event
    }
  },
  watch: {
    amountElem: function () {
      this.loadReddit()
    },
    sort: function () {
      this.loadReddit()
    }
  }
}
</script>

<style>
  #app-reddit {
    width: 100%;
    height: 100%;
    min-width: 350px;
  }

  .swype-leave-active, .swype-enter-active {
    transition: all .8s;
  }

  .swype-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }

  .swype-enter {
    opacity: 0;
    transform: translateX(100%);
  }

</style>
