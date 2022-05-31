---
sidebar_position: 1
title: Introduction
hide_title: true
slug: /
---

<center>

![Erde Logo](../../static/logo.svg)

# Erde

</center>

## Introduction

Erde is an expressive programming language that compiles to Lua. Syntactically 
it favors symbols over keywords and adds support for many features commonly 
found in other programming languages that Lua otherwise sacrifices for 
simplicity.

Erde may be compiled to Lua, run on the command line, or loaded directly into 
Lua scripts using `require('erde.loader')`.

## FAQ

#### Why not XXX (Moonscript / Fennel)?

Unfortunately neither [moonscript](https://moonscript.org) nor 
[fennel](https://fennel-lang.org) seemed like attractive options, as I'm not a 
huge fan of whitespace languages nor lisp. The other options seemed to be either 
unmaintained or lacking specific features.

#### Why symbols over keywords?

This is partially a personally preference and partially that many of the 
commonly used programming languages today tend to use symbols over keywords 
(Rust, Golang, Javascript, etc). This is meant to make Erde more approachable 
for those coming from languages other than Lua.

#### Should I use Erde?

It depends. Lua is already an amazingly designed language. If you are only
using Lua lightly, then working with Erde will probably incur more overhead than
it's worth. However, if you are working with Lua a lot (or simply prefer the
syntax of Erde), then by all means feel free to try it out!
