
let landingPage = document.querySelector('.landing-page');

let arrayPage = ['1.jpg' ,'2.jpg' ,'3.jpg' , '4.jpg' , '5.jpg'];

    let ran = Math.floor(Math.random() * arrayPage.length)
    landingPage.style.backgroundImage = `url(img/${arrayPage[ran]})`

//  //        Change Landing Page In Time

    let StopInt = setInterval(() => {
        let ran = Math.floor(Math.random() * arrayPage.length)
        
        landingPage.style.backgroundImage = `url(img/${arrayPage[ran]})`

    }, 7200);

// Open The Setting
let openSetting = document.getElementById('setting-box');
let openTool = document.getElementById('anas');

    openTool.onclick = function(){
        openSetting.classList.toggle('open')
        if(openSetting.classList.contains('open')){
            setInterval(() => {
                openTool.style.transform = 'rotate(360deg)';
            }, 4000);
        }
    }

//  The Loacl Storge For The Color 
let mainColor = localStorage.getItem('ulColor')
    if(mainColor !== null){
        console.log(mainColor);
    document.documentElement.style.setProperty('--main-color',mainColor);

        // Remove All active class
        document.querySelectorAll('.ulColor li').forEach(el => {
            el.classList.remove('active');
            el.dataset.color === mainColor ?el.classList.add('active') :''
        });

    }
// Change The Color
    let mainDadColor = document.querySelectorAll('.ulColor li');

    mainDadColor.forEach(color => {
        color.onclick = () => {
            document.documentElement.style.
            setProperty('--main-color',color.dataset.color);
            
            // Storge Color Is not Exsist 
            localStorage.setItem('ulColor' , color.dataset.color);

            // Remove All active class
        color.parentElement.querySelectorAll('.active').forEach(el => {
            el.classList.remove('active')
        });
        // Add Class Acitve For The Element I Clicked On
            color.classList.add('active')
        }
    });

// Check  If There Is Loacl Storge In Item
let backgruond_LoaclItem = localStorage.getItem('background-random');

    if (backgruond_LoaclItem !== null){
        console.log('not Empty');
    }

// Start Random Background
let randomBac = document.querySelectorAll('.background-random span');

    randomBac.forEach(span => {
        span.onclick = () =>{
            span.parentElement.querySelectorAll('.active').forEach(e => {
                e.classList.remove('active');
            });
            span.classList.add('active');

            if(span.classList.contains('no')){
                clearInterval(StopInt);

                localStorage.setItem('background-random' , true)
            }
            // if(span.classList.contains('yes')) //   نفسه الاشي التنتين
            else{
                StopInt = setInterval(() => {
                    let ran = Math.floor(Math.random() * arrayPage.length)
                    console.log(ran)

                    landingPage.style.backgroundImage = `url(img/${arrayPage[ran]})`
            
                }, 2500);

                localStorage.setItem('background-random' , true)
            }
        }
    });
// Hide And Show The Bullets 
let butllets = document.querySelectorAll('.bullets-random span');
let loaclContainer = document.querySelector('.nav-bullets');

let bulletsLoacl = localStorage.getItem('bullets-random');

if(bulletsLoacl !== null){

    butllets.forEach(span => {
        span.classList.remove('active');
    });

     if(bulletsLoacl === 'block'){
        loaclContainer.style.display = 'block';
        document.querySelector('.bullets-random .yes').classList.add('active');
    }else{
        loaclContainer.style.display = 'none';
        document.querySelector('.bullets-random .no').classList.add('active');
        
    }
}

