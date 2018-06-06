let play;
class mainMenu extends Phaser.Scene {
    constructor() {
        super({key:"mainMenu"});
    }
    
    //load the images
    preload () {
    //sky needs to be larger to fit the world bounds
    this.load.image('sky', './assets/images/sky.png');
    //Play button
    this.load.image('play', './assets/images/play.png')
    //How to play button
    this.load.image('help', './assets/images/help.png')
    };

    create (){
    //adding sky
    let background = this.add.image(50, 0, 'sky');
    //Some text
    let main = this.add.text(225,0, 'Main Menu, Welcome!', {font:"40px Impact", fill: "#000000"});
    //buttons click events

    play = this.add.text(250, 190, 'Play now!', {font:"20px Impact", fill:'#ffffff'}).setInteractive();
    
    play.on('pointerdown', function (event) {
        this.scene.start("Scene1")
    }, this);
    // let playButton = this.add.image(250, 260, 'play');

    // let helpButton = this.add.image(300, 260, 'help');

    let help = this.add.text(400, 190, 'How to play', {font:"20px Impact", fill:'#ffffff'}).setInteractive();


    help.on('pointerdown', function (event) {
        this.scene.start("Scene2")
    }, this);
    };

    // startGame (event) {
    //     this.scene.start("Scene1");
    // };

    showHighScores () {
        this.game.state.start('Checkout high scores here...');
    };

    showHowToPlay () {
        this.game.state.start('HowToPlay');
    }
};
