const render = (films) => {

    const container = document.querySelector('#container');
    container.innerHTML = '<br>'; //removes the previous elements
    const list = document.createElement("ul");
    list.style=`display: flex; justify-content: space-evenly; flex-wrap: wrap; list-style: none;`
 
    films.forEach(({title, year, director, imdbRating: rating}) => {
        const item = document.createElement("li");

        item.innerHTML = `<h3>${title}</h3>
        <h4>year: ${year}</h4>
        <h4>director: ${director}</h4>
        <h4>rating: ${rating}</h4>`;
        list.appendChild(item);
    });
   
    
   
    container.appendChild(list);
   
}


export default {render};
