var scenes = [];
scenes.push(mainMenu);
scenes.push(Scene1);
//..and so on


const config = {
    type: Phaser.AUTO,
    width: 850,
    height: 650,
    
    physics: {
            default: 'arcade',
            arcade: {
                gravity:{y: 300},
            }
        },
    scene: scenes
};

const game = new Phaser.Game(config);