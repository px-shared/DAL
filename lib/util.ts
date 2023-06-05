import { EntitySchema } from 'typeorm';

export const pick = <T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> =>
  keys.reduce((o, k) => ((o[k] = obj[k]), o), {} as Pick<T, K>);

export const pickEntitySchema = <T>(schema: EntitySchema<T>, obj: T) =>
  pick<T, keyof T>(
    obj,
    ...(Object.keys(schema.options.columns) as (keyof T)[])
  );
