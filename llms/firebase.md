# Firebase playbook

Read this before any Realtime Database write.

Data models and path references live in [`frontend.md`](frontend.md).

## Firebase Realtime Database — write semantics

`update()` is a **partial write**: only keys present in the object are touched. Keys absent from the object are left unchanged in the database. This means:

- **Never use conditional spreads to omit a field when you intend to clear it.** `...(flag ? { field: true } : {})` silently leaves a stale `true` in the DB when `flag` is `false`. Always include the field explicitly: `field: flag`.
- **`null` deletes a key.** To remove an optional field from the database, set it to `null` in the update object. `undefined` behaves like the key is absent — it does NOT delete.
- **`false` persists as `false`.** Boolean `false` is a valid stored value and will overwrite a previous `true`.

When writing an edited document that has optional fields (`name?`, `watchedClassIds?`, etc.), explicitly null-out fields that are absent so stale values are cleared:

```ts
const data: Record<string, unknown> = {
  ...alert,
  name: alert.name ?? null, // null → Firebase deletes the key
  watchedClassIds: alert.watchedClassIds ?? null,
};
await update(ref(db, path), data);
```

See `editAlert.ts` for the canonical implementation of this pattern.
