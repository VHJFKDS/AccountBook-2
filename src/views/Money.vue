import Icon from '@/components/Icon.vue';

<template>
  <div class="container">
    <div class="type">
      <Icon name="left" class="left"/>
      <p>记一笔账</p>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>

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

    <div class="numberPad">
      <div class="output-wrapper">
        
        <label class="notes">
          <input type="text" placeholder="内容备注"/>
        </label>
        <div class="output">100</div>
      </div>

      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button class="clear">
          <img src="../assets/img/left.png">
        </button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>清零</button>
        <button class="zero">0</button>
        <button>.</button>
        <button class="ok">OK</button>

      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
export default {
  name: "Money",
};
</script>
<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

.container{
  background: #F9FAF5;
  height: 100vh;
  
}
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
 
  .output-wrapper{
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    overflow: hidden;
    justify-content: space-between;
    align-content: center;
    background: white;
    margin: 0 3px;
    .notes {
    font-size: 16px;
    
    input{
      border: none;
      width: 200px;
      line-height: 40px;
      padding: 0 10px;
    }
    
  }
  .output{
      line-height: 39px;
      padding: 0 10px;
      font-weight: 800;
      font-family: UD Digi Kyokasho NP-B;
      font-size: 20px;
    }
  }
  
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
.numberPad{
  background: #9bcac2;
  padding: 14px 8px;
    border-top: 2px solid black;
   height: 50%;
  .buttons{
    margin-top: 5px;
    @extend %clearFix;
    > button{
      width: 23%;
      height: 43px;
      float: left;
      border: 2px solid black;
      background: white;
      border-radius:10px ;
      margin: 1%;
      font-family:UD Digi Kyokasho NP-B;
      font-size: 20px;
      &.ok{
        height: 43px;
        background:#F1C50C;
      }
      &.zero{
        width: 23%;
      }
      img{
         width: 30px;
         height: 25px;
         margin: 12px;
      }
    }
  }
}


</style>