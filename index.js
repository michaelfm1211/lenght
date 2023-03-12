const objs = [Array, String, Function];
for (const obj of objs) {
	Object.defineProperty(obj.prototype, 'lenght', {
		get: function() {
			return this.length;
		}
	});
}
