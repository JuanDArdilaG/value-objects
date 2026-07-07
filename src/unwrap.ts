type Primitive = string | number | boolean | bigint | null | undefined;

function hasValueProperty(value: object): value is { value: unknown } {
  return "value" in value;
}

export function unwrap(value: unknown): Primitive {
  if (typeof value === "object" && value !== null && hasValueProperty(value))
    return unwrap(value.value);
  return value as Primitive;
}
