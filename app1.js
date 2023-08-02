// const express = require('express');
// const { engine } = require('express-handlebars');
// const axios = require('axios');

// const app = express();
// const port = 3000;

// const apiKey = '86e36cc047cb4b2d95f475291b6c287b';
// const apiUrl = 'http://newsapi.org/v2/top-headlines';
// const q = 'tech'; // Change this to your desired country code
// const pageSize = 10;   // Number of news articles to fetch

// const requestOptions = {
//     params: {
//         q,
//         pageSize,
//         apiKey,
//     }
// };

// // Configure Handlebars as the view engine
// app.engine('handlebars', engine({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');


// // Route to fetch news and render it using Handlebars
// app.get('/', (req, res) => {
//     axios.get(apiUrl, requestOptions)
//         .then(response => {
//             const articles = response.data.articles;
//             res.render('news', { articles, title: 'News Headlines' });
//         })
//         .catch(error => {
//             console.error('Error fetching news:', error.message);
//             res.render('error', { title: 'Error' });
//         });
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

const express = require('express');
const { engine } = require('express-handlebars');
const axios = require('axios');

const app = express();
const port = 3000;

const apiKey = '86e36cc047cb4b2d95f475291b6c287b';
const apiUrl = 'http://newsapi.org/v2/top-headlines';
const q = 'tech'; // Change this to your desired country code
const pageSize = 10;   // Number of news articles to fetch

const requestOptions = {
    params: {
        q,
        pageSize,
        apiKey,
    }
};

// Configure Handlebars as the view engine
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Route to fetch news and render it using Handlebars
app.get('/', (req, res) => {
    axios.get(apiUrl, requestOptions)
        .then(response => {
            const articles = response.data.articles.map((article, index) => ({
                ...article,
                id: index + 1 // Use index + 1 as a simple unique identifier for each article
            }));
            res.render('news', { articles, title: 'News Headlines' });
        })
        .catch(error => {
            console.error('Error fetching news:', error.message);
            res.render('error', { title: 'Error' });
        });
});

// Route to handle individual article pages
app.get('/article/:id', (req, res) => {
    const articleId = req.params.id;
    // Fetch the specific article using the articleId and render the full article page
    // For example, you can use the 'articles' array to find the article with the matching ID
    // const fullArticle = articles.find(article => article.id === parseInt(articleId));
    // Then, pass the fullArticle data to the 'article' template to render the full article page.
    // res.render('article', { article: fullArticle, title: 'Full Article' });
    // Replace the above example with your actual logic to fetch and render the full article.
    res.send(`You are viewing article with ID: ${articleId}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
