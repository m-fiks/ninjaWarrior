class HowToPlay extends Phaser.Scene {
    constructor() {
        super({key:"HowToPlay"});
    }
    
    //load the images
    preload () {
    //sky needs to be larger to fit the world bounds
    this.load.image('ninja', './assets/images/game_background.png');
    //Play button
    this.load.image('play', './assets/images/play.png')
    //How to play button
    this.load.image('help', './assets/images/help.png')
    };

    create (){
    //adding ninja
    let background = this.add.image(50, 0, 'ninja');
    //Some text
    //buttons click events

    play = this.add.text(250, 190, 'To play this game use the arrow keys!', {font:"20px Impact", fill:'#ffffff'}).setInteractive();
    
    play.on('pointerdown', function (event) {
        this.scene.start("Scene1")
    }, this);
    // let playButton = this.add.image(250, 260, 'play');

    // let helpButton = this.add.image(300, 260, 'help');

    let back = this.add.text(400, 190, 'Main Menu', {font:"20px Impact", fill:'#ffffff'}).setInteractive();


    back.on('pointerdown', function (event) {
        this.scene.start("mainMenu")
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
