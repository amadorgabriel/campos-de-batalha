// import { getCookie, deleteCookie } from "@/shared/utils/cookie-handler";
import { HttpError as CustomHttpError } from './http-error';
import { HttpError, HttpRequest, HttpResponse, IHttpClient } from './index.types';
import { corsConfig } from './cors-config';

export class HttpClient implements IHttpClient {
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseUrl: string = '', defaultHeaders: Record<string, string> = {}) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      ...corsConfig.headers,
      ...defaultHeaders,
    };
  }

  private async handleResponse<T>(response: Response): Promise<HttpResponse<T>> {
    if (!response.ok) {
      const error: HttpError = new Error(`HTTP error! status: ${response.status}`);
      error.statusCode = response.status;

      if (response.status === 401) {
        this.handleUnauthorized();
      }

      try {
        error.data = await response.json();
      } catch (e) {
        error.data = await response.text();
      }

      throw error;
    }

    const data = await response.json();
    const headers: Record<string, string> = {};

    response.headers.forEach((value, key) => {
      headers[key] = value;
    });

    return {
      statusCode: response.status,
      data,
      headers,
    };
  }

  private handleUnauthorized() {
    // deleteCookie(`${process.env.NEXT_PUBLIC_BEARER_TOKEN_KEY}`);

    if (typeof window !== 'undefined') {
      window.location.href = '/entrar';
    }
  }

  private buildUrl(url: string, queryParams?: Record<string, string | number | boolean>): string {
    const fullUrl = `${this.baseUrl}${url}`;

    if (!queryParams) {
      return fullUrl;
    }

    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');

    return `${fullUrl}?${queryString}`;
  }

  public async request<TResponse = any, TBody = any>(
    config: HttpRequest<TBody>
  ): Promise<HttpResponse<TResponse>> {
    const { url, method, body, headers, queryParams } = config;

    const requestUrl = this.buildUrl(url, queryParams);
    const requestHeaders = { ...this.defaultHeaders, ...headers };

    // const authToken = getCookie(`${process.env.NEXT_PUBLIC_BEARER_TOKEN_KEY}`);

    try {
      const response = await fetch(requestUrl, {
        method: method.toUpperCase(),
        headers: {
          ...requestHeaders,
          // Authorization: authToken ? `Bearer ${authToken}` : "",
        },
        body: body ? JSON.stringify(body) : undefined,
        ...corsConfig.fetchOptions,
      });

      return this.handleResponse<TResponse>(response);
    } catch (error) {
      if (error instanceof Error) {
        throw new CustomHttpError(error.message, {
          cause: error,
        });
      }
      throw error;
    }
  }
}
