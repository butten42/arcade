// Enemies our player must avoid
var Enemy = function(y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x=0;
    this.y=y;
    this.speed=speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x>=0&&this.x<505) {
    this.x+=dt*this.speed;
    }
    else{this.x=0}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player=function(x,y){
    this.sprite='images/char-boy.png';
    this.x=202;
    this.y=5*83;
}
Player.prototype.render=function(){
    ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
}
Player.prototype.update=function(dt){
    this.xNow=this.x;
    this.yNow=this.y;
}
Player.prototype.handleInput=function(a){
    if(a=="left"&&this.x>0){this.x=this.xNow-=20}
    else if(a=='right'&&this.x<500){this.x=this.xNow+=20}
    else if (a=='up') {this.y=this.yNow-=20}
    else if(a=='down'&&this.y<430){this.y=this.yNow+=20}
}
var allEnemies=[new Enemy(61,55),new Enemy(144,100),new Enemy(229,80),new Enemy(312,111)];
var player=new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
