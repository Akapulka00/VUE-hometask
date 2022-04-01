# VUE-hometask
Здесь будут храниться мои задачки  VUE
# Vue

## Домашнее задание (занятие 1)
Дан массив, вывести информацию и животных в html. 
Необходимо добавить стилей, чтобы карточки выглядели красиво. 
Под каждой карточкой добавить кнопку-ссылку 'Подробнее'.


    let cats = [
           {
               name: "Люся",
               age: "1 год",
               color: "трехцветная",
               img: "https://picsum.photos/id/219/1000/1000"
           },
           {
               name: "Макс",
               age: 4,
               color: "серый",
               img: "https://picsum.photos/id/1074/1000/1000"
           },
           {
               name: "Василий",
               age: 1,
               color: "трехцветный",
               img: "https://picsum.photos/id/593/1000/1000"
           }
       ];


## Домашнее задание (занятие 2)
1. Вывод информации о товарах. 


          let goods = [
             {
                title: "Пианино",
                price: 3000,
                count: 0
             },
             {
                title: "Гитара",
                price: 1200,
                count: 40
             },
             {
                title: "Барабаны",
                price: 2700,
                count: 12
             },
             {
                title: "Флейта",
                price: 900,
                count: 50
             },
             {
                title: "Арфа",
                price: 3400,
                count: 5
             }
          ];


   1) Вывести информацию о товарах в html, по каждому товару вывести: название и стоимость (количество в html выводить не нужно).
   2) Выводить в отсортированном по count виде.
   2)* Реализовать возможность вывода в отсортированном по названию, стоимости или количеству виде
   3) В css создать 3 класса (zero, not-many, many) для выделения товаров в зависимости от значения count:
       * если значение count равно 0, карточке с товаром добавляется класс zero,
       * если значение count от 1 до 20, карточке с товаром добавляется класс not-many,
       * если значение count от 20, карточке с товаром добавляется класс many.

2. Реализовать два режима отображения статей (сеткой и списком) через переключение css классов:


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
  

   1) Если пользователь нажимает кнопку 'Отобразить сеткой', статьи отображаются сеткой, как на изображении [tasks-images/hometask-2-grid.jpeg](lesson2/tasks-images/hometask-2-grid.jpeg)
   2) Если пользователь нажимает кнопку 'Отобразить списком', статьи отображаются списком, как на изображении [tasks-images/hometask-2-list.jpeg](lesson2/tasks-images/hometask-2-list.jpeg)


## Домашнее задание (занятие 3)

1. Реализовать регистронезависимый поиск по названию статьи. 
   1) В качестве данных используйте массив статей из ДЗ #2.
   2) В html добавить поле для поиска статьи по названию (пользователь может ввести название полностью или его часть).
   3) Ниже поля выводятся статьи, подходящие под запрос пользователя.

2. Отобразить стоимость услуг.


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


   1) Вывести в html названия услуг и их стоимость
   2) Реализовать возможность выбора услуг из списка 
   3) Ниже списка отображать итоговую стоимость выбранных пользователем услуг.
   4) Если пользователь отменяет выбор, стоимость должна пересчитываться 


3. Разобрать по документации, как работает v-model.lazy      


## Домашнее задание (занятие 4)
Реализовать редактируемую галерею изображений.
    1) У каждого изображения галереи должны быть: название, изображение и кнопка, позволяющая удалить соответствующее изображение из галереи.
    2) Реализовать возможность добавить новое изображение в галерею, путём добавления названия изображения и пути к файлу картинки.
    3) Задача должна быть решена через создание взаимосвязанных компонентов (например: «галерея» родительский компонент, а карточка изображения – это дочерний элемент).


## Домашнее задание (занятия 6 - 8)
Массив данных, необходимый для решения задачи, в файле [task6/data.js](task6/data.js), изображения в директории [images](task6/images)
1. При выполнении задачи использовать: Vue-CLI, Vue, Router, Vuex.
2. Необходимо вывести информацию о всех товарах (если значение свойства `count` равно 0, вывести `Товара нет в наличии`, 
в значении свойства `description` вывести `первые 15 символов`).
3. Реализовать возможность перехода на страницу с подробным описанием товара (значение свойства `description` вывести полностью).
4. Реализовать возможность добавления товара в корзину (хранилище vuex).
5. На каждой странице отображать, сколько товаров добавлено в корзину.
6. Карточку товара реализовать как отдельный компонент.

**Дополнительно:** Реализовать корзину:
1. На отдельной странице (компоненте) отображать названия добавленных в корзину товаров.
2. Реализовать возможность увеличить/уменьшить количество товара в корзине.
3. Реализовать возможность удалить товар из корзины.
4. Отображать стоимость каждого товара и итоговую стоимость всех товаров в корзине.


        