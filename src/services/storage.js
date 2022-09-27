/* eslint-disable no-undef */
export const addToStorage = (numberTTN) => {
    localStorage.setItem(numberTTN, numberTTN)
}

export const clearStorage = () => {
    localStorage.clear()
}

export const getAllItems = () => {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push(localStorage.getItem(keys[i]) );
    }

    return values;
}

