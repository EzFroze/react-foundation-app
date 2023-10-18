export interface LoginSchema {
  username: string;
  password: string;
  isLoading: boolean;
  errorI18nKey?: string;
}
