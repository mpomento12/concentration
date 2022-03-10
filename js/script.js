let imagesArray = [{
    name: 'newyork',
    img: './pictures/newyork.png',
},
{
    name: 'newyork',
    img: './pictures/newyork.png',
},
{
    name: 'city',
    img: './pictures/city.png',
},
{
    name: 'city',
    img: './pictures/city.png',
},
{
    name: 'cab',
    img: './pictures/cab.png',
},
{
    name: 'cab',
    img: './pictures/cab.png',
},
{
    name: 'skyline',
    img: './pictures/skyline.png',
},
{
    name: 'skyline',
    img: './pictures/skyline.png',
},
{
    name: 'shanghai',
    img: './pictures/shanghai.png',
},
{
    name: 'shanghai',
    img: './pictures/shanghai.png',
},
{
    name: 'timessquare',
    img: './pictures/timessquare.png',
},
{
    name: 'timessquare',
    img: './pictures/timessquare.png',
},
];


    let randomizedArray =[]
function randomArray(array){
    for (j = array.length -1; j > 0; j--) {
         
        let random = Math.floor(Math.random () * ( j + 1 ))
        let temp = array[j]
        array[j] = array[random]
        array[random] = temp
    }
    return array
}
let arr = randomArray(imagesArray)
      
    let recentlyClicked = [];
    for (let i = 0; i < arr.length; i++) {
        let img = document.getElementById('sq' + i)
        img.style.backgroundImage = "url(" +  arr[i].img + ")"
        img.classList.add('hidden')
    }
        let table = document.querySelector('tbody')
        table.addEventListener('click', function (event) {
           let cell = document.getElementById(`${event.target.id}`)
           cell.classList.remove('hidden')
           recentlyClicked.push(event.target.id)
           for (let i = 0; i < recentlyClicked.length; i++) {
                   if (recentlyClicked.length <= 2 && 
                    (document.getElementById(`${recentlyClicked[0]}`).style.backgroundImage !== document.getElementById(`${recentlyClicked[1]}`).style.backgroundImage)) {
                       setTimeout(() => {
                         let uncell = document.getElementById(`${recentlyClicked[i]}`)
                         uncell.classList.add('hidden')
                       }, 1000)

                       setTimeout(() => {
                          recentlyClicked = []
                       }, 1050)
        
               } 
                        setTimeout(() => {
                           recentlyClicked = [] 
        
                       }, 1075)
                       
                    }
                
                    
                
                })
    
                    

        
         
    
        
    
            
    





