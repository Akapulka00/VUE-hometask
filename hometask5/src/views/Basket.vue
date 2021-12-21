<template>
  <div>
 <div v-if="korzsGoods() ">
   <div class="flex-column" v-for="good in goods" :key="good.id">
     <div  class="flex-row between" v-if="korzelem(good.id) ">
       <img class="goodImage col-2" :src="require(`../assets/images/${good.image}`)" :alt="good.title">
       <h4>{{good.title}}</h4>
       <h2  class="">
         {{good.price}}₽
       </h2>
       <p>{{this.$store.getters.getGoods(good.id)}}</p>
     </div>
   </div>
 </div>
    <div v-else >
      <p>hell</p>
    </div>

  </div>
</template>
<script>
import {mapMutations} from "vuex";

export default {
  data(){
    return{
    }

  },
  methods: {
    ...mapMutations(['addGood']),
    korzsGoods(){
      {
        let count=this.$store.state.korzina.length;
        console.log(count);
        if(count<2){
          return false;
        }
        return true;
      }

    },
    korzelem(id){
        let korz=this.$store.state.korzina;
        for(let elem of korz){
          if(elem.id==id){
            return true;
          }
        }
        return false;
    }
  },
  computed: {
    goods(){
      return this.$store.state.goods;
    },
    Egoods(){
      return this.$store.state.editGood;
    },
    korzina(){
      return this.$store.state.korzina;
    }


  },
}
</script>
