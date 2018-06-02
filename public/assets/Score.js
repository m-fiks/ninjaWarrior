let allScores = [];
let allUsername = []; 

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

    let scores = this.add.text(250, 190, 'Time(sec)', {font:"20px Impact", fill:'#ffffff'}).setInteractive();
    allScores = this.add.text(250, 220, 'HOWDY',  {font:"20px Impact", fill:'#ffffff'})
    allUsername = this.add.text(300, 220, 'JHJKH',  {font:"20px Impact", fill:'#ffffff'})
    // let data = 
    // $.ajax({
    //     type: 'POST',
    //     url: '/api/allusers',
    //     data: data,
    //     dataType: 'json'
    // }).then(function(data) {
    //     console.log(data)
    //     //$('').append()
       
    // });

    $.ajax({
        type: "GET",
        url: "/api/allusers",
    }).then((data) => {
        console.log(data);
        let usernameArray = [];
        let scoreArray = [];

        data.forEach((elem) => {
            // console.log(elem.username, elem.score);
            usernameArray.push(elem.username)
            scoreArray.push(elem.score)
            console.log(elem.username)
        })
        allScores.setText(scoreArray);
        allUsername.setText(usernameArray)
    })
    
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
