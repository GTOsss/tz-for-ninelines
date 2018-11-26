function BaseObserver() {
	this.listeners = [];
}

function subscribe(handler) {
	if (typeof handler === 'function') {
		this.listeners.push(handler);
	}
}

function unsubscribe(handler) {
	this.listeners = this.listeners.filter((listener) => handler !== listener);
}

function callHandlers(event) {
	this.listeners.forEach((listener) => listener(event));
}

function forceCallHandler(handler) {
	const method = this.listeners.find((listener) => listener === handler);

	if (typeof method === 'function') {
		method();
	}
}

BaseObserver.prototype.subscribe = subscribe;
BaseObserver.prototype.unsubscribe = unsubscribe;
BaseObserver.prototype.callHandlers = callHandlers;
BaseObserver.prototype.forceCallHandler = forceCallHandler;

export default BaseObserver;
