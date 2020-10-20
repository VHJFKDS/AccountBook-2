<template>
  
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
</template>

<script lang="ts">
export default {
  name: 'NomberPad',
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

.numberPad{
  background: #9bcac2;
  padding: 14px 8px;
    border-top: 2px solid black;
   height: 52%;
  .buttons{
    margin-top: 5px;
    @extend %clearFix;
    height: 100%;
    > button{
      width: 23%;
      height: 15%;
      float: left;
      border: 2px solid black;
      background: white;
      border-radius:10px ;
      margin: 1%;
      font-family:UD Digi Kyokasho NP-B;
      font-size: 20px;
      &.ok{
        height: 15%;
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
</style>