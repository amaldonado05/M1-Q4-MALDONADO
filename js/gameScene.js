export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('catcher', 'assets/catcher.png');
        this.load.image('cat', 'assets/cat.png');
    }

    create() {
        this.add.image(400, 300, 'background');

        this.catcher = this.physics.add.sprite(400, 500, 'catcher').setScale(0.6);
        this.catcher.setCollideWorldBounds(true);

        this.cat = this.physics.add.sprite(Phaser.Math.Between(50, 750), 0, 'cat').setScale(0.8);
        this.cat.setBounce(0.5);
        this.cat.setCollideWorldBounds(true);
        this.cat.body.setSize(this.cat.width * 0.6, this.cat.height * 0.6);
        this.cat.body.setOffset(this.cat.width * 0.2, this.cat.height * 0.2);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.overlap(this.catcher, this.cat, this.catchCat, null, this);
    }

    update() {
        if (this.cursors.left.isDown) {
            this.catcher.setVelocityX(-300);
        } else if (this.cursors.right.isDown) {
            this.catcher.setVelocityX(300);
        } else {
            this.catcher.setVelocityX(0);
        }
    }

    catchCat() {
        this.cat.disableBody(true, true);
        this.scene.start('WinningScene');
    }
}
    