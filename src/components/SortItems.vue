<template>
    <div class="sort-items">
      <h1 class="sort-items__title">world news</h1>
      <div class="sort-items__item">
        <p>on the page:</p>
        <select class="sort-items__select" v-model="itemsValue" @change="onThePage(itemsValue)">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
      <div class="sort-items__item">
        <p>sort:</p>
        <select class="sort-items__select" v-model="sort" @change="sortItems(sort)">
          <option value="hot">hot</option>
          <option value="new">new</option>
          <option value="controversial">controversial</option>
          <option value="top">top</option>
          <option value="rising">rising</option>
        </select>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SortItems',
  data: function () {
    return {
      itemsValue: 5,
      sort: 'hot'
    }
  },
  methods: {
    onThePage: function (num) {
      this.$emit('onThePage', num)
    },
    sortItems: function (str) {
      this.$emit('sortItems', str)
    }
  },
  created: function () {
    this.onThePage(this.itemsValue)
  }
}
</script>

<style lang="scss" scoped>
.sort-items{
  width: 100%;
  background: linear-gradient(to bottom, #dbdbdb 0%, #fefefe 100%);
  text-align: center;
  padding: 10px 0;
  border-bottom: 2px solid #dbdbdb;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  &__title{
    width: 100%;
    margin: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 20px;
    color: rgba(0,0,0,.9);
    font-family: serif;
  }
}
.sort-items__item{
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  text-transform: uppercase;
  font-family: sans-serif;
  &:last-child{
    margin: 0;
  }
  p{
    margin: 0;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 12px;
    text-transform: uppercase;
    color: rgb(124, 124, 124);
    font-family: serif;
  }
  select{
    margin-left: 5px;
    border: 2px solid #dbdbdb;
    border-radius: 5px;
    outline: none;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    &:hover{
      border: 2px solid #19bde8
    }
    option{
      border: 2px solid #dbdbdb;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
}
</style>
