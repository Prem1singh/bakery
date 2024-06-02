var ham=document.querySelector('#ham');
var nav11=document.querySelector('.togglenav');
ham.addEventListener(
    'click',
    ()=>{
        nav11.classList.toggle('l0');
        ham.classList.toggle('fa-xmark');
        ham.classList.toggle('fa-bars');
        document.body.classList.toggle('outer');
    }
)
var overlay1=document.querySelector('.overlay1')
overlay1.addEventListener(
    'click' , ()=>{
        nav11.classList.toggle('l0');
        ham.classList.toggle('fa-xmark');
        ham.classList.toggle('fa-bars');
        document.body.classList.toggle('outer')
    }
)
var nav= document.querySelector('.navigation');

document.addEventListener(
    'scroll',
    (e)=>{
     if(window.scrollY>=56){
        document.body.classList.add('outer1');
        nav.classList.add('stick');

     }
     else{
        document.body.classList.remove('outer1')
        nav.classList.remove('stick')
     }
    }
)
var catitem=document.querySelectorAll('.divitem');
var catimg=document.querySelectorAll('.catimg');
var catname=document.querySelectorAll('.catname');

for (let i = 0; i < catitem.length; i++) {
    catitem[i].addEventListener(
    'mouseover',()=>{
     catimg[i].style.transform="scale(1.1)";
     catname[i].style.color="#d1ab7f";
    },
    catitem[i].addEventListener(
        'mouseout',()=>{
            catimg[i].style.transform="scale(1)";
     catname[i].style.color="black";
        }
    )
)
}

$(document).ready(function(){
    $('.autoplay').slick({
        dots:false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
    
    
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});
