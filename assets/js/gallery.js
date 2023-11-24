// Din cool code here

//Add pictures in gallery 
const picture = ['elephant.jpg', 'great-white.jpg','koala.jpg','smithi.jpg','tiger.jpg'];

buildGallery();

//bygger galleri udfra min array Images

function buildGallery(){
  const myGalleryElement=document.getElementById('app');

  picture.forEach(image => {
  buildCard('assets/img/'+ image, myGalleryElement)
});
}
//bygger article tag med img 
function buildCard(imageUrl, myGalleryElement){
  console.log(imageUrl);

  const myArticle = document.createElement('article');
  const myImage = document.createElement('img');
  myImage.src = imageUrl;

// gallery forsvinder
myImage.addEventListener('click', (event) =>{
   myGalleryElement.innerHTML=' ';
  
});
   myArticle.appendChild(myImage);

   myGalleryElement.appendChild(myArticle);
}
  
// billedet vises alene





  


   


