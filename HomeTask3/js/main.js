"use strict"

let articles =  [
  {
     title: "Нейросеть может читать текст быстрее человека",
     image: "https://picsum.photos/id/22/1000/1000"
  },
  {
     title: "Пять сервисов, которые помогут написать статью за 5 минут",
     image: "https://picsum.photos/id/24/1000/1000"
  },
  {
     title: "Названы основные правила движения поездов",
     image: "https://picsum.photos/id/28/1000/1000"
  },
  {
     title: "Самая посещаемая достопримечательность мира",
     image: "https://picsum.photos/id/27/1000/1000"
  },
  {
     title: "Появился новый термин для обозначения радиоволн",
     image: "https://picsum.photos/id/29/1000/1000"
  },
  {
     title: "В России появится новый вид бумаги",
     image: "https://picsum.photos/id/30/1000/1000"
  }
];
let arrTitles =[];
for(let elements of articles){
  arrTitles.push(elements);
   }
Vue.createApp({
  data(){
    return{
      articles,
      tabTitles:["Отобразить сеткой", "Отобразить списком"],
      currentTabTitle:"Отобразить сеткой",
      titelText:"",
      findetTitles:arrTitles,
    }
  },
  computed: {//тут гетеры живут

},

methods: { // тут любые функции
  elem1(){
    this.currentTabTitle=this.tabTitles[0];
    console.log(this.currentTabTitle);
},
elem2(){
  this.currentTabTitle=this.tabTitles[1];
  console.log(this.currentTabTitle);
},
findText(){
  this.findetTitles=[];
  for(let elements of this.articles){
   if(elements.title.toLowerCase().includes(this.titelText.toLowerCase())){
    this.findetTitles.push(elements);
    console.log(elements);
    }
  }
}
}
}).mount("#app");
