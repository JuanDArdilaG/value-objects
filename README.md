# Value Objects

> More about Value Objects by Martin Fowler -> [link](https://martinfowler.com/bliki/ValueObject.html)

This package aims to provide usual value objects for DDD implementations.

## Features

### Value Objects

Each VO have two scopes/definitions: Validator and Operator.

#### Validator

```typescript
type Validator {
    validate(val: T): Error | false | void;
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

Package provides the follow value object specifications:

- BooleanValueObject (boolean)
- NumberValueObject (number)
- StringValueObject (string)
  - EmailValueObject
  - JWTAccessToken
  - PasswordValueObject
  - PhoneNumberValueObject
  - IdentifierValueObject
  - UUIDValueObject
- DateValueObject(Date)
- ArrayValueObject (Object[])
- EnumValueObject (Object[])
- RecordValueObject (Record<string,number>)
