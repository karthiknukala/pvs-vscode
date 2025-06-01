---
sidebar_position: 4
---

# Writing Your First PVS Specification

This guide will walk you through writing your first PVS specification and proving a simple theorem.

## Basic PVS Concepts

PVS specifications are organized into theories. Each theory can contain:
- Type declarations
- Function definitions
- Theorems
- Proofs

## Your First Theory

Create a new file called `first_steps.pvs` with the following content:

```pvs
first_steps: THEORY
BEGIN

  % Simple function definition
  double(x: real): real = 2 * x

  % A simple theorem about double
  double_of_zero: THEOREM
    double(0) = 0

  % A more interesting theorem
  double_distributive: THEOREM
    FORALL (x, y: real):
      double(x + y) = double(x) + double(y)

END first_steps
```

Let's break down the components:

1. `first_steps: THEORY`: Declares a new theory
2. `double`: A function that takes a real number and returns its double
3. Two theorems about the `double` function

## Proving Theorems

### Simple Proof

To prove `double_of_zero`:

1. Place your cursor on the theorem
2. Use the VSCode command palette to start the prover
3. The proof is automatic as it's a simple computation

### Interactive Proof

For `double_distributive`:

1. Start the prover
2. Use these commands:
   ```
   (skosimp)  % Introduce universal variables
   (expand "double")  % Expand function definition
   (assert)  % Solve arithmetic
   ```

## Common Specification Patterns

### Type Definitions

```pvs
point: TYPE = [# x: real, y: real #]

direction: TYPE = {d: real | d >= 0 AND d < 360}
```

### Recursive Functions

```pvs
factorial(n: nat): RECURSIVE nat =
  IF n = 0 THEN 1
  ELSE n * factorial(n - 1)
  ENDIF
MEASURE n
```

### Predicates

```pvs
is_even(n: int): bool = EXISTS (k: int): n = 2 * k
```

## Best Practices

1. **Naming Conventions**
   - Use descriptive names
   - Separate words with underscores
   - End theorem names with descriptive suffixes

2. **Documentation**
   - Comment complex expressions
   - Explain proof strategies
   - Document assumptions

3. **Theory Organization**
   - Keep theories focused
   - Use meaningful imports
   - Group related definitions

## Next Steps

After mastering these basics, you can:
1. Explore more complex specifications
2. Learn advanced proof techniques
3. Study the PVS standard library
4. Contribute to the PVS community

## Additional Resources

- [PVS Language Reference](https://pvs.csl.sri.com/doc/language-reference.html)
- [PVS Prover Guide](https://pvs.csl.sri.com/doc/prover-guide.html)
- [Example Specifications](https://github.com/SRI-CSL/PVS/tree/master/examples) 