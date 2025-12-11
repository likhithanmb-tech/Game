let bird = $("#bird");
let birdY = 200;
let gravity = 3;
let score = 0;

function createPipe(){
    let gap = 140;
    let pipeTopHeight = Math.random() *250 +50;
    let pipeBottomHeight = 600-pipeTopHeight -gap;

    let pipeTop = $("<div class='pipe'></div>");
    pipeTop.css({left:"100%",top:0,height:pipeTopHeight});
     let pipeBottom = $("<div class='pipe'></div>");
    pipeBottom.css({left:"100%",top:pipeTopHeight+gap,height:pipeBottomHeight});

    $("body").append(pipeTop,pipeBottom);
    pipeTop.animate({left:"-100px"},3000,function(){
        $(this).remove();
        score++;
        $("$scorebox").text("Score :"+score);
    });
    pipeBottom.animate({left:"-100px"},3000,function(){
        $(this).remove();
    });
    
    let checkCollision = setInterval(function(){
        let birdPop = bird[0].getBouncingClientRect();
        let topPop = pipeTop[0].getBouncingClientRect();
        let bottomPop = pipeBottom[0].getBouncingClientRect();

        if(
            (birdPop.left < topPop.right &&
            birdPop.right > topPop.left &&
            birdPop.top < topPop.bottom)||

            (birdPop.left < bottomPop.right &&
            birdPop.right > bottomPop.left &&
            birdPop.top < bottomPop.bottom)
             ) {
                    alert("the game is over");
                    location.reload
            }   
      },30);
}
setInterval(function(){
    birdY += gravity;
    bird.css("top",birdY+"px");
    if (birdY > $(window).height()) {
        alert("Bird fell! Game Over!");
        location.reload();
    }   
},30);
    $(document).keydown(function(e){
        if(e.key === " "){
            birdY -=50;
        }
    });
setInterval(createPipe,2500);

