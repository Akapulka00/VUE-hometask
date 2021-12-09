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
    let buff={//Короче этот костыль сделан чтобы исбавится от ревктивности данных т.к картинка изменялаь из за передачи обекта целеком я же копирую методы объекта
      imgs: this.lodet.imgs,
      names:this.lodet.names,
    };
    return buff;
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
    }
  },

  methods: {

  },
  template: `dfas`
}
let app = Vue.createApp({
  data(){
    return {
      data:
      [
        {
        imgs:"img/1.jpg",
        names:"Js"
      },
      {
        imgs:"img/2.jpg",
        names:"тоже Js"
      },
      {
        imgs:"img/3.jpg",
        names:"тоже тоже Js"
      },
      {
        imgs:"img/4.jpg",
        names:"тоже тоже  тоже Js"
      },
      {
        imgs:"img/5.jpg",
        names:"тоже тоже  тоже тоже Js"
      },

       ]
    }
  },
  methods: {
    changeImg(elem){
  this.data.push(elem);
    },
    del(elem){
      this.data= this.data.filter((a)=>{return  a!==elem});
    }
  }
});
app.component('add-image', addImage);
app.component('gal', galery);
app.mount("#app");
