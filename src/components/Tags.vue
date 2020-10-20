<template>
  <div class="tags">
      <ul class="current">
        <li class="selected">
         <img src="../assets/img/餐饮.png">
          <p>餐饮</p> 
          </li>
          <li>
         <img src="../assets/img/交通.png">
          <p>交通</p> 
          </li>
          <li>
         <img src="../assets/img/果蔬.png">
          <p>果蔬</p> 
          </li>
          <li>
         <img src="../assets/img/日用.png">
          <p>日用</p> 
          </li>
          <li>
         <img src="../assets/img/email.png">
          <p>通讯</p> 
          </li>
          <li>
         <img src="../assets/img/娱乐.png">
          <p>娱乐</p> 
          </li>
          <li>
         <img src="../assets/img/烟酒.png">
          <p>烟酒</p> 
          </li>
          <li>
         <img src="../assets/img/医疗.png">
          <p>医疗</p> 
          </li>
          <li>
         <img src="../assets/img/服饰.png">
          <p>服饰</p> 
          </li>
          <li>
         <img src="../assets/img/零食.png">
          <p>零食</p> 
          </li>
          <li>
         <img src="../assets/img/宠物.png">
          <p>宠物</p> 
          </li>
          <li>
         <img src="../assets/img/房贷.png">
          <p>房贷</p> 
          </li>
          <li>
         <img src="../assets/img/理财.png">
          <p>理财</p> 
          </li>
          <li>
         <img src="../assets/img/工资.png">
          <p>工资</p> 
          </li>
          <li>
         <img src="../assets/img/书籍.png">
          <p>书籍</p> 
          </li>
          <li>
         <img src="../assets/img/旅游.png">
          <p>旅游</p> 
          </li>
          <li>
         <img src="../assets/img/母婴.png">
          <p>母婴</p> 
          </li>     
      </ul>
    </div>
</template>

<script lang="ts">
export default {
  name: 'Tags',
}
</script>
<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 12px 5px;
  height: 43%;
  overflow: auto;
  > .current {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 100%;
    > li{
      width:20%;
      border-radius: 12px;
      padding: 1px 8px;
      margin: 2px 8px;
      &.selected{
      background: #A0DECF;
      border: 2px solid #9BCAC2;
      }
      img{
    width: 40px;
    height: 40px;
      }
    }
  }
}
</style>