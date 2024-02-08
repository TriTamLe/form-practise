export const PASSWORD_REGEX = {
  ALL_RULES: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9\s])[^\s]{8,20}$/,
  BOTH_UPPER_CASE_AND_LOWER_CASE: /^(?=.*[a-z])(?=.*[A-Z]).{1,}$/,
  PASSWORD_LENGTH: /^.{8,20}$/,
  AT_LEAST_ONE_NUMBER: /^(?=.*[0-9]).{1,}$/,
  AT_LEAST_ONE_SPECIAL_CHARACTER: /^(?=.*[^a-zA-Z\d\s]).{1,}$/,
  DO_NOT_CONTAIN_SPACES: /^[^\s]{1,}$/,
}
