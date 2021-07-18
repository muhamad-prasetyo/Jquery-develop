

// Huruf keluar 
function animasiIntro()
{
    $("#text-spesial span").velocity("fadeOut",{
                                stagger: 0,
                                complete: function(){
                                    animasiButtonStart();
                                },
                            });
}

// hurug masuk 
function animasiIntros()
{
    $("#text-spesial span").velocity("fadeIn",{stagger: 250});
}


function animasiButtonStart()
{
    $("#start").velocity("fadeIn")
                .mouseenter(function(){
                    $(this).velocity({width:100});
                })
                .mouseleave(function(){
                    $(this).velocity({width:125});
                });
}



$(document).ready(function() {
    animasiIntro();
    animasiIntros();
    animasiButtonStart();

});


// untuk tampilan hide and show 
$(document).ready(function() {
    $(".tombol-hide").click(function() {
        $("#text-spesial").hide();
    });
    $(".tombol-show").click(function(){
        $("#text-spesial").show();
    });
}) 