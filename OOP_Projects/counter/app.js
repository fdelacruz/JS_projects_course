function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists.`
  );
}

class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.valueDom = element.querySelector('.value');
    this.originalValue = value;
    this.valueDom.textContent = this.value;

    // bind 'this' to all functions
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    this.increaseBtn.addEventListener('click', this.increase);
    this.decreaseBtn.addEventListener('click', this.decrease);
    this.resetBtn.addEventListener('click', this.reset);
  }
  increase(){
    this.value++;
    this.valueDom.textContent = this.value;
  }

  decrease() {
    this.value--;
    this.valueDom.textContent = this.value;
  };

  reset() {
    this.value = this.originalValue;
    this.valueDom.textContent = this.originalValue;
  };
};


const firtCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);
