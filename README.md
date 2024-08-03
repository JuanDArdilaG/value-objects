# DDD Value Objects

> More about: [Value Objects by Martin Fowler](https://martinfowler.com/bliki/ValueObject.html)

This package aims to provide usual value objects for DDD implementations.
Package provides the follow value object specifications:
|VO |Encapsules |
|---|---|
|BooleanValueObject | boolean |
|NumberValueObject | number |
|StringValueObject | string |
|EmailValueObject | string |
|JWTAccessToken | string |
|[PasswordValueObject](https://github.com/JuanDArdilaG/value-objects/tree/master/src/PasswordValueObject) | string |
|PhoneNumberValueObject | string |
|IdentifierValueObject | string |
|UUIDValueObject | string |
|DateValueObject | Date |
|ArrayValueObject<T> | T[] |
|EnumValueObject | T[] |
|RecordValueObject | Record<string \| number, string \| number> |

## Features

### Value Objects

Each VO have two scopes/definitions: Validator and Operator.

#### Validator

```typescript
type Validator {
    validate(val: T): Error | boolean;
}
```

#### Operator

```typescript
type Operator {
  add(a: ValueObject<T>, b: ValueObject<T>): ValueObject<T>;
  substract(a: ValueObject<T>, b: ValueObject<T>): ValueObject<T>;
  times(times: NumberValueObject, x: ValueObject<T>): ValueObject<T>;
  isLessThan(a: ValueObject<T>, b: ValueObject<T>): BooleanValueObject<T>;
  isBiggerThan(a: ValueObject<T>, b: ValueObject<T>): BooleanValueObject<T>;
  isBiggerOrEqualThan(
    a: ValueObject<T>,
    b: ValueObject<T>
  ): BooleanValueObject<T>;
  equalTo(a: ValueObject<T>, b: ValueObject<T>): BooleanValueObject<T>;
  differsFrom(a: ValueObject<T>, b: ValueObject<T>): BooleanValueObject<T>;
}
```
