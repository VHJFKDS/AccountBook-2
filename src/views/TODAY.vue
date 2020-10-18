
<template>
  <div>
      <Layout>

      <div  class="wrapper">
      <p>今日支出</p>
      <p class="expend">￥${}</p>
      <p class="income">收入￥${}</p>

      <router-link to="/money" class="button">
      记一笔
      </router-link>
</div>
      </Layout>
  </div> 
</template>

<script lang="ts">
export default {
  name: 'TODAY',
}
</script>
<style lang="scss" scoped>

.wrapper{
    display:flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}
</style>