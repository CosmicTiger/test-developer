import axios from 'axios';

// This would be the limit that is in the reuirements
export const PER_PAGE = 10;

/**
 * 
 */
export const github = axios.create({
    baseURL: 'https://api.github.com/',
});
