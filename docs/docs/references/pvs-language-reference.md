# PVS Language Reference
## Introduction

PVS is a *P*rototype *V*erification *S*ystem for the development and analysis of formal specifications. The PVS system primarily consists of a specification language, a parser, a typechecker, a prover, specification libraries, and various browsing tools. This document describes the specification language and is meant to be used as a reference manual. The *PVS System Guide* is to be consulted for information on how to use the system to develop specifications and proofs. The *PVS Prover Guide* is a reference manual for the commands used to construct proofs. The website http://pvs.csl.sri.com provides many useful links, including various tutorials and examples.

In this section, we provide a brief summary of the PVS specificaiton language, enumerate the key design principles behind the language, and discuss a simple `stacks` example. 

### Summary of the PVS Language

A PVS specification consists of a collection of *theories*. Each theory consists of a signature for the type names and constants introduced in the theory, and the axioms, definitions, and theorems associated with the signature. For example, a typical specification for a queue would introduce the queue type and the operations of `enq`, `deq`, and `front` with their associated types. In such a theory, one can either define a representation for the queue type and its associated operations in terms of some more primitive types and operations, or merely axiomatize their properties. A theory can build on other theories: for example, a theory for ordered binary trees could build on the theory for binary trees. A theory can be parametric in certain specified types and values: as examples, a theory of queues can be parametric in the maximum queue length, and a theory of ordered binary trees can be parametric in the element type as well as the ordering relation. It is possible to place constraints, called assumptions, on the parameters of a theory so that, for instance, the ordering relation parameter of an ordered binary tree can be constrained to be a total ordering.
The PVS specification language is based on simply typed higher-order logic. Within a theory, types can be defined starting from base types (Booleans, numbers, etc.) using type constructors such as function, record, and tuple types. The terms of the language can
be constructed using, for example, function application, lambda abstraction, and record or tuple constructions.
There are a few significant enhancements to the simply typed language above that lend considerable power and sophistication to PVS. New uninterpreted base types may be introduced. One can define a predicate subtype of a given type as the subset of individuals in a type satisfying a given predicate: the subtype of nonzero reals is written as `{x:real | x /= 0}`.One benefit of such subtyping is that when an operation is not defined on all the elements of a type, the signature can directly reflect this. For example, the division operation on reals is given a type where the denominator is constrained to be nonzero. Typechecking then ensures that division is never applied to a zero denominator. Since the predicate used in defining a predicate subtype is arbitrary, typechecking is undecidable and may lead to proof obligations called type correctness conditions (TCCs). The user is expected to discharge these proof obligations with the assistance of the PVS prover. The PVS type system also features dependent function, record, and tuple type constructions. There is also a facility for defining a certain class of abstract datatype (namely well-founded trees) theories automatically.

### PVS Language Design Principles
### An Example: `stacks`

## The Lexical Structure

## Declarations

### Type Declarations

### Variable Declarations

### Constant Declarations

### Recursive Definitions

### Macros

### Inductive and Coinductive Definitions

### Formula Declarations

### Judgements

### Conversions

### Library Declarations

### Auto-rewrite Declarations

## Types

### Subtypes

### Function Types

### Tuple Types

### Cotuple Types

### Record Types

### Dependent Types

### Record and Tuple Type Extensions

## Expressions

### Boolean Expressions

### `IF-THEN-ELSE` Expressions

### Numeric Expressions

### Character and String Expressions

### Applications

### Binding Expressions

### `LET` and `WHERE` Expressions

### Set Expressions

### Tuple Expressions

### Projection Expressions

### Record Expressions

### Record Accessors

### Cotuple Expressions

### Override Expressions

### Coercion Expressions

### Tables

#### `COND` Expressions

#### Table Expressions

## Theories

### Theory Identifiers
### Theory Parameters
### Importings and Exportings
#### The `EXPORTING` Clause
#### `IMPORTING` Clauses
### Assuming Part
### Theory Part

## Theory Interpretations

## Name Resolution

## Abstract Datatypes
### A Datatype Example: `stack`
### Datatype Details
### Datatype Subtypes
### `CASES` Expressions

## The Grammar

## Bibliography