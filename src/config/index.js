const BACKEND_URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080'
    : 'https://engineering-videos.herokuapp.com';
    
export default {
  BACKEND_URL
}
