export interface Error {
  code: ErrorType;
  httpErrorCode: number;
  httpErrorMessage: string;
  humanizedErrorMessage: string;
}

export type ErrorType = 'httpError' | undefined;
