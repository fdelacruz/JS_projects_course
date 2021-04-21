function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.resetBtn = element.querySelector('.reset');
  this.increaseBtn = element.querySelector('.increase');
  this.decreaseBtn = element.querySelector('.decrease');
  this.valueDom = element.querySelector('.value');
  this.originalValue = value
  this.valueDom.textContent = this.value;
}

Counter.prototype.increase = function() {
  this.value++;
  this.valueDom.textContent = this.value
};

Counter.prototype.decrease = function() {
  this.value--
  this.valueDom.textContent = this.value
};

Counter.prototype.reset = function() {
  this.value = this.originalValue;
  this.valueDom.textContent = this.originalValue
};
const firtCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists.`
  );
}
