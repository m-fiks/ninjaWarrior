class Scene1 extends Phaser.Scene {
    constructor() {
        super({key:"Scene1"});
    }

// let player;
// let score = 0;
// let scoreText;

//load the images
preload () {
    this.load.image('sky', './assets/sky.png');
    this.load.image('ground', './assets/platformg.png');
    this.load.image('platform', './assets/platform.png');
    this.load.spritesheet('dude', './assets/running.png', { frameWidth: 36, frameHeight: 48 });
};

create () {
    //ORDER HERE IS IMPORTANT
    //adding sky
    this.add.image(400, 300, 'sky');
    
    platforms = this.physics.add.staticGroup();
    ground = this.physics.add.staticGroup();
    //create the ground on bottom
    ground.create(400,568, 'ground').setScale(2).refreshBody();
    //create random platforms
    platforms.create(700,390, 'platform');
    platforms.create(50,250, 'platform');
    platforms.create(750, 200, 'platform');
    //adding player sprite in bottom left corner, using physics to make dynamic
    
    player = this.physics.add.sprite(100,450, 'dude');
    player.setBounce(0.2);
    //check to see if collide with anything
    player.setCollideWorldBounds(true);
    
    //adding animation to player
    //global object
    //standard face foward position
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 14 } ],
        frameRate: 20
    });
    //run right
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 2, end: 4 }),
        frameRate: 10,
        repeat: -1
    });
    //run left
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 6, end: 9 }),
        frameRate: 10,
        repeat: -1
    })
    //check to see if player hits ground
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, ground);
};

update () {
//let user control with arrow keys    
let cursors;
cursors = this.input.keyboard.createCursorKeys();

if (cursors.left.isDown)
    {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }
else if (cursors.right.isDown)
    {
        player.setVelocityX(125);
        player.anims.play('right', true);
    }
else
    {
        player.setVelocityX(0);
        player.anims.play('turn');
    }
if (cursors.up.isDown)
    {
        player.setVelocityY(-200);
    }
};
    
};