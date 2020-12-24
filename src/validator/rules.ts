export type TRuleFunc = (value: string) => string | null;
export type TValidatorConfig = { [key: string]: TRuleFunc };
export type TErrorsMap = { [key: string]: string };

export const requiredRule: TRuleFunc = (value) => {
  if (value) {
    return null;
  }

  return 'error.is_required';
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
