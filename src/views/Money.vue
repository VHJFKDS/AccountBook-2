
<template>
  <div class="container">
    <Types :xxx="333"/>
    <Tags/>
    <NumberPad/>
  </div>
</template>

<script lang="ts">
import NumberPad from '@/components/NumberPad.vue';
import Tags from '@/components/Tags.vue';
import Types from '@/components/Types.vue';


export default {
  name: "Money",
  components:{NumberPad,Tags,Types}
};
</script>
<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

.container{
  background: #F9FAF5;
  height: 100vh;
  overflow: hidden;
}

 
  
  


</style>