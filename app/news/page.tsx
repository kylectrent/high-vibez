"use client";
import axios from 'axios';
import React from 'react'

function News() {
    const [articles, setArticles] = React.useState<any[]>([]);

    const BASE_URL = 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=0a10711403214f41b036c9162934e53a';

    const getArticles = async () => {
        const response = await axios.get(BASE_URL);
        setArticles(response.data.articles);
    }

    React.useEffect(() => {
        try {
            getArticles();
        } catch (error) {
            console.error(error);
        }
    }, [])
  return (
    <ul>{articles.map(article => <li>{article.url}</li>)}</ul>
  )
}

export default News