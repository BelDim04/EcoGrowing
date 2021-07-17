ymaps.ready(init);

const data = [
    {
        id: 1,
        name: 'Огурец',
        coordinates: [[43.11, 131.88], [55.79, 49.11]]
    },
    {
        id: 2,
        name: 'Помидор',
        coordinates: [[59.93, 30.31], [56.01, 92.85]]
    }

];

function init() {
//--------------------Controls-------------------------//
    const searchControl = new ymaps.control.SearchControl({
        options: {
            noPlacemark: true
        }
    });


    const map = new ymaps.Map('map', {
        center: [67.31,98.27],
        zoom: 3,
        controls: ['zoomControl',searchControl],
        behaviors: ['drag','dblClickZoom']
    });
    searchControl.events.add('resultshow', function () {
        map.setZoom(7)
    },this);


    const location = ymaps.geolocation;
    const Button = new ymaps.control.Button({
        data: {
            image: 'map/img/geopositionbutton.png'
        },
        options: {
            float: 'right',
            selectOnClick: false
        }
    });
    map.controls.add(Button);
    Button.events.add('click', function () {
        location.get({
            provider: 'browser'
        }).then(
            function(result) {
                map.setCenter(result.geoObjects.get(0).geometry.getCoordinates(), 7);
            })
    });
    //------------------------------------------------------------------------------------//


    const setlocation = () => location.get({
        provider: 'browser'
    }).then(
        function(result) {
            map.geoObjects.add(result.geoObjects)
            map.setCenter(result.geoObjects.get(0).geometry.getCoordinates(), 7);
        }
    );

    setlocation();

    const elements=document.getElementsByClassName("plantBtn");

    Array.from(elements).forEach((el) =>{
        el.addEventListener('click',() => {
            map.geoObjects.removeAll();
            setlocation();
            const coordinates=data.find(plant => plant.id.toString()===el.getAttribute('id')).coordinates;
            coordinates.map((coor) =>{
                map.geoObjects.add(new ymaps.Placemark(coor,{},{}));
            })
        })
    })


}