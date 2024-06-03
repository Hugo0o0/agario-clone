class PlayerData {
  constructor(name, settings) {
    this.name = name;
    this.locX = Math.floor(Math.random() * settings.worldWidth + 10);
    this.locY = Math.floor(Math.random() * settings.worldHeight + 10);
    this.radius = settings.defaultSize;
    this.color = this.getRandomColor();
    this.score = 0;
    this.orbsAbsorbed = 0;
    this.playerAbsorbed = 0;
  }

  getRandomColor() {
    const r = Math.floor(Math.random() * 200 + 50);
    const g = Math.floor(Math.random() * 200 + 50);
    const b = Math.floor(Math.random() * 200 + 50);
    return `rgb(${r},${g},${b})`;
  }
}

module.exports = PlayerData;
