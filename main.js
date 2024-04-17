//let url = 'https://poetrydb.org/random,linecount/1;10/title,author,lines.json'
//let url = 'https://poetrydb.org/author,title/Shakespeare;Sonnet'
//let url = 'https://poetrydb.org/author/Amy Levy'
let url2 = 'https://poetrydb.org/authors'

const button = document.getElementById('button');
const poemZone = document.getElementById('poem');
const authorZone = document.getElementById('author');
let poemHolder = [];
let authorHolder = [];




async function requestPoem(author) {
    
    //REQUEST POEMS FROM API
    const response = await fetch(`https://poetrydb.org/author/${author}`);
    const data = await response.json();
    console.log(data);
   
   
   
    poemHolder = data;


    poemLister(data);


}

async function requestAuthors(url) {
    
    //REQUEST AUTHORS FROM API
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    console.log(data.authors);

    authorHolder = data.authors;

    authorLister(data.authors);



}

//requestPoem(url);
requestAuthors(url2);




function selectPoem(data, index) {

    const poem = data[index]["lines"].join(' <br> ');
    poemZone.innerHTML = poem;
    console.log(index);
}

function selectAuthor(data, index) {

    const author = data[index]["lines"].join(' <br> ');
    authorZone.innerHTML = author;
    console.log(index);
}

//LIST ALL THE POEMS
function poemLister(data) {
const listOfTitles = data.map((poem, index) => {
   // console.log(poem.title);
    const node = document.createElement("option");
    node.innerHTML = `${poem.title}`;
   node.value = index;
   // node.innerText = poem.title;
   //node.setAttribute("onclick", "")
document.getElementById('poem-picker').appendChild(node);

})
//console.log(listOfTitles);
//document.getElementById('poem-count').innerText= `${listOfTitles.length} poems available`
}

function authorLister(data) {
    const listOfAuthors = data.map((author, index) => {
       // console.log(poem.title);
        const node = document.createElement("option");
        node.innerHTML = `${author}`;
       node.value = `${author}`;
      
    document.getElementById('author-picker').appendChild(node);
    
    })
    
    document.getElementById('author-count').innerText= `${listOfAuthors.length} authors available`
    }
    


