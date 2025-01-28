export type ServerErrors = {
  errors: {
    extensions: {
      code: ErrorCode;
    };
    name: string;
    fieldName?: string;
    stack: string;
    message: string;
  }[];
};

export enum ErrorCode {
  ERR_INCORRECT_EMAIL_OR_PASSWORD = 'ERR_INCORRECT_EMAIL_OR_PASSWORD',
  ERR_ACCOUNT_ALREADY_EXIST = 'ERR_ACCOUNT_ALREADY_EXIST',
  ERR_FIELD_REQUIRED = 'ERR_FIELD_REQUIRED',
  ERR_INCORRECT_PASSWORD = 'ERR_INCORRECT_PASSWORD',
  ERR_INVALID_PASSWORD = 'ERR_INVALID_PASSWORD',
  ERR_NOT_VALID = 'ERR_NOT_VALID',
  ERR_AUTH = 'ERR_AUTH',
  ERR_NO_FILES = 'ERR_NO_FILES',
  ERR_NOT_ALLOWED = 'ERR_NOT_ALLOWED',
  ERR_NOT_FOUND = 'ERR_NOT_FOUND',
  ERR_VALIDATION_ERROR = 'ERR_VALIDATION_ERROR',
  ERR_INVALID_QUERY_PARAMS = 'ERR_INVALID_QUERY_PARAMS',
  ERR_INTERNAL_SERVER = 'ERR_INTERNAL_SERVER',
}

export const CodesToUp: ErrorCode[] = [ErrorCode.ERR_AUTH, ErrorCode.ERR_INTERNAL_SERVER];

export const isTypeWithDataAsServerErrors = (error: unknown): error is { data: ServerErrors } => {
  if (typeof error !== 'object' || error === null) {
    return false;
  }

  if (!('data' in error) || !isServerErrors((error as { data: unknown })?.data)) {
    return false;
  }

  return true;
};

export const isServerErrors = (error: unknown): error is ServerErrors => {
  if (typeof error !== 'object' || error === null) {
    return false;
  }

  if (!('errors' in error) || !Array.isArray((error as ServerErrors).errors)) {
    return false;
  }

  return (error as ServerErrors).errors.every(
    (err: unknown): err is ServerErrors['errors'][number] => {
      if (typeof err !== 'object' || err === null) {
        return false;
      }

      if (
        typeof (err as ServerErrors['errors'][number]).name !== 'string' ||
        typeof (err as ServerErrors['errors'][number]).message !== 'string' ||
        typeof (err as ServerErrors['errors'][number]).stack !== 'string'
      ) {
        return false;
      }

      if (
        !('extensions' in err) ||
        typeof (err as ServerErrors['errors'][number]).extensions !== 'object' ||
        (err as ServerErrors['errors'][number]).extensions === null
      ) {
        return false;
      }

      if (
        typeof (err as ServerErrors['errors'][number]).extensions.code !== 'string' ||
        !(Object.values(ErrorCode) as string[]).includes(
          (err as ServerErrors['errors'][number]).extensions.code,
        )
      ) {
        return false;
      }

      if (
        'fieldName' in err &&
        typeof (err as ServerErrors['errors'][number]).fieldName !== 'string'
      ) {
        return false;
      }

      return true;
    },
  );
};
