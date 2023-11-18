'use strict';

import listIPv4 from './ipv4.js';
const arr = [0, 1, 2, 3, 4, 2, 3, 4, 4, 4];

const getUniqueAddresses = (arr) => {
	const uniqueAddresses = new Set(arr);
	return uniqueAddresses.size;
}

const res = getUniqueAddresses(listIPv4);
console.log(res);