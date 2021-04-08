import axios from 'axios';

const KEY = 'AIzaSyBQATj8MvFLUDkbam8GO0nRWIvzGIzyIeo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
