'use strict';
module.exports = ms => {

    if(isNaN(ms)) {
        throw new TypeError('Неверное число');
    }

	const time = ms > 0 ? Math.floor : Math.ceil;

	return {
		days: time(ms / 86400000),
		hours: time(ms / 3600000) % 24,
		minutes: time(ms / 60000) % 60,
		seconds: time(ms / 1000) % 60,
		milliseconds: time(ms) % 1000
	};
};