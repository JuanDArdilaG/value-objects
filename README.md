# Value Objects
> More about Value Objects by Martin Fowler -> [link](https://martinfowler.com/bliki/ValueObject.html)

This package aims to provide usual value objects  from ddd implementations.

## Features

### Value Objects

Generic Value Objects implementation.
Each of one with this two scopes/definitions: Validator and Operator.

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
}
```

Package provides the follow value object specifications (with its corresponding )

- BooleanValueObject<T extends any> extends ValueObject<boolean>
- NumberValueObject extends ValueObject<number>
- StringValueObject extends ValueObject<string>
  - EmailValueObject extends StringValueObject
  - JWTAccessToken extends StringValueObject
  - PasswordValueObject extends StringValueObject
  - PhoneNumberValueObject extends StringValueObject
  - IdentifierValueObject extends StringValueObject
  - UUIDValueObject extends IdentifierValueObject
- DateValueObject extends ValueObject<Date>
- ArrayValueObject<T extends Object> extends ValueObject<T[]>
- EnumValueObject<T extends Object> extends ValueObject<T>
- RecordValueObject extends ValueObject<RecordValueObjectType>