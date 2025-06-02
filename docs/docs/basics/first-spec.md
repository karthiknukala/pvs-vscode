---
sidebar_position: 1
---

# Writing Your First Specification

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

## Next Steps

After completing this guide, you can:
1. Learn about [Basic Types](./basic-types)
2. Explore [Theories](./theories)
3. Study [Proofs](./proofs) 