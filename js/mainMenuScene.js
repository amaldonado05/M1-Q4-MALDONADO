export class MainMenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenuScene' });
    }

    create() {
        this.add.text(400, 100, 'EPIC CAT CATCHER :D', { fontSize: '48px', fill: '#fff' }).setOrigin(0.5);

        const playButton = this.add.text(400, 250, 'PLAY', { fontSize: '32px', fill: '#0f0' })
            .setOrigin(0.5)
            .setInteractive();
        playButton.on('pointerdown', () => this.scene.start('GameScene'));

        const creditsButton = this.add.text(400, 320, 'CREDITS', { fontSize: '32px', fill: '#0f0' })
            .setOrigin(0.5)
            .setInteractive();
        creditsButton.on('pointerdown', () => this.showCredits());

        const quitButton = this.add.text(400, 390, 'QUIT', { fontSize: '32px', fill: '#0f0' })
            .setOrigin(0.5)
            .setInteractive();
        quitButton.on('pointerdown', () => alert('You exited the game.'));
    }

    showCredits() {
        this.children.removeAll();

        this.add.text(400, 100, 'Credits', { fontSize: '48px', fill: '#fff' }).setOrigin(0.5);
        this.add.text(400, 250, 'FULL NAME: Alvaro Maldonado Zavala', { fontSize: '24px', fill: '#fff' }).setOrigin(0.5);
        this.add.text(400, 290, 'SECTION: A225', { fontSize: '24px', fill: '#fff' }).setOrigin(0.5);
        this.add.text(400, 330, 'PROGRAM: BS EMC', { fontSize: '24px', fill: '#fff' }).setOrigin(0.5);

        const backButton = this.add.text(400, 420, 'BACK', { fontSize: '32px', fill: '#0f0' })
            .setOrigin(0.5)
            .setInteractive();
        backButton.on('pointerdown', () => this.scene.restart());
    }
}
