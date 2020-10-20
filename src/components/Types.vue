<template>
  <div class="type">
      <Icon name="left" class="left"/>
      <p>记一笔账</p>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
</template>

<script lang="ts">
export default {
  name: 'Types',
}
</script>
<style lang="scss" scoped>
.type{
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 8px 12px;
  background: white;
  .left{
    width: 1.5em;
    height: 1.5em;
  }
  >ul{
    background: #E8ECEF;
    border-radius: 5px;
  }
  > ul li{
    font-size: 14px;
    display: inline-block;
    padding:0 6px;
    border-radius: 4px;
    margin:3px;
    &.selected{
      background: white;
    }
  }
}


</style>