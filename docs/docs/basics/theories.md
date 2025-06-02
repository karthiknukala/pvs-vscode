---
sidebar_position: 3
---

# PVS Theories

This guide explains how to work with theories in PVS.

## What is a Theory?

A theory in PVS is a module that contains:
- Type definitions
- Function declarations
- Variable declarations
- Theorems and proofs
- Assumptions and axioms

## Basic Theory Structure

```pvs
example_theory: THEORY
BEGIN

  % Type definitions
  point: TYPE = [# x: real, y: real #]

  % Function declarations
  distance(p1, p2: point): real =
    sqrt((p1`x - p2`x)^2 + (p1`y - p2`y)^2)

  % Theorems
  distance_positive: THEOREM
    FORALL (p1, p2: point):
      distance(p1, p2) >= 0

END example_theory
```

## Theory Parameters

Theories can be parameterized:

```pvs
stack[T: TYPE]: THEORY
BEGIN
  stack_type: TYPE
  empty: stack_type
  push(x: T, s: stack_type): stack_type
  pop(s: stack_type): [T, stack_type]
END stack
```

## Importing Theories

```pvs
using_theory: THEORY
BEGIN
  IMPORTING stack[int]
  
  % Now we can use stack operations on integers
END using_theory
```

## Theory Organization

Best practices for organizing theories:
1. One theory per file
2. Clear dependencies
3. Minimal imports
4. Logical grouping of related concepts

## Next Steps

1. Learn about [Basic Types](./basic-types)
2. Study [Proofs](./proofs)
3. Practice writing your own theories 