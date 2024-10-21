// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';
// import { throttle } from 'lodash';
jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock('lodash', () => {
  const originalModule = jest.requireActual('lodash');
  return {
    ...originalModule,
    throttle: jest.fn((fn) => {
      const throttledFn = (...args: any) => fn(...args);
      throttledFn.cancel = jest.fn();
      throttledFn.flush = jest.fn();
      return throttledFn;
    }),
  };
});

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    const API_URL = 'https://jsonplaceholder.typicode.com';
    const relativePath = '/posts/1';
    const mockData = { id: 1, title: 'test title' };

    const mockedAxiosInstance = {
      get: jest.fn().mockResolvedValue({ data: mockData }),
    };

    (axios.create as jest.Mock).mockReturnValue(mockedAxiosInstance);

    await throttledGetDataFromApi(relativePath);

    expect(axios.create).toHaveBeenCalledWith({ baseURL: API_URL });
  });

  test('should perform request to correct provided url', async () => {
    const relativePath = '/todos/1';
    const responseData = { id: 1, title: 'test title' };

    mockedAxios.create.mockReturnThis();
    mockedAxios.get.mockResolvedValue({ data: responseData });

    const resultPromise = throttledGetDataFromApi(relativePath);

    await new Promise((resolve) => setTimeout(resolve, 100));

    const result = await resultPromise;

    expect(mockedAxios.get).toHaveBeenCalledWith(relativePath);
    expect(result).toEqual;
  });

  test('should return response data', async () => {
    const relativePath = '/posts/1';
    const mockData = { id: 1, title: 'test title' };
    const mockedAxiosInstance = {
      get: jest.fn().mockResolvedValue({ data: mockData }),
    };

    (axios.create as jest.Mock).mockReturnValue(mockedAxiosInstance);

    const result = await throttledGetDataFromApi(relativePath);

    expect(result).toEqual(mockData);
    expect(mockedAxiosInstance.get).toHaveBeenCalledWith(relativePath);
  });
});
