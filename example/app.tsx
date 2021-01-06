import { request as umiRequest } from 'umi';

console.log('get request', umiRequest);

export const request = {
  errorConfig: {
    adaptor(resData: any) {
      console.log('get resData', resData);
      return resData;
    },
  },
};
