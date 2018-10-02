<template>
  <p class="error">Server error</p>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style lang="scss" scoped>
  .error{
    font-size: 2vw;
    margin: 20px auto;
    text-align: center;
    font-family: sans-serif;
    text-transform: uppercase;
    color: rgb(124, 124, 124);
    letter-spacing: 0.5px;
    line-height: 12px;
    font-weight: bold;
  }
</style>
