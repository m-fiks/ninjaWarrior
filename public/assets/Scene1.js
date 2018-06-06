let player;
let score = 0;
let scoreText = "";
let newScore = "";
// I managed to restart the same scene by doing:
// this.scene.manager.bootScene(this);

class Scene1 extends Phaser.Scene {
    constructor() {
        super({key:"Scene1"});
    }

//load the images
preload () {
    //sky needs to be larger to fit the world bounds
    this.load.image('main', './assets/images/main.jpg');
    this.load.image('ground', './assets/images/ground.png');
    this.load.image('platform', './assets/images/platform.png');
    //load obstacles
    this.load.image('ramp', './assets/images/ramp.png')
    this.load.image('steps1', './assets/images/steps1.png')
    this.load.image('steps2', './assets/images/steps2.png')
    this.load.image('steps3', './assets/images/steps3.png')
    this.load.image('steps4', './assets/images/steps4.png')
    this.load.image('warped', './assets/images/warp_wall.png')
    this.load.image('spin1', './assets/images/spin1.png')
    this.load.image('spin2', './assets/images/spin2.png')
    //this.load.image('barrel', './assets/images/barrel.png')
    this.load.image('star', './assets/images/star.png')

    this.load.spritesheet('dude', './assets/images/running.png', { frameWidth: 36, frameHeight: 48 });
};

create () {
    //ORDER HERE IS IMPORTANT

    //adding sky
    let background = this.add.image(2200, 300, 'main');
    //create platforms
    //let platforms = this.physics.add.staticGroup();
    let ground = this.physics.add.staticGroup();
    //create the ground on bottom
    ground.create(400,700, 'ground').refreshBody();

    //ADD OBSTACLES!!!!!!!!!!!!!!
    this.platforms = this.physics.add.staticGroup();

    //obstacles.create(500,500, 'steps').refreshBody();
    //this.platforms.create(450,650,'barrel')
    this.platforms.create(450, 650, 'spin1')
    this.platforms.create(450, 600, 'spin2')

    //steps
    this.platforms.create(850, 698, 'steps1')
    this.platforms.create(930, 669, 'steps2')
    this.platforms.create(1010, 635, 'steps3')
    this.platforms.create(1089, 596, 'steps4')

    //steps 2
    this.platforms.create(1650, 698, 'steps1')
    this.platforms.create(1720, 669, 'steps2')
    this.platforms.create(1795, 596, 'steps4')
    this.platforms.create(1870, 635, 'steps3')
    
    //spinny 2
    this.platforms.create(2500, 650, 'spin2')
    this.platforms.create(2500, 600, 'spin1')

    //adding player sprite in bottom left corner, using physics to make dynamic
    player = this.physics.add.sprite(50,650, 'dude');
    player.setBounce(0.2);
    //check to see if collide with anything
    //player.setCollideWorldBounds(true);
    
    //adding animation to player
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
    this.physics.add.collider(player, ground);
    this.physics.add.collider(player, this.platforms);

    //camera business
    this.cameras.main.setBounds(0,0, 9000, 1000);
    //follow player
    this.cameras.main.startFollow(player);
    

    //stars drop
    //star at 350, and drop one every stepx value
    let stars = this.physics.add.group({
        key: 'star',
        repeat: 40,
        setXY: { x: 550, y: 0, stepX: 85 }
    });

    stars.children.iterate((child) => {
        child.setBounceY(Phaser.Math.FloatBetween(0.4,0.8))
    });

    this.physics.add.collider(stars, this.platforms)
    this.physics.add.collider(stars, ground)

    //stars up the score
    this.physics.add.overlap(player, stars, collectStars, null, this);

    function collectStars (player, star){
        star.disableBody(true, true);

        score += 10;
        scoreText.setText('Score: ' + score);
    }

    //score business
    let scoreText = this.add.text(50, 350, 'score: 0', { fontSize: '32px', fill: '#ffffff' });
    scoreText = this.add.text(2250, 350, `score: ${score}`, { fontSize: '32px', fill: '#ffffff' });
    //scoreText = this.add.text(3000, 350, `score: ${score}`, { fontSize: '32px', fill: '#ffffff' });
   
};

update () {
//let user control with arrow keys    
//timer
// this.timedEvent = this.time.addEvent({
//     delay: 10000,
//     callback: onEvent,
//     callbackScope: this
// })

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

    function onEvent () {
        let id = sessionStorage.getItem('id')
        let data = {
            "score": score
        }
        alert(`times up! your score is: ${score}`);

        // $.ajax({
        //     type: "PUT",
        //     url: "/api/" + id,
        //     data: data,
        //     dataType: "json",
        // }).then((data) => {
        //     console.log(data);
        //     //console.log(data.score);
        //     //add data.score to db
        //     //send to score screen
        // })

        //send to scoreboard
        this.scene.start("Score")
        //game.destroy();
    }
   
};
    
};