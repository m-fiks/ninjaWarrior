class Score extends Phaser.Scene {
    constructor() {
        super({key:"Score"});
    }
    
    //load the images
    preload () {
    //sky needs to be larger to fit the world bounds
    this.load.image('sky', './assets/images/sky.png');
    };

    create (){
    //adding sky
    let background = this.add.image(50, 0, 'sky');
    //Some text
    let main = this.add.text(225,0, 'End!', {font:"40px Impact", fill: "#000000"});
    //buttons click events

    let scores = this.add.text(250, 190, 'Scores', {font:"20px Impact", fill:'#ffffff'}).setInteractive();

    
    $.ajax({
        type: 'GET',
        url: '/api/allusers',
        data: data,
        dataType: 'json'
    }).then(function(data) {
        console.log(data)
        //$('').append()
    });

    // let scoreList = this.add.text(250, 225, {font:"20px Impact", fill:'#ffffff'}, function(){
    //     $.ajax({
    //         type: 'GET',
    //         url: '/api/allusers',
    //         data: data,
    //         dataType: 'json'
    //     }).then(function(data) {
    //         console.log(data)
    //         //$('').append()
    //     });
    // })
    
    this.input.on('pointerdown', function (event) {
        this.scene.start("mainMenu")
    }, this);
    // let playButton = this.add.image(250, 260, 'play');

    let how = this.add.text(400, 190, 'How to play', {font:"20px Impact", fill:'#ffffff'});
    // let helpButton = this.add.image(300, 260, 'help');


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
