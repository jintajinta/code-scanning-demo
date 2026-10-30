export const db = {
  async query(_sql: string, _params: unknown[] = []) { return []; },
  async update(_table: string, _id: string, _values: Record<string, unknown>) { return {}; },
};
