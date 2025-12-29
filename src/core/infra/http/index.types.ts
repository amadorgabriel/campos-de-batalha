export type HttpMethod = 'get' | 'put' | 'delete' | 'post' | 'patch';

export interface HttpRequest<TBody = any> {
  url: string;
  method: HttpMethod;
  body?: TBody;
  headers?: Record<string, string>;
  queryParams?: Record<string, string | number | boolean>;
}

export interface HttpResponse<TData = any> {
  statusCode: number;
  data: {
    data: TData;
    message: string | null;
  };
  headers?: Record<string, string>;
}

export interface HttpError<TError = any> extends Error {
  statusCode?: number;
  data?: TError;
}

export interface IHttpClient {
  request<TResponse = any, TBody = any>(
    params: HttpRequest<TBody>
  ): Promise<HttpResponse<TResponse>>;
}
