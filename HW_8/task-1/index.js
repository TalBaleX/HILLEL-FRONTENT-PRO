let ladder = {
  level: 0,
  up: function () {
    this.level++;
    return this;
  },
  down: function () {
    if (this.level == 0) return;
    this.level--;
    return this;
  },
  showStep: function () {
    console.log(this.level);
    return this;
  },
};
ladder.up().showStep().up().up().down().showStep().up().showStep();
