const data = [
    {
        title: 'Mac',
        img: "img/mac.png"
    },
    {
        title: 'iPhone',
        img: 'img/iphone.png'
    },
    {
        title: 'iPad',
        img: 'img/ipad.png'
    },
    {
        title: 'Apple Watch',
        img: 'img/apple watches.png'
    },
    {
        title: 'AirPods',
        img: 'img/airpods.png'
    },
    {
        title: 'AirTag',
        img: 'img/airtag.png'
    },
    {
        title: 'Apple TV',
        img: 'img/apple tv.png'
    },
    {
        title: 'HomePod mini',
        img: "img/homepod mini.png"
    },
    {
        title: 'Accessories',
        img: 'img/accessories.png'
    },
]
let box = document.querySelector('.box')
function reload(){
for(let item of data){
    let elem = document.createElement('div')
    let img = document.createElement('img')
    let p = document.createElement('p')

    elem.classList.add('elem')

img.src = item.img
p.innerHTML = item.title

    box.append(elem)
    elem.append(img,p)

}

}

reload()