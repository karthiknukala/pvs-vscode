---
sidebar_position: 2
---

# PVS Basic Types

PVS provides a rich type system that helps ensure specification correctness.

## Built-in Types

### Primitive Types

- `bool`: Boolean values (`TRUE` and `FALSE`)
- `nat`: Natural numbers (0, 1, 2, ...)
- `int`: Integers (..., -1, 0, 1, ...)
- `real`: Real numbers
- `string`: Character strings

### Type Constructors

#### Records
```pvs
point: TYPE = [# x: real, y: real #]
```

#### Arrays
```pvs
vector: TYPE = ARRAY[nat -> real]
```

#### Enumerations
```pvs
days: TYPE = {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}
```

## Predicate Subtypes

PVS allows you to define types constrained by predicates:

```pvs
positive_real: TYPE = {x: real | x > 0}
probability: TYPE = {p: real | 0 <= p AND p <= 1}
even_int: TYPE = {n: int | EXISTS (k: int): n = 2 * k}
```

## Type Parameters

You can create parameterized types:

```pvs
stack[T: TYPE]: DATATYPE
BEGIN
  empty: empty?
  push(top: T, pop: stack): nonempty?
END stack
```

## Type Conversions

PVS provides automatic type conversion in some cases:
- `nat` to `int`
- `int` to `real`

For other conversions, you need explicit conversion functions.

## Best Practices

1. **Use Predicate Subtypes**
   - Capture invariants in types
   - Let the type checker find violations

2. **Choose Appropriate Types**
   - Use `nat` for counting
   - Use `real` for continuous values
   - Use enumerations for finite sets of values

3. **Document Type Constraints**
   - Comment on non-obvious constraints
   - Explain the reasoning behind type choices

## Common Patterns

### Optional Values
```pvs
optional[T: TYPE]: DATATYPE
BEGIN
  some(value: T): some?
  none: none?
END optional
```

### Bounded Types
```pvs
bounded_int(low: int, high: int): TYPE = {n: int | low <= n AND n <= high}
```

### Collection Types
```pvs
set[T: TYPE]: TYPE = pred[T]
finite_set[T: TYPE]: TYPE = {s: set[T] | is_finite(s)}
```

## Next Steps

1. Write your [First Specification](./first-spec)
2. Learn about [Theories](./theories)
3. Study [Proofs](./proofs) 