butllets.forEach(ele => {
    ele.onclick = function(){

    ele.parentElement.querySelectorAll('.active').forEach(e => {
        e.classList.remove('active');
    });

    ele.classList.add('active');
    if(ele.dataset.bullet === 'no'){

        document.querySelector('.nav-bullets').style.display = 'none';

        localStorage.setItem('bullets-random' ,'none')
    }else{
        document.querySelector('.nav-bullets').style.display = 'block';

        localStorage.setItem('bullets-random' ,'block')
        }
    }
});
let pervScroll = window.pageYOffset;
// Section When I  Scroll 
let mySkill = document.querySelector('.skils')
    window.onscroll = function(){

    // Skill Offset Top الجزء الي فوق السيكشن تبعنا الي هوا (ماي سكيلز)
    let offsetY = mySkill.offsetTop;
    

    // Skill outer Height هذي طول السيكشن الي بدك ياه (هذي حتجيب طول الماي سكيلز)
    let myHeightSet = mySkill.offsetHeight;

    // Window Height
    let window_Height = this.innerHeight;

    // Window ScrollTop الجزء الي بتعمل فيه السكرول
    let windowScrollTop = this.pageYOffset;

    let allSkill = document.querySelectorAll('.progress .skill-progress span');
    if(windowScrollTop > (offsetY + myHeightSet - window_Height - 130)){

        allSkill.forEach(skill => {

            skill.style.width = skill.dataset.progress;
        });
    }
    if(windowScrollTop < (offsetY + myHeightSet - window_Height - 130)){

        allSkill.forEach(skill => {
            skill.style.width = 0;
        });
    }
    // NavBar Section
    let currentScroll = window.pageYOffset;
    if(pervScroll == 0){
        document.querySelector(".header").style.display = 'flex'
        document.getElementById("navbarFixed").style.display = 'none'
    }
    else{
        document.getElementById("navbarFixed").style.display = 'flex'        
        if(pervScroll > currentScroll){

            document.getElementById("navbarFixed").style.top = "0";
        } else {

            document.getElementById("navbarFixed").style.top = "-70px";
        }
    }
    pervScroll = currentScroll
    // navbarFixed
}
// The Gallery

let galleryImg = document.querySelectorAll('.img-container img')
let popupBox 
galleryImg.forEach(img => {
    img.onclick = function(){
    //  Create The overlay Div
        let overlay = document.createElement('div');

        overlay.className  = 'pop-overlay';
        document.body.appendChild(overlay)

    // Create The Popup Div 
        popupBox = document.createElement('div');
        popupBox.setAttribute('class' , 'popup-box')
        
        overlay.appendChild(popupBox)

        let popupImg = document.createElement('img')
        popupImg.className  = 'aliAna'
        
        popupBox.appendChild(popupImg)

        popupImg.src = img.src
        console.log('Error')

    // Create The Text Alt1
        if(img.alt !== null){
            let popupAlt = document.createElement('h3')
            let textNode = document.createTextNode(img.alt)
            
            popupAlt.className = 'popupAlt'
            popupAlt.appendChild(textNode)
            popupBox.appendChild(popupAlt)

            let popupSpan = document.createElement('span');
            let spanText = document.createTextNode('X');
            popupSpan.className = 'closePop';

            popupSpan.appendChild(spanText);
            popupBox.prepend(popupSpan);
        }
    }
});


//  Start

// Start The Navigation On right
let navigation = document.querySelectorAll('.nav-bullets .fuck')
    scrollToSection(navigation);
    // Start The Navigation Bar Top
    let navBar = document.querySelectorAll('.landing-page ul li')
    scrollToSection(navBar);


    // theNavBar.style.background = 'red'



function scrollToSection(element){
    element.forEach( ele => {
        
        ele.onclick = (e) => {
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:'smooth'
            });
        }
    });
}

// Click Top On
let butUp = document.getElementById('butUP');
    butUp.onclick = function(){

    document.querySelector('.landing-page').scrollIntoView({
        behavior:'smooth'
    });
}
//  Rest All
document.querySelector('.rest').onclick = function(){

    localStorage.clear();

    window.location.reload()
}


// Media Query The navBar

let buttonBar = document.querySelector('.but-bar'),
        open = document.querySelector('.open'),
        spanDad = document.querySelectorAll('.but-bar span')

buttonBar.onclick = function(e){
     // أخليه لما يضغط على الزر او على السبان يعمل نفس الاشي
    e.stopPropagation();

        open.classList.toggle('jsOpen');
}
// هذي عشان لما يضغط على اليو نفسها ما يشيل المينيو
open.onclick = function(e){
    e.stopPropagation()
}

document.onclick = function(e){
        if(e.target.classList == 'closePop'){

            e.target.parentElement.remove();
            document.querySelector('.pop-overlay').remove();
        }
    
        if(e.target.classList == 'aliAna'){
    
            e.target.parentElement.remove();
            // overlay.remove()
    
            document.querySelector('.pop-overlay').remove();
        }
        if(e.target !== buttonBar){
            open.classList.remove('jsOpen');
        }

}
