<template>
    <div class="news-block">
      <a class="news-block__title" target="_blank" :href="obj.url" >{{obj.title}}</a>
      <div class="news-block__score">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" enable-background="new 0 0 50 50">
          <path d="M15.2 40.6c-.2 0-.4-.1-.6-.2-.4-.3-.5-.7-.4-1.1l3.9-12-10.2-7.5c-.4-.3-.5-.7-.4-1.1s.5-.7 1-.7h12.7L25 5.9c.1-.4.5-.7 1-.7s.8.3 1 .7L30.9 18h12.7c.4 0 .8.2 1 .6s0 .9-.4 1.1L34 27.1l3.9 12c.1.4 0 .9-.4 1.1s-.8.3-1.2 0L26 33l-10.2 7.4c-.2.1-.4.2-.6.2zM26 30.7c.2 0 .4.1.6.2l8.3 6.1-3.2-9.8c-.1-.4 0-.9.4-1.1l8.3-6.1H30.1c-.4 0-.8-.3-1-.7L26 9.5l-3.2 9.8c-.1.4-.5.7-1 .7H11.5l8.3 6.1c.4.3.5.7.4 1.1L17.1 37l8.3-6.1c.2-.1.4-.2.6-.2z"/>
        </svg>
        <p>{{obj.score}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'NewsBlock',
  props: {
    obj: Object
  }
}
</script>

<style lang="scss" scoped>
  .news-block{
    width: 350px;
    margin: 10px auto;
    border: 2px solid #dbdbdb;
    background: linear-gradient(to bottom, #dbdbdb 0%, #fefefe 100%);
    padding: 15px;
    border-radius: 5px;
    font-family: Roboto sans-serif;
  }
  .news-block__title{
    cursor: pointer;
    text-decoration: none;
    text-shadow: 1px 1px 0 rgba(0,0,0,0.1);
    font-size: 17px;
    color: #000;
    font-weight: bold;
    transition: color .2s;
    &:hover,&:focus{
      color: #19bde8;
    }
  }
  .news-block__score{
    width: 100%;
    text-align: right;
    padding-top: 5px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    svg{
      display: inline-block;
      width: 20px;
      height: 20px;
      fill: darkorange;
    }
    p{
      margin: 0;
      display: inline-block;
    }
  }
</style>
