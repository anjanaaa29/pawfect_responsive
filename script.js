var signin=document.querySelector('.btn')
var page=document.querySelector('.wrapper')

signin.addEventListener('click',function(){
    page.style.display='flex'
})

var close_btn=document.querySelector('.icon-close')

close_btn.addEventListener('click',function(){
    page.style.display='none'
})