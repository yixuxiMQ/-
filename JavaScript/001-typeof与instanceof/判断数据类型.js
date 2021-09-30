function type(tar) {
    const ret = typeof(tar);

    const template = {
        "[object Object]": "object",
        "[object Array]": "array",
        "[object String]": "string -- object",
        "[object Boolean]": "boolean -- object",
        "[object Number]": "number -- object"
    };

    if (tar === null) {
        return null
    }

    if (ret === 'object') {
        const result = Object.prototype.toString.call(tar);
        return template[result];
    }

    return ret;
}

// console.log(type({}));
// console.log(type([]));
// console.log(type(123));
// console.log(type(Number()));
// console.log(type('123'));
// console.log(type(Symbol()));
// console.log(type(null));
// console.log(type(undefined));
// console.log(type(Array));
// console.log(type(false));
// console.log(type());









