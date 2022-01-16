"use strict"

function deepClone(obj) {
	if(isPromitive(obj)) {
		return obj
	} else if (isArray(obj)) {
		return obj.map((val) => {
			return deepClone(val)
		})
	} else if (isObject(obj)) {
		let res = {}
		for (let key in obj) {
			res[key] = deepClone(obj[key])
		}
		return res
	}
}