export class WinningScene extends Phaser.Scene {
    constructor() {
        super({ key: 'WinningScene' });
    }

    create() {
        this.add.text(400, 200, 'You caught the cat!', { fontSize: '40px', fill: '#fff' }).setOrigin(0.5);

        const retryButton = this.add.text(400, 300, 'Retry', { fontSize: '32px', fill: '#0f0' })
            .setOrigin(0.5)
            .setInteractive();
        retryButton.on('pointerdown', () => this.scene.start('GameScene'));

        const mainMenuButton = this.add.text(400, 370, 'Main Menu', { fontSize: '32px', fill: '#0f0' })
            .setOrigin(0.5)
            .setInteractive();
        mainMenuButton.on('pointerdown', () => this.scene.start('MainMenuScene'));
    }
}
