# Design documentation

This document aims to serve as both clarification of the core concepts of that guide the development of this application, as well as my own personal attempt at fleshing things out in a clear and consistent manner.

## Terminology

### Item

An item is an instance of an entity.

This is user-generated data.

### Entity

An entity is the first level of abstraction which defines the qualities of any item that conforms to it.

### Property

A property is any form of arbitrary, yet specific, data which describes the qualities of an item. A property is arbitrary in the sense that it is entirely relative to entity to which it belongs, yet specific in the sense that it objectively describes the characteristics of the item in which it is an instance of.

## An example use case

Considering the previously stated descriptions, an example data model which follows this form of classification could be that "Red Dead Redemption 2" (an item) is an instance of a "video-game" (an entity), which contains various properties such as "platform", "publisher" and "year of release".
