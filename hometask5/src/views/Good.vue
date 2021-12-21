<template>
  <div v-if="Egoods==0 " class="noGoods">
    <h1>Товар отсутствует</h1>
  </div>

  <div v-else>
    <h1 class="goodTitle"> {{goods.title}}</h1>
    <div class="flex-row">
      <div class="col-4 otstup">
        <img class="goodImage" :src="require(`../assets/images/${goods.image}`)" :alt="goods.title">
      </div>
      <div class="col-4 textInfo otstup">
        <p>Информация о товаре:</p>
        <p >{{goods.description}}</p>
      </div>
      <div class="col-4 otstup ">
        <div class="flex-column">
        <div  class=" otstup zakazBox" >
          <h2  class="goodPrise  ">
            {{goods.price}}₽
          </h2>
          <div v-if="editsGoods(goods.id)" class="flex-column ">
            <div class="col-6 button">
              <p  @click="addGood(goods.id)" class=" red">Добавить</p >
            </div>
            <router-link to="/basket" @click=" addGood(goods.id)"   class=" col-6 redLink  button blue  ">Зказать</router-link >
            <router-view></router-view>

          </div>
          <div v-else class="flex-row " >

              <router-link to="/basket"  class=" col-12 button red redLink cartOfGoods ">Перейти в карзину</router-link >
              <router-view></router-view>

            <div class="col-8  flex-row button">
              <div @click=" addGood(goods.id)"  class="col-4  leftbutt">
                <p class="blue ">+</p>
              </div>
              <p class="textBlack">{{this.$store.getters.editThisCount(goods.id)}}</p>
              <div class=" col-4  leftbutt">
                <p class="blue " @click=" delGood(goods.id)">-</p>
              </div>

            </div>
          </div>
        </div>

          <div class=" otstup">

          </div>
      </div>
      </div>
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
    ...mapMutations(['addGood', 'editThisCount','delGood']),
    editsGoods(id){
      for(let elem  of  this.$store.state.korzina){
        if(elem.id==id){
          return false;
        }
      }
      return true;
    }
  },
  computed: {
    goods(){
      return this.$store.state.editGood;
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
<style>
.noGoods{
  color: #f91155;
}
.goodTitle{
color: black;
  text-align: left;
  border-bottom: 1px solid #c2c2c2;
}
.textInfo{
  text-align: left;
}
.otstup{
  padding: 1rem .5rem;
}
.zakazBox{
  padding: 1rem 2rem;
  border: 3px solid #c2c2c2;
  width: 100%;
  border-radius: 20px;

}
.blue{
  background-color: #005bff;
}
.red{
  background-color: #f91155;
}
.button{
  font-size: 20pt;
  color: white;
  padding-left: .3rem;
}
.button *{
  padding: 0 .5rem;
  border-radius: 10px;
}
.leftbutt{
  padding-left: .1rem;
}
.textBlack{
  color: black;
}
.redLink{
  padding: 0 0.5rem;
  border-radius: 10px;
  text-decoration: none;

}
</style>
