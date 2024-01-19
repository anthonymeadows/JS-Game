import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
    preload() {
        // Preload assets if needed
    }

    create() {
        // Create a left paddle
        const paddleLeft = this.add.rectangle(30, 250, 20, 100, 0xffffff);
        // Create a right paddle
        const paddleRight = this.add.rectangle(770, 250, 20, 100, 0xffffff);

        // Enable physics for the paddles
        this.physics.add.existing(paddleLeft);
        this.physics.add.existing(paddleRight);
        paddleLeft.body.setCollideWorldBounds(true, 1, 1, 1);
        paddleRight.body.setCollideWorldBounds(true, 1, 1, 1);

        // Create robo
        const alienGraphics = this.add.graphics();
        alienGraphics.lineStyle(2, 0xffffff, 1)
            //outline
            .strokeRect(10, 10, 30, 30)
            //mouth
            .strokeCircle(25, 30, 3)
            //eyes
            .strokeCircle(18, 18, 3)
            .strokeCircle(18, 18, 2)
            .strokeCircle(18, 18, 1)
            .strokeCircle(30, 18, 3)
            .strokeCircle(30, 18, 2)
            .strokeCircle(30, 18, 1)
            .strokeRect(25, 10, 1, -10)
            //antenna
            .strokeCircle(25, -1, 3)
            .strokeCircle(25, -1, 2)
            .strokeCircle(25, -1, 1);

        // Add physics to the robo
        this.physics.add.existing(alienGraphics);
        
        // Set the initial position of the robo to the center of the screen
        alienGraphics.x = this.cameras.main.width / 2;
        alienGraphics.y = this.cameras.main.height / 2;

        alienGraphics.body.setVelocity(100, 100);
        alienGraphics.body.setCollideWorldBounds(true, 1, 1, 1);

        // Create a graphics object for the game border
        const gameBorder = this.add.graphics();

        // Draw a circle for the game border
        gameBorder.lineStyle(2, 0xffffff, 1)
            .strokeCircle(this.cameras.main.width / 2, this.cameras.main.height / 2, 100);

        // Draw a vertical line down the middle
        gameBorder.lineBetween(this.cameras.main.width / 2, 0, this.cameras.main.width / 2, this.cameras.main.height);
    }

    update() {
        // Update game logic if needed
    }
}
