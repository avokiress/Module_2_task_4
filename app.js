var COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
var getData = function (url) {
    return fetch(url)
        .then(function (response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
};
getData(COMMENTS_URL)
    .then(function (data) {
    if (data && data.length > 0) {
        data.forEach(function (element) { return console.log("ID: " + element.id + ", Email: " + element.email); });
    }
})["catch"](function (error) {
    /* show error message */
});
/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */ 
