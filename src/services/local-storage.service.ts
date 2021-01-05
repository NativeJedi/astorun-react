const LocalStorageService = {
  getItem(key: string): string | null {
    const item = localStorage.getItem(key);

    if (item) {
      return JSON.parse(item);
    }

    return item;
  },

  setItem(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

export default LocalStorageService;
