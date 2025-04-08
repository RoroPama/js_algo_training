/*
Implement an EventEmitter class similar to the one in Node.js that follows such an observer pattern.

  */
class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  /**
   * @param {string} eventName
   * @param {Function} listener
   * @returns {EventEmitter}
   */
  on(eventName, listener) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    this.events.get(eventName).push(listener);
    return this;
  }

  /**
   * @param {string}
   * @param {Function}
   * @returns {EventEmitter}
   */
  off(eventName, listener) {
    if (!this.events.has(eventName)) {
      return this;
    }

    const listeners = this.events.get(eventName);
    const index = listeners.indexOf(listener);

    if (index !== -1) {
      listeners.splice(index, 1);

      // Clean up empty event arrays
      if (listeners.length === 0) {
        this.events.delete(eventName);
      }
    }

    return this;
  }

  /**
   * @param {string} eventName
   * @param  {...any} args
   * @returns {boolean}
   */
  emit(eventName, ...args) {
    if (!this.events.has(eventName)) {
      return false;
    }

    const listeners = this.events.get(eventName);

    [...listeners].forEach((listener) => {
      listener(...args);
    });

    return true;
  }
}
