/** Task 1:
 * create 3 objects with the name movie1, movie2, movie3
 * Add 3 properties to it
 * - id -> just a unique id, you can start with 1
 * - name -> a movie name (e.g. COCO)
 * - image  -> an http link of the image on the internet
 * rating -> a rating number from 1 to 10
 *
 * After you create the movies, console log them.
 * Open the live server, and see the logs in the console of the browser
 *
 */
const movie1 ={
    id:1, 
    name: "whiplash",
    image:"https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/whiplash-poster.jpg?itok=Ik3xmD7f",
    rating:8.5
};
const movie2 ={
    id:2, 
    name: "diehard", 
    image:"https://static.metacritic.com/images/products/movies/2/b11ef7a183c8ca854c5cf42675e61a36-250h.jpg",
    rating:8.2
};
const movie3 ={
    id:3, 
    name:"the usual suspects", 
    image:"https://en.wikipedia.org/wiki/File:Usual_suspects_ver1.jpg",
    rating:8.5 
}
console.log(movie1);
console.log(movie2);
console.log(movie3);
// add the movies variables here ....

/** Task 2:
 * Create an array `movies`
 * Add to it the movies that you created on top.
 * Once you add one movie,
 * you will see the movie card in the html page!
 *
 * Don't add to the array the movies variables,
 * just copy paste the content to be in the following format
 * [
 *    {
 *       prop: value,
 *       prop: value,
 *       prop: value,
 *    },
 * ]
 */
const movies =[
    {
        id:1, 
        name: "whiplash",
        image:"https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/whiplash-poster.jpg?itok=Ik3xmD7f",
        rating:8.5
    },{
    
        id:2, 
        name: "diehard", 
        image:"https://static.metacritic.com/images/products/movies/2/b11ef7a183c8ca854c5cf42675e61a36-250h.jpg",
        rating:8.2
    },
    {
        id:3, 
        name:"the usual suspects", 
        image:"https://en.wikipedia.org/wiki/File:Usual_suspects_ver1.jpg",
        rating:8.5 
    }
];
/** TASK 3:
 * Create a new file call it `movies.json`
 * Copy paste the content of the array inside the json file
 * Make sure it's a json format.
 */

