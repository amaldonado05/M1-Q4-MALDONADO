import { MainMenuScene } from './mainMenuScene.js';
import { GameScene } from './gameScene.js';
import { WinningScene } from './winningScene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [MainMenuScene, GameScene, WinningScene]
};

const game = new Phaser.Game(config);
