export type TRuleFunc = (value: string) => string | null;
export type TValidatorConfig = { [key: string]: TRuleFunc };
export type TErrorsMap = { [key: string]: string };

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/g;

export const requiredRule: TRuleFunc = (value) => {
  if (value) {
    return null;
  }

  return 'error.is_required';
};

export const emailRule: TRuleFunc = (value) => {
  if (emailRegexp.test(value)) {
    return null;
  }

  return 'error.invalid_email';
};

export const composeRules = (...funcs: Array<TRuleFunc>): TRuleFunc => {
  return (value) => {
    return funcs.reduce((error: null | string, fn) => {
      if (!error) {
        return fn(value);
      }

      return error;
    }, null);
  };
};

export function handleValidate<V extends { [key: string]: string }>(
  validatorConfig: TValidatorConfig,
  values: V
): TErrorsMap {
  return Object.entries(validatorConfig).reduce(
    (errors: TErrorsMap, [fieldName, fieldValidator]) => {
      const fieldValue = values[fieldName];

      const error = fieldValidator(fieldValue);

      if (error) {
        return {
          ...errors,
          [fieldName]: error,
        };
      }

      return errors;
    },
    {}
  );
}
