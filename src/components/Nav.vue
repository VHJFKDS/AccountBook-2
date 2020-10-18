<template>
<nav>
      <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels"/>
      账单
      </router-link> 
      
      <router-link to="/money" class="item" active-class="selected">
      <Icon name="TODAY"/>
      TODAY</router-link>
      
      <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计</router-link>
</nav>
</template>

<script lang="ts">
export default {
 name:'Nav',
}
</script>


<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

nav{
  background: #f5f5f5;
  display: flex;
  flex-direction: row;
  font-size: 12px;
.item{
  color: $color-word;
  padding: 2px 0;
  width: 33.33333%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .icon{
    width: 32px;
    height: 32px;
    fill: $color-word;
  }
}  
.item.selected{
  color:$color-highlight;
  .icon{
    fill:$color-highlight;
  }
}
}
a{text-decoration: none;}
</style>