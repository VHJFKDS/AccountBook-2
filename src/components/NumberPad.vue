<template>
  
   <div class="numberPad">
      <div class="output-wrapper">
        
        <label class="notes">
          <input type="text"  
          v-model="value"
          placeholder="内容备注"/>
        </label>
        <div class="output">{{output}}</div>
      </div>

      <div class="buttons">
        <div class="number">
        <button @click="inputContent">1</button>
        <button @click="inputContent">2</button>
        <button @click="inputContent">3</button>

        <button @click="inputContent">4</button>
        <button @click="inputContent">5</button>
        <button @click="inputContent">6</button>

        <button @click="inputContent">7</button>
        <button @click="inputContent">8</button>
        <button @click="inputContent">9</button>
        
        <button @click="clear">清零</button>
        <button @click="inputContent" >0</button>
        <button @click="inputContent">.</button>
</div>
       <div class="tool">
        <button class="day">day</button>
        <button @click="remove">
          <img src="../assets/img/left.png">
        </button>
        <button @click="ok" class="ok">OK</button>
</div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue{

  output = '0';
  result = 0;
  value = '';
  

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
  

    if(this.output.indexOf('.')>=1 && input === '.'){return}
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
    display: flex;
    @extend %clearFix;
    height: 100%;
    .number{
      width: 80%;
    @extend %clearFix;

      button{
      width: 30%;
      height: 17%;
      float: left;
      border: 2px solid black;
      background: white;
      border-radius:10px ;
      margin: 1%;
      font-family:UD Digi Kyokasho NP-B;
      font-size: 20px;
    }
    }
    
  }
}

.tool{
    width: 20%;
    @extend %clearFix;

     button{
      width: 100%;
      height: 17%;
      float: left;
      border: 2px solid black;
      background: white;
      border-radius:10px ;
      margin: 4% 4% 4% -6%;
      font-family:UD Digi Kyokasho NP-B;
      font-size: 20px;
      &.day{
        background: #F2A8A0;
      }
     &.ok{
       height: 36%;
       background: #F0C50C;
     }
     img{
         width: 30px;
         height: 15px;
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