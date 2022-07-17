let typed = new Typed(".typed",{
    strings: [, 'student of Creator IT <br> Academy', 'programmer'],
    typeSpeed:100,
    backSpeed:100,
    loop:true
});
$("#menu").hide(0);
$("#burger").click(()=>{
    $("#menu").fadeToggle();
});
