const menuButton=document.querySelector('.nav-toggle') ,
        closeButton=document.querySelector('.nav-toggle2'),
        navMenu=document.querySelector('.ul-wrap');

        menuButton.addEventListener('click', () => {
            menuButton.style.display='none'
            closeButton.style.display = 'block'
            navMenu.style.transform = 'translateY(0%)'
           

        })
        closeButton.addEventListener('click', () => {
                closeButton.style.display='none'   
                menuButton.style.display = 'block' 
                navMenu.style.transform = 'translateY(-120%)'
        })


