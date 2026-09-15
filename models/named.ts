// Pin a model class's `name` so a bundler cannot rename it.
//
// Every EntitySchema here is declared with BOTH `name: 'Short'` and
// `target: Short`. When a target is given, TypeORM takes the metadata's name
// from the class, not from the `name` option: EntityMetadata does
// `targetName = target instanceof Function ? target.name : target`. Relations
// then name their other side by string — `target: 'Workspace'` — and those
// strings are matched against that class-derived name.
//
// So if a minifier renames `class Workspace {}` to `class i {}`, no relation
// resolves any more and the connection fails to build at all, with
// `Entity metadata for i#workspace was not found`. Every query fails, not just
// the ones using that relation.
//
// This is not hypothetical: it took the dashboard down on 2026-09-15. Next 12
// leaves these class names alone and Next 14 minifies them, so identical code
// was harmless in three repos and fatal in the fourth.
//
// A `public static name = 'Short'` used to hold the name, and was removed
// because assigning to `name` throws under some compile targets ("Cannot
// assign to read only property 'name'") and broke the TypeORM CLI.
// defineProperty does the same job without assigning: `Function.name` is
// configurable, so this is always permitted.
export const named = <T extends Function>(target: T, name: string): T => {
  Object.defineProperty(target, 'name', { value: name, configurable: true });
  return target;
};
