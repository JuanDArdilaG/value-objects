# Password Value Object

This value object can be used to encapsulate the logic related with password creation and manipulation.

## Usage

Password VOs can only be created through the named constructors: **fromRaw** and **fromHashed**.

### fromRaw(plain: string)

> **Note:** the method is asynchronous.

Allows us to create the VO from a plain password. For example, in the user creation.

```
const pass = await PasswordValueObject.fromRaw("12345");
```

### fromHashed(hashed: string)

Allows us to create the VO from a hashed password. For example, in the user db retrieving.

```
const pass = PasswordValueObject.fromHashed("$...")
```

## Characteristics

### Password hashing - using [bcrypt](https://github.com/kelektiv/node.bcrypt.js).

By default, the passwords value objects only store the hashed representation of the password.

### Password validation - using [bcrypt](https://github.com/kelektiv/node.bcrypt.js).

Allow us to compare the hash with a plain password.

### Min and max length configuration.

By default, the password should have a length between 5 and 20 (inclusive). It can be modified changing a static properties (**options.min** and **options.max**) in the class.

```
PasswordValueObject.options.min = 10;
PasswordValueObject.options.max = 50;
```
