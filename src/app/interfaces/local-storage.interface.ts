export interface LocalStorage extends Pick<Storage, 'clear'> {
    accessToken?: string;
  }
  