// js for sidenav -->
document.addEventListener("DOMContentLoaded", function(event) {

    const showNavbar = (closeResponsive,toggleId, navId, bodyId, headerId) =>{
    const closeSideNavResponsive = document.getElementById(closeResponsive)
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    closeSideNavResponsive.addEventListener('click', ()=>{
        console.log(1)
        // show navbar
        nav.classList.toggle('show')
        // change icon
        closeSideNavResponsive.classList.toggle('bx-x')
        // add padding to body
        bodypd.classList.toggle('body-pd')
        // add padding to header
        headerpd.classList.toggle('body-pd')
        }) 
    }
    
    showNavbar('closeSideNavResponsiveId','header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
    // Your code to run since DOM is loaded and ready
    });
    // end Side nav code -->
    // mouse Pointer follow
    // $(document).on('mousemove', function(e) {
    //     var xPos = e.pageX;
    //     var yPos = e.pageY;
    //     // console.log(xPos, yPos);
    //     $('.circle').css({
    //       'top': yPos,
    //       'left': xPos
    //     });
    //   });
    //   $(document).on('onmouseover', function(e){
    //       $('.circle').css({
    //           'opacity': 0,
    //       })
    //   })