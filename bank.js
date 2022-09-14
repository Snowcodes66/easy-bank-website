const links=document.querySelectorAll('.link')
const ulLinks=document.querySelector('.ul-div')
console.log(ulLinks)

function mouseOver(e , opacity) {
    const li=e.target
    const liSiblings=ulLinks.querySelectorAll('.link')
    liSiblings.forEach(function (sib) {
        if (sib!==li) {
            sib.style.opacity=opacity
        }
    })
}
function mouseout(e , opacity) {
    const li=e.target
    const liSiblings=ulLinks.querySelectorAll('.link')
    liSiblings.forEach(function (sib) {
        if (sib!==li) {
            sib.style.opacity=opacity
        }
    })
}

links.forEach((link)=>{
    link.addEventListener('mouseover',function (e) {  
        mouseOver(e,0.3)
})
})
links.forEach((link)=>{
     link.addEventListener('mouseout',function (e) {
        mouseout(e,1)
     })
})

//sticky nav
const section1=document.getElementById('section--1')
const head=document.querySelector('header')
const navDiv=document.querySelector('.nav-div')
const navHeight=navDiv.getBoundingClientRect().height

function headObserver(entries) {
    const [entry]=entries
    console.log(entry)
    if (!entry.isIntersecting) {
        navDiv.classList.add('sticky')
    }else{
        navDiv.classList.remove('sticky')
    }
}

const obsHead={

    root:null,
    threshold:0,
    rootMargin:`-${(navHeight +40)}px`

}
const header=new IntersectionObserver(headObserver,obsHead)
header.observe(head)

const faBars=document.querySelector('.fa-bars')
const nav=document.querySelector('nav')
const faClose=document.querySelector('.fa-close')
const ulDiv=document.querySelector('.ul-div')



faBars.addEventListener('click',function (params) {  
    nav.style.display='block'
    nav.style.opacity=1
    
        
    
    faBars.style.display='none'
    
    faClose.style.display='block'
    faClose.addEventListener('click',function (params) {
        nav.style.display='none'
        faClose.style.display='none'
        faBars.style.display='block'
    })
})

nav.addEventListener('click',function (e) {
    e.preventDefault()
     const link=e.target
     const getAt=link.getAttribute('href')
     console.log(getAt)
    const select=document.querySelector(getAt)
    select.scrollIntoView({behavior:'smooth'})
  
})
const sections=document.querySelectorAll('section')
const section2=document.getElementById('section--2')
console.log(sections)
const sectObser=(entries)=>{
    const [entry]=entries
    console.log(entry)
    if (entry.isIntersecting) {
        
            entry.target.style.opacity=1
        
    
    }
}

const sectObj={
    root:null,
    threshold:0.15
}

const sect=new IntersectionObserver(sectObser,sectObj)
sections.forEach(function (section) {
    sect.observe(section)
    
})