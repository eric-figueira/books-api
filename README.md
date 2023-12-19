## Books API
This project is a simple api which could be used in a library for book management. The idea of it is to learn how to make an api following the SOLID principles as well as developing it using Clean Architecture with DDD.

### Domain Driven Design (DDD)

#### What is it? 
Software development approach which develops the application around a domain (core), which has a high level of abstraction.

#### S.O.L.I.D + Clean Architecture
The idea of this project is to learn to create a clean architecture api using the SOLID principles. All the layers of the application must depend on abstraction and not implementation, except for the Main layer which will put things together, meaning it will have to access implementations in order to make the application work. That is, if an use-case must include an element to the database, it will not call the implemented repository itself (i.g passed to the use-case by parameter), but an interface, because if we wanted to change the repository logic or database type, the use-case would still work since things are decoupled.

#### Layers
- Domain (core)
  - Entities (abstraction): Represent database tables.
  - Use-Cases (abstraction): The actions the entities are allowed to do. Note: The definition of those actions are not defined here, since the core must have a high level of abstraction in order to ensure that parts are not dependent on others.
- Application
  - Ports (abstraction):
    - Presentation (abstraction): Contains interfaces that will be usefull in the presentation layer, such as controller, request and response. Having an interface for controllers will be helpful when creating express-controllers adapters in the main. The request and responses interfaces are useful because I can standardize and know exactly how the data will be received in the controllers
    - Repositories (abstraction): Interfaces are implemented in the infrastructure layer. They say what an entity's database access should be able to do. 
    Note: These interfaces must exist so the application does not depend on the exact db implementation. The use-cases (implementation in application layer) call these reporitories interfaces instead of the db itseft. That is vital because we could change both use-cases and repositories implementations and they would still work properly. We could even have 2 use-cases implmentations and 2 dbs, and in the main, connect the respective layers and they'd work, since the use-cases implementations (application) depend on the repository interface and not the implementation itself.
  - Use-Cases (implementation): Here we can define one of the infinite logics for an entity action. 
  Note: Notice how important is to decouple things. Here we have only 1 way to make validations, restrictions and etc. If in the future we want to change it, we could simply create another folder and those rules, and the rest of the application still would work because they depend on interfaces. Obviously, the main layer would have to use the new use-cases instead of the old ones. Read Controllers to understand a little bit more.
- Infrastructure
  - Database (implementation): Is where the repositories interfaces are going to be implemented. It's interesting to create separate folders depending on the database used. In MySql folder, for example, all the interfaces in application/ports/repositories will come together to form the book-repository, which will have a PrismaClient to connect to the MySql database. 
  Note: The interfaces don't know which db I am going to use, therefore they must be generic, decoupling the definition from the logic itself. Obs: If you see the index.ts of book-repository.ts, you'll notice that I instanciate BookRepository and asign it to other variables. That is done because it is easier to do all the prisma access in a single file (book-repository) and then retrict the repositories (index.ts) to only do what they're supposed to do, otherwise, a repository in a factory (main) to create a book could call a delete function.
- Presentation
  - Controllers (implementation): Their function is simply receive the request, extract the data from it and call the use-cases to make the correct validations and operations with those data. 
  Note: Because we are decoupling parts, a controller does not have to know how the use-cases are validating the data, only know they are doing it. Consequently, we must use the interfaces (from domain) in theses controllers. If we want to change the use-case logic (in application layer), the main layer would have to pass those new use-cases to the controller, and since this are depending on interfaces (from domain), the controller would not be affected by those changesn and still work properly.
  - Utils: I could still have a Responses and Validations folder to verify parameters and contain httpResponses (but I did not do them for learning purposes).
- Main (all implementation)
  - Adapters: Because we do not want our api to be strictly dependent on Express, since we could want to use other framework, it is important to make all the application functional independent on it. How? Up until now, we were using Request, Response types definied by us in the presentation layer (in order to make the application independent of frameworks). However, because the main layers must make everything functional and is using express, those types are not in express types definitions, therefore it'd not work. That's where adapters take place. They'll be used when a factory returns a controller. But notice that our Controller uses Request and Response types. Express do not know that types and what they mean. Then, adapters will "convert" a httpRequest from express to our request type, and after, "convert" our response type to the httpResponse from express. The same thing could be done to a middleware definied by us. If we wanted to change the framework, it'd be simple as creating another adapter to the types of that framework.
  - Configuration: Calls the setup of middlewares and routes, linking them to the app.
  - Factories: So far, we have been dependent on interfaces. Now it is time to make everything functional and put things together. Its function is to use the use-cases implementation in application layer (with the repositories of infrastructure layer) and pass them to a controller, which will be returned by the factory and "converted" into an adapter. Notice that here we only use implementations. Here is where we could use another use-case logic from application layer. (Observe that the controller still use the UseCase interfaces because it does not depend on which use-case logic it will use).
  - Middlewares: Defines and configures middlewares (cors, json, etc).
  - Routes: Assings each http route to its corresponding factory (the controller returned by the factory will be passed to a express controller adapter).
- Obs: Notice how every layer (except Main and Infrastrucrure) depend on abstractions and interfaces. This idea of decoupling things is the base of SOLID and Clean Archicture, making things independent and easier to maintain and fix bugs. Not only, but the whole application is not based on a single database type or node.js framework, which implies that if you'd like to change those things, minor changes would have to be done but not the whole api or logic

Thanks to [João Pedro F. Barbosa](https://github.com/ojpbarbosa) and [Marcos Godinho Filho](https://github.com/Marcos-Godinho-Filho) for teaching me and clearing up my doubts about these topics.
