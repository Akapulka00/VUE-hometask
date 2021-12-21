<template>
<div class="galeryOfGoods" >
  <router-link to="/good" @click="addEdit(good.id)" class="cartOfGoods flex-column col-3 between"  v-for="good in goods" :key="good.id">
    <img class="goodImage col-6" :src="require(`../assets/images/${good.image}`)" :alt="good.title">
    <div  v-if="good.count==0" class="">
      <h3 class="goodPrise ">Товара нет в наличии!</h3>
    </div>
    <div v-else class="col-3 w100">
      <h2  class="goodPrise ">
        {{good.price}}₽
      </h2>
      <div class="goodInfo flex-row  Gtext">
        <h4>{{good.title}} </h4><p>{{this.$store.getters.goodsText(good)}}...</p>
      </div>
    </div>
    </router-link>
  <router-view></router-view>
</div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  methods: {
    ...mapMutations(['addEdit']),
  },
  computed:{
    goods(){
      return this.$store.state.goods;
    },
    Egoods(){
      return this.$store.state.editGood;
    },

  }
}
</script>
<style>
 @import "../assets/flex-grid.css";
.galeryOfGoods{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.line {
  display: inline-block;
}
.cartOfGoods{
  padding: .5rem 2rem;
  text-decoration: none;
  text-align: center;
}
 .cartOfGoods *{
   text-decoration: none;
 }
 .goodImage{
   width: 100%;
   height: auto;
 }
 .goodPrise{
   text-align: left;
   color: #f91155;
 }
 .goodInfo *{
   display: inline;
   text-align: left;
   padding-left:3px;
   color:#001a34 ;
 }
 .between{
   justify-content: space-between;
 }
 .w100 {
   max-width: 70%;
   width: 100%;
 }
 .Gtext *{
   margin: 0;
 }

</style>
