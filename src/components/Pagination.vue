<template>
  <ul class="pagination">
    <li  @click="pageTo('pre')" :class="(numberOfPages === 1)? 'pagination--disabled':''">«</li>
    <li :class="(numberOfPages === 1)? 'pagination--active':''" @click="pageToStart">1</li>
    <li v-show="numberOfPages > 4">...</li>
    <li @click="pageTo({page: numberOfPages - 2})" v-show="numberOfPages > 3">{{numberOfPages - 2}}</li>
    <li @click="pageTo({page: numberOfPages - 1})" v-show="numberOfPages > 2">{{numberOfPages - 1}}</li>
    <li class="pagination--active" v-show="numberOfPages > 1">{{numberOfPages}}</li>
    <li @click="pageTo('next')">»</li>
  </ul>
</template>

<script>
export default {
  name: 'Pagination',
  data: function () {
    return {
    }
  },
  props: {
    numberOfPages: Number
  },
  methods: {
    pageTo: function (str = '') {
      this.$emit('pageTo', str)
    },
    pageToStart: function () {
      if (this.numberOfPages !== 1) {
        this.$emit('pageTo', '')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .pagination {
    width: 100%;
    display: inline-block;
    padding-left: 0;
    margin: 20px auto;
    border-radius: 4px;
    text-align: center;
    li {
      display: inline-block;
      position: relative;
      padding: 6px 12px;
      margin-left: -1px;
      line-height: 1.42857143;
      color: #19bde8;
      text-decoration: none;
      background-color: #fff;
      border: 1px solid #ddd;
      cursor: pointer;
      &:first-child{
        margin-left: 0;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &:hover, &:focus{
        color: #2a6496;
        background-color: #eee;
        border-color: #ddd;
      }
    }
    .pagination--active{
      z-index: 2;
      color: #fff;
      cursor: default;
      background-color: #428bca;
      border-color: #428bca;
      &:hover, &:focus{
        color: #fff;
        background-color: #428bca;
        border-color: #428bca;
      }
    }
    .pagination--disabled{
      color: #777;
      cursor: not-allowed;
      background-color: #fff;
      border-color: #ddd;
      &:hover, &:focus{
        color: #777;
        background-color: #fff;
        border-color: #ddd;
      }
    }
  }

  .pagination-lg > li > a,
  .pagination-lg > li > span {
    padding: 10px 16px;
    font-size: 18px;
  }
  .pagination-lg > li:first-child > a,
  .pagination-lg > li:first-child > span {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .pagination-lg > li:last-child > a,
  .pagination-lg > li:last-child > span {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .pagination-sm > li > a,
  .pagination-sm > li > span {
    padding: 5px 10px;
    font-size: 12px;
  }
  .pagination-sm > li:first-child > a,
  .pagination-sm > li:first-child > span {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .pagination-sm > li:last-child > a,
  .pagination-sm > li:last-child > span {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
</style>
