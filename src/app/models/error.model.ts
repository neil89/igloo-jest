export interface CustomError {
  code: ErrorType;
  httpErrorCode: number;
  httpErrorMessage: string;
  humanizedErrorMessage: string;
}

export type ErrorType = 'httpError' | undefined;
