// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){ 
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.929800, 30.358685],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 12
        });
         // Создаём макет содержимого.
         MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        burgerOne = new ymaps.Placemark([59.972432, 30.310877], {
            hintContent: 'Mr.Burger',
            balloonContent: 'Mr.Burger #1'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [47, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-23, -60]
        }),

          burgerTwo = new ymaps.Placemark([59.945347, 30.377846], {
            hintContent: 'Mr.Burger',
            balloonContent: 'Mr.Burger #2'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [47, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-23, -60]
        }),
        burgerThree = new ymaps.Placemark([59.917993, 30.494404], {
            hintContent: 'Mr.Burger',
            balloonContent: 'Mr.Burger #3'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [47, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-23, -60]
        }),
        burgerFour = new ymaps.Placemark([59.890657, 30.313498], {
            hintContent: 'Mr.Burger',
            balloonContent: 'Mr.Burger #3'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [47, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-23, -60]
        }),
        
        myMap.geoObjects
        .add(burgerOne)
        .add(burgerTwo)
        .add(burgerThree)
        .add(burgerFour);
    }