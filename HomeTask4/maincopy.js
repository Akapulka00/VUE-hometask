"use strict"

const addImage={
  emits: ['addLouder'],
  data() {
    return {
    lodet:{
      imgs:"",
      names:"",
    }
    }
  },

  methods: {
  add(){
    return this.lodet;
  }
  },
  template: `
<h2>Добавление картинки:</h2>
<label for="address">Расположение картинки:</label>
<input type="text" name="address" id="address" v-model.trim="lodet.imgs">
<label for="address">Имя для картинки</label>
<input type="text" name="img_name" id="img_name "  v-model.trim="lodet.names">
<button  @click="$emit('addLouder', add())">Добавить изображение</button>`
}
const galery={
  data() {
    return {
      data:
      [
        {
        imgs:"img/1.jpg",
        names:"img/1.jpg"
      },
      {
        imgs:"img/2.jpg",
        names:"img/2.jpg"
      },
      {
        imgs:"img/3.jpg",
        names:"img/3.jpg"
      },
      {
        imgs:"img/4.jpg",
        names:"img/4.jpg"
      },
      {
        imgs:"img/5.jpg",
        names:"img/5.jpg"
      },

       ]
    }
  },

  methods: {
    changeImg(elem){
      console.log(elem);
      this.data.push(elem);
          console.log(this.data);
        }
  },
  template: `<section >
  <div v-for="elem in this.data">
    <p>{{elem.names}}</p>
    <img :src="elem.imgs" alt="">
  </div>
  </section>`
}
let app = Vue.createApp({
  data(){
    return {

    }
  },
  methods: {

  }
});
app.component('add-image', addImage);
app.component('gal', galery);
app.mount("#app");
