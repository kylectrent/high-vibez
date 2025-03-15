'use client';
import { Button } from '@/components/Button';
import { Box, TextField } from '@mui/material';
import axios from 'axios';
import React from 'react';

function News() {
  const [articles, setArticles] = React.useState<any[]>([]);
  const [input, setInput] = React.useState('');

  const BASE_URL =
    'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=0a10711403214f41b036c9162934e53a';

  const getArticles = async () => {
    const response = await axios.get(BASE_URL);
    setArticles(response.data.articles);
  };

  const getArticlesWithSearch = async () => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?country=us&category=health&apiKey=0a10711403214f41b036c9162934e53a`);
        setArticles(response.data.articles);
        setInput('');
    } catch (error) {
        console.error(error);
    } 
  }

  React.useEffect(() => {
    try {
      getArticles();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '1rem' }}>
            <TextField
                id="outlined-basic"
                label="Search Health News"
                variant="outlined"
                value={input}
                onChange={(e) => {setInput(e.target.value)}}
                sx={{
                '& .MuiInputBase-root': {
                    color: 'white', // Change text color inside input field
                },
                '& .MuiInputLabel-root': {
                    color: 'white', // Change label color
                },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                    borderColor: 'white', // Change border color
                    },
                    '&:hover fieldset': {
                    borderColor: 'white', // Change border color on hover
                    },
                    '&.Mui-focused fieldset': {
                    borderColor: 'white', // Change border color when focused
                    },
                },
                }}
            />
            <Button variant="contained" color="#59a46f" onClick={getArticlesWithSearch}>
                Search
            </Button>
        </Box>
        <ul>
            {articles.map((article) => (
            <li>{article.url}</li>
            ))}
        </ul>
    </div>
  );
}

export default News;
