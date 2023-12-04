import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const socket_api = process.env.SOCKET_TEST_API
const bridges= 'https://api.socket.tech/v2/supported/bridges'

// Swapping tether on ETH to MATIC on polygon
const fromTokenAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
const toTokenAddress = '0x0000000000000000000000000000000000001010'
const fromChainId = '1'
const toChainId = '137'
const fromAmount = '10'
const userAddress = '0x89d9Dd2e85ecC305E276f51BB21fd4C708Be9487'
const recipient = '0x89d9Dd2e85ecC305E276f51BB21fd4C708Be9487'
const quote = 'https://api.socket.tech/v2/quote?fromChainId=1&fromTokenAddress=0x2791bca1f2de4661ed88a30c99a7a9449aa84174&toChainId=56&toTokenAddress=0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3&fromAmount=100000000&userAddress=0x3e8cB4bd04d81498aB4b94a392c334F5328b237b&recipient=0x3e8cB4bd04d81498aB4b94a392c334F5328b237b&uniqueRoutesPerBridge=true&sort=output'

const quote_string = `https://api.socket.tech/v2/quote?fromChainId=${fromChainId}&fromTokenAddress=${fromTokenAddress}&toChainId=${toChainId}&toTokenAddress=${toTokenAddress}&fromAmount=${fromAmount}&userAddress=${userAddress}&recipient=${recipient}&uniqueRoutesPerBridge=true&sort=output`
const endpoint = quote_string

console.log(socket_api)
// axios.defaults.headers.common['Authorization'] = `Bearer ${socket_api}`;

const headers = {
  'API-KEY': socket_api,
};
// Now, you can use axios to make HTTP requests to the endpoint
axios.get(endpoint, {headers})
  .then((response) => {
    console.log('Response:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });