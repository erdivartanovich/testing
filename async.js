const fetchData = function() {
    return new Promise((resolve) => {
        return setTimeout(function() {
            resolve({
                id: 1,
                completeName: 'alien human'
            })
        }, 2000);
    })
}
module.exports = fetchData