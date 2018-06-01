
const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 800,
    physics: {
            default: 'arcade',
            arcade: {
                gravity:{y: 300},
            }
        },
    scene: [ Scene1 ]
};

const game = new Phaser.Game(config);