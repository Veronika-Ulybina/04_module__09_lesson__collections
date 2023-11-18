'use strict';

import listIPv4 from './ipv4.js';

const getUniqueAddresses = (arr) => {
	const uniqueAddresses = new Set(arr);
	return uniqueAddresses.size;
}

const res = getUniqueAddresses(listIPv4);
console.log(res);