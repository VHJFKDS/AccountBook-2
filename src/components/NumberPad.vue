<template>
  
   <div class="numberPad">
      <div class="output-wrapper">
        
        <label class="notes">
          <input type="text" placeholder="内容备注"/>
        </label>
        <div class="output">{{output}}</div>
      </div>

      <div class="buttons">
        <button @click="inputContent">1</button>
        <button @click="inputContent">2</button>
        <button @click="inputContent">3</button>
        <button @click="remove">
          <img src="../assets/img/left.png">
        </button>
        <button @click="inputContent">4</button>
        <button @click="inputContent">5</button>
        <button @click="inputContent">6</button>
        <button @click="plus">+</button>
        <button @click="inputContent">7</button>
        <button @click="inputContent">8</button>
        <button @click="inputContent">9</button>
        <button @click="minus">-</button>
        <button @click="clear">清零</button>
        <button @click="inputContent" class="zero">0</button>
        <button @click="inputContent">.</button>
        <button @click="ok" class="ok">OK</button>

      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue{
  output = '0';

  
  inputContent(event: MouseEvent){
    const button = event.target as HTMLButtonElement
    const input = button.textContent as string

    if(this.output.length === 11){return}
    if(this.output === '0'){
      if('0123456789'.indexOf(input) >=0 ){
        this.output = input
      }else{
        this.output +=input
      }
      return
    }
    if(this.output.indexOf('.')>=0 && input === '.'){return}
     this.output += input
  }

remove(){
  if(this.output.length === 1){
    this.output = '0'
  }else{
  this.output = this.output.slice(0,-1)
  }

}
clear(){
 this.output = '0'
}
plus(){
console.log(this.inputContent)
}
minus(){

}
ok(){
 
}


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
      width: 120px;
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