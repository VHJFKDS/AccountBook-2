
<template>
  <div class="type">
      <Icon name="left" class="left"/>
      <p>记一笔账</p>
      <ul class="types">
        <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
        <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
      </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue{
  type = '-' //'-'表示支出，+表示收入

  @Prop(Number) xxx: number | undefined;

  selectType(type: string){
      if(type !== '-' && type !== '+'){
          throw new Error('type is unknow')
      }
      this.type = type
  }
  
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