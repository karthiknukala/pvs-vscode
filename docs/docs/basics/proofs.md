---
sidebar_position: 4
---

# PVS Proofs

This guide explains how to write and manage proofs in PVS.

## Proof Basics

A proof in PVS is a sequence of commands that establish the truth of a theorem.

## Common Proof Commands

### Basic Commands
- `(skosimp)`: Skolemize and simplify
- `(assert)`: Apply decision procedures
- `(expand)`: Expand definitions
- `(split)`: Split into subcases
- `(flatten)`: Flatten logical expressions

### Example Proof

```pvs
example: THEORY
BEGIN
  abs_nonneg: THEOREM
    FORALL (x: real): abs(x) >= 0

  %|- abs_nonneg :
  %|  (skosimp)
  %|  (assert)
  %|  QED
END example
```

## Proof Strategies

### Built-in Strategies
- `(grind)`: Powerful general-purpose strategy
- `(induct)`: Induction strategy
- `(rewrite)`: Rewriting strategy

### Custom Strategies

```lisp
(defstep my-strategy ()
  (then (skosimp)
        (assert)
        (split)))
```

## Managing Proofs

### Saving Proofs
- Proofs are saved in `.prf` files
- One proof file per PVS file
- Automatic saving on successful proof

### Rerunning Proofs
- Use `prove-importchain` command
- Verify proofs after changes
- Check proof status with `show-proofs`

## Best Practices

1. **Keep Proofs Simple**
   - Break complex proofs into lemmas
   - Use meaningful names for theorems
   - Document proof steps

2. **Use Automation Wisely**
   - Start with simple strategies
   - Use specialized strategies when needed
   - Understand what each command does

3. **Maintain Proofs**
   - Review proofs regularly
   - Update proofs when theories change
   - Document changes to proofs

## Next Steps

1. Practice with [Basic Types](./basic-types)
2. Study [Theories](./theories)
3. Try proving more complex theorems 