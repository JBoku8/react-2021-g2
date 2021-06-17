import axios from 'axios';
import { getFakerBooks, getFakerCompanies } from './faker';

jest.mock('axios');

const traceMock = jest.fn();
global.console.trace = traceMock;

describe('faker service test get verb success', () => {
  test('getFakerBooks service function', async () => {
    const mockedResponse = {
      data: {
        data: [
          {
            title: 'book title',
          },
        ],
      },
    };
    axios.get = jest.fn().mockResolvedValue(mockedResponse);
    const response = await getFakerBooks({});
    expect(response).toStrictEqual(mockedResponse.data.data);
  });

  test('getFakerCompanies service function', async () => {
    const mockedResponse = {
      data: {
        data: [
          {
            title: 'company name',
          },
        ],
      },
    };
    axios.get = jest.fn().mockResolvedValue(mockedResponse);
    const response = await getFakerCompanies();
    expect(response).toStrictEqual(mockedResponse.data.data);
  });
});

describe('faker service test get verb failure', () => {
  test('getFakerBooks service function rejection', async () => {
    const mockedError = new Error('getFakerBooks error');
    axios.get = jest.fn().mockRejectedValue(mockedError);

    const response = await getFakerBooks({});
    expect(response).toStrictEqual(mockedError);
    expect(traceMock).toHaveBeenCalledWith(mockedError);
  });
  test('getFakerCompanies service function', async () => {
    const mockedError = new Error('getFakerCompanies error');
    axios.get = jest.fn().mockRejectedValue(mockedError);

    const response = await getFakerCompanies();
    expect(response).toStrictEqual(mockedError);
    expect(traceMock).toHaveBeenCalledWith(mockedError);
  });
});
