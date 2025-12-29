import { HttpClient } from './http-client';
import { HttpClientMock } from './http-client-mock';
import { IHttpClient } from './index.types';

export class HttpClientFactory {
  private static instance: IHttpClient | null;
  private static mockInstance: HttpClientMock | null;

  public static create(): IHttpClient {
    if (!this.instance) {
      this.instance = new HttpClient(process.env.NEXT_PUBLIC_API_URL);
    }

    return this.instance;
  }

  public static createMock(): HttpClientMock {
    if (!this.mockInstance) {
      this.mockInstance = new HttpClientMock();
    }

    return this.mockInstance;
  }
}
