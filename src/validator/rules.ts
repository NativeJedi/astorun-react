export type TRuleFunc = (value: string) => string | null;
export type TValidatorConfig = { [key: string]: TRuleFunc[] };
export type TErrorsMap = { [key: string]: string };

const emailRegexp = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}/;

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

// export const composeRules = (...funcs: Array<TRuleFunc>): TRuleFunc => {
//   return (value) => {
//     return funcs.reduce((error: null | string, fn) => {
//       if (!error) {
//         return fn(value);
//       }
//
//       return error;
//     }, null);
//   };
// };

export function handleValidate<V extends { [key: string]: string }>(
  validatorConfig: TValidatorConfig,
  values: V
): TErrorsMap {
  return Object.entries(validatorConfig).reduce(
    (errors: TErrorsMap, [fieldName, fieldRules]) => {
      const fieldValue = values[fieldName];

      const findedErrors = fieldRules.map((validator) => validator(fieldValue));

      const error = findedErrors.find(Boolean);

      if (fieldName === 'email') {
        console.log('fieldRules:', fieldRules);
        console.log('fieldName:', fieldName);
        console.log('fieldValue:', fieldValue);
        console.log('findedErrors:', findedErrors);
      }

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
