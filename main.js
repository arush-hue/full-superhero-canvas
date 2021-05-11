var canvas=new fabric.Canvas("myCanvas");
var player_x=10;
var player_y=10;
block_width=30;
block_height=30;
player_object="";
block_object="";
function player_update()
{
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey== true &&keypressed == '80')
    {
        console.log("p and shift pressed together");
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("hi").innerHTML=block_width;
        document.getElementById("hi2").innerHTML=block_height;
    }
    if(e.shiftKey == true && keypressed == '77')
    {
        console.log("m and shift key pressed together");
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("hi").innerHTML=block_width;
        document.getElementById("hi2").innerHTML=block_height;
    }
    if (keypressed == '38')
    {
        up();
        console.log("up");
    }
    if (keypressed == '40')
    {
        down();
        console.log("down");
    }
    if (keypressed == '37')
    {
        left();
        console.log("left");
    }
    if (keypressed == '39')
    {
        right();
        console.log("right");
    }
    if (keypressed == '72')
    {
        new_image('ironman_face.png');
        console.log("h");
    }    
    if (keypressed == '76')
    {
        new_image('captain_america_left_hand.png');
        console.log("l");
    }
    if (keypressed == '82')
    {
        new_image('thor_right_hand.png');
        console.log("r");
    }
    if (keypressed == '85')
    {
        new_image('hulk_legs.png');
        console.log("u");
    }
    if (keypressed == '66')
    {
        new_image("spiderman_body.png");
        console.log("b");
    }
}
function up()
{
    if (player_y>=0)
    {
        player_y=player_y-block_height;
        console.log("block Height ="+block_height);
        console.log("When up arrow is pressed X=" + player_x + "Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down()
{
    if (player_y<=460)
    {
        player_y=player_y+block_height;
        console.log("Block Height"+block_height);
        console.log("When down arrow is pressed X="+player_x+"Y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left()
{
    if(player_x>=0)
    {
        player_x=player_x-block_width;
        console.log("Block Width =" +block_width);
        console.log("When left arrow key is pressed X="+player_x+"Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if(player_x<=850)
    {
        player_x=player_x+block_width;
        console.log("Block Width"+block_width);
        console.log("When right arrow is pressed X="+player_x+"Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
