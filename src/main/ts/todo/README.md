# TODO Application as Flux + DDD based.

This application is simple TODO application by both Flux and DDD based.(It's state sourcing, not event sourcing)

## Describing Layered Architecture

The following shows the layer architecture of this application.

The layer is what you need in order to isolate the domain layer from the other layers.


```
├── application
│   ├── TodoAction.ts
│   ├── TodoDispatcher.ts
│   ├── TodoState.ts
│   └── TodoStore.ts
├── domain
│   ├── TodoAggregate.ts
│   └── TodoRepository.ts
├── infrastructure
│   └── Guid.ts
└── ui
    ├── TodoActionCreator.ts
    ├── TodoActions.ts
    ├── TodoComponent.tsx
    ├── TodoViewModel.ts
    └── TodoViewModelConverter.ts
```


Direction of this application's dependency is the following. It's necessary for making simply relationships between components.

```
ui layer -> application layer -> domain layer
   |               |                |
   +---------------+----------------+-----> infrastructure layer
```

## Describing components.

- UI Layer
    - React and Action Creator of Flux
- Application Layer
    - State and Dispatcher, Store of Flux
- Domain Layer 
    - TodoAggregate(is also Global Entity) that represent TODO concept.
    - TodoRepository is a object to persist TodoAggregate.
- Infrastructure Layer
    - Guid, etc
    
## Difference of Flux's Store and DDD's Aggregate with Repository

Flux's Store is to support Application Logic and Application State. Even DDD, The roles of the Repository and Aggregate are like it, 
but Flux's Store and DDD's Repository with Aggregate difference is responsibility in the Layer.
Flux's Store is in the Application Layer as the application's requirement, DDD's Repository with Aggregate are in the Domain Layer which represent the domain's concept. Based on them, My idea is to implement Flux's Store by using DDD's Repository with Aggregate.

## How to integrate for Flux and DDD

According to the above way of thinking:

- Store which represent the Application State with Application Logic of Flux is realize by DDD's Repository and Aggregate.
- To convert from DDD's Aggregate to the view model which is used in React.Component.  

