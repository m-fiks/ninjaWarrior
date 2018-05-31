let player;
let score = 0;
let scoreText = "";

// I managed to restart the same scene by doing:
// this.scene.manager.bootScene(this);

class Scene1 extends Phaser.Scene {
    constructor() {
        super({key:"Scene1"});
    }

//load the images
preload () {
    //sky needs to be larger to fit the world bounds
    //this.load.image('sky', './assets/sky.png');
    this.load.tilemapTiledJSON('map', './assets/images/map.json')
    this.load.spritesheet('tiles', './assets/images/tiles.png',  {frameWidth: 70, frameHeight: 70})
    
    //this.load.image('ground', './assets/platformg.png');
    this.load.image('platform', './assets/images/platform.png');
    this.load.spritesheet('dude', './assets/images/running.png', { frameWidth: 36, frameHeight: 48 });
};


create () {
    //ORDER HERE IS IMPORTANT
    //adding sky
    //this.add.image(400, 300, 'sky');
    
    //adding tiles/map
    let map = this.make.tilemap({key:'map'});

    //tiles for ground
    let groundTiles = map.addTilesetImage('tiles');

    let groundLayer = map.createDynamicLayer('World', groundTiles, 0,0 )

    // the player will collide with this layer
    groundLayer.setCollisionByExclusion([-1]);

    this.physics.world.bounds.width = groundLayer.width;
    this.physics.world.bounds.height = groundLayer.height;

    //create platforms
    let platforms = this.physics.add.staticGroup();
    //let ground = this.physics.add.staticGroup();
    //create the ground on bottom
    //ground.create(400,568, 'ground').setScale(2).refreshBody();

    //create random platforms
    platforms.create(900,180, 'platform');
    platforms.create(1450,200, 'platform');
    // platforms.create(750, 200, 'platform');


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
    // //check to see if player hits ground
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, groundLayer);
   
    //camera business
    this.cameras.main.setBounds(0,0, map.widthInPixels, map.heightInPixels);
    //follow player
    this.cameras.main.startFollow(player);

    this.cameras.main.setBackgroundColor('#00a9ff'); 
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
        player.setVelocityY(-85);
    }
};
    
};