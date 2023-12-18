## Domain Driven Development (DDD)

#### What is it? 
Software development approach which develops the application around a domain (core), which has a high level of abstraction.

#### S.O.L.I.D + Clean Architecture
The idea of this project is to learn to create a clean architecture api using the SOLID principles. All the layers of the application must depend on abstraction and not implementation, except for the Main layer which will put things together, meaning it will have to access implementations in order to make the application work. That is, if an use-case must include an element to the database, it will not call the implemented repository itself (i.g passed to the use-case by parameter), but an interface, because if we wanted to change the repository logic or database type, the use-case would still work since things are decoupled.

#### Layers
- Domain (core)
  - Entities (abstraction): Represent database tables
  - Use-Cases (abstraction): The actions the entities are allowed to do. Note: The definition of those actions are not defined here, since the core must have a high level of abstraction in order to ensure that parts are not dependent on others
- Application
  - Ports (abstraction)
  - Use-Cases (implementation): Here we can define one of the infinite logics for an entity action. 
  Note: Note how important is to decouple things. Here we have only 1 way to make validations, restrictions and etc. If in the future we want to change it, we could simply create another folder and those rules, and the rest of the application still would work because they depend on interfaces. Obviously, the main layer would have to use the new use-cases instead of the old ones. Read Controllers to understand a little bit more.
- Infrastructure
  - Database (implementation): Is where the repositories interfaces are going to be implemented. It's interesting to create separate folders depending on the database used. In MySql folder, for example, all the interfaces in application/ports/repositories will come together to form the book-repository, which will have a PrismaClient to connect to the MySql database. 
  Note: The interfaces don't know which db I am going to use, therefore they must be generic, decoupling the definition from the logic itself
  Note: Theses repositories
- Presentation
  - Controllers (implementation): Their function is simply receive the request, extract the data from it and call the use-cases to make the correct validations and operations with those data. 
  Note: Because we are decoupling parts, a controller does not have to know how the use-cases are validating the data, only know they are doing it. Consequently, we must use the interfaces (from domain) in theses controllers. If we want to change the use-case logic (in application layer), the main layer would have to pass those new use-cases to the controller, and since this are depending on interfaces (from domain), the controller would not be affected by those changesn and still work properly.