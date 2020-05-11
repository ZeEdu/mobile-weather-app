export interface ApiError {
   headers: Headers;
   status: number;
   statusText: string;
   url: string;
   ok: boolean;
   name: string;
   message: string;
   error: Error;
}

export interface Error {
   cod: string;
   message: string;
}

export interface Headers {
   normalizedNames: {};
   lazyUpdate: null;
}
