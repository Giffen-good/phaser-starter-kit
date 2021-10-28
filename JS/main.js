let config = {
    type: Phaser.AUTO,
    width:800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'wrapper',
    scene: {
        preload: preload,
        create: create,
	    update: update
    }
};

let game = new Phaser.Game(config);
let mushroom = null

function preload ()
{
    this.load.image('bunny', 'images/mushroom.png');
}

function create ()
{
    mushroom = this.add.sprite(400, 300, 'bunny');
}

function update () 
{
    mushroom.x += 1
    if (mushroom.x > 800) {
        mushroom.x = 0
    }
}