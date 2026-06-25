type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

function withArrayKeys(value: JsonValue, path = "item"): JsonValue {
  if (Array.isArray(value)) {
    return value.map((item, index) => {
      if (!item || typeof item !== "object" || Array.isArray(item)) {
        return withArrayKeys(item, `${path}-${index}`);
      }

      return {
        _key: `${path}-${index}`,
        ...withArrayKeys(item, `${path}-${index}`),
      };
    });
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [key, withArrayKeys(nestedValue, `${path}-${key}`)]),
    );
  }

  return value;
}

export function documentInitialValue<T extends { _id: string; _type: string }>(document: T) {
  const { _id, _type, ...initialValue } = document;

  return withArrayKeys(initialValue as JsonValue) as Record<string, unknown>;
}
