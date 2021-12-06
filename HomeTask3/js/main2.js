
"use strict"

let services =  [
  {
      title: "Женская стрижка на длинные волосы",
      price: 2000
  },
  {
      title: "Стрижка челки",
      price: 300
  },
  {
      title: "Детская стрижка (до 7 лет)",
      price: 700
  },
  {
      title: "Мужская стрижка",
      price: 1000
  },
  {
      title: "Коррекция бороды",
      price: 1200
  },
  {
      title: "Тонирование мужских волос",
      price: 1500
  },
  {
      title: "Окрашивание волос",
      price: 5000
  },
  {
      title: "Женский маникюр",
      price: 1500
  },
  {
      title: "Мужской маникюр",
      price: 1700
  },
  {
      title: "Педикюр",
      price: 2500
  },
  {
      title: "Покрытие гель-лаком",
      price: 1500
  }
];

Vue.createApp({
  data(){
    return{
    services ,
    all_services: [],
    sum:0,
    }
  },
  computed: {//тут гетеры живут

},

methods: { // тут любые функции
  vibor(elem){
    let flag=true;
    if(this.all_services.length>0){
    for(let index of this.all_services){
      if(index.title.includes(elem.title)){
        flag=false;
      }
    }
  }
    if(flag){
      console.log("Да")
      this.all_services.push(elem);
      this.summ();
    }else{
      console.log("Нет")
    }
  },
  summ(){
    let count=0;
    for(let elem of this.all_services){
      count+=elem.price;
    }
    this.sum=count;
  },
  del(elem){
    this.all_services = this.all_services.filter((n) => {return n !== elem});
    this.summ();
  }

}
}).mount("#app");
