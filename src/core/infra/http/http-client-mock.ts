import { HttpMethod, HttpRequest, HttpResponse, IHttpClient } from './index.types';

export class HttpClientMock implements IHttpClient {
  private mockResponses: Map<
    string,
    {
      method: HttpMethod;
      pattern: string | RegExp;
      response: HttpResponse<any>;
    }
  > = new Map();
  private requests: HttpRequest[] = [];
  private delay: number = 1500;

  setMockResponse<T = any>(url: string | RegExp, method: HttpMethod, response: HttpResponse<T>) {
    const key = `${method}:${url.toString()}`;
    this.mockResponses.set(key, { method, pattern: url, response });
  }

  private findMatchingResponse(method: string, url: string) {
    for (const [_, { method: storedMethod, pattern, response }] of this.mockResponses) {
      if (storedMethod.toLowerCase() !== method.toLowerCase()) continue;

      if (pattern instanceof RegExp) {
        if (pattern.test(url)) return response;
      } else {
        if (url === pattern) return response;
      }
    }
    return null;
  }

  async request<TResponse = any, TBody = any>(
    config: HttpRequest<TBody>
  ): Promise<HttpResponse<TResponse>> {
    this.requests.push(config);

    const mockResponse = this.findMatchingResponse(config.method, config.url);

    if (mockResponse) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(mockResponse as HttpResponse<TResponse>), this.delay);
      });
    }

    return new Promise((resolve) => {
      setTimeout(() =>
        resolve({
          statusCode: 200,
          data: {
            data: {} as TResponse,
            message: 'Sucessful mock response',
          },
        })
      );
    });
  }
}
