const gallaryItems=document.querySelectorAll('.gallary img');
const lightbox=document.getElementById('lightbox');
const lightboxImage=document.querySelector('.lightbox-img');
const closeBtn=document.querySelector('.close');
const prevBtn=document.querySelector('.prev');
const nextBtn=document.querySelector('.next');
let currentIndex=0;

gallaryItems.forEach((img,index)=>{
    img.addEventListener('click',()=>{
        lightbox.classList.add('show');
        lightboxImage.src=img.src;
        currentIndex=index;
    });
});

closeBtn.addEventListener('click',()=> lightbox.classList.remove('show'));
prevBtn.addEventListener('click',() => showImage(currentIndex - 1));
nextBtn.addEventListener('click',() => showImage(currentIndex + 1));

function showImage(index)
 {
    if (index < 0) index= gallaryItems.length -1;
    if(index >= gallaryItems.length) index =0;
    lightboxImg.src = gallaryItems[index].src;
    currentIndex = index;
 }

 const filterButtons = document.querySelectorAll('.filter-buttons');
 filterButtons.forEach(button => {
    button.addEventListener('click',() => {
        document.querySelector('.filters.active').classList.remove('active');
        button.classList.add('active');
        const filter =button.getAttribute('data-filter');
        
        
    })
 });

 function filterImages(category){
    const images= document.querySelectorAll('.gallary img');
    images.forEach(img => {
        const imgCategory = img.getAttribute('data-category');
        if (category==='All'|| imgCategory === category) {
            img.style.display = 'block';
        } else{
            img.style.display ='none';
        }
    });

 }