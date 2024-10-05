import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '96adfa7c91544d8090fadba6548b88d3', //TODO: Refresh for new API key and store it in ENV variable.
  },
});
