testing with jasmine
jsdmine_setup folder : for typeScript and jasmine setup
-  jasmine: jasmine lib
-  jasmine spec reporter : output results in the console in a readable way
-  @types/jasmine : to make jasmine file works with typeScript


- jasmine file stucture 
├── node_modules
├── spec
│      └── support
│           └── jasmine.json
├── src
│     ├──  tests
│     │     ├── helpers
│     │     │      └── reporter.ts
│     │     └── indexSpec.ts
│     └── index.ts
├── package-lock.json
├── package.json
└── tsconfig.json

1- In the root directory of the project, create a folder named spec.
2- In the spec folder, create a folder named support.
3- In the support folder, create a file named jasmine.json to hold the primary configurations for Jasmine.
4- In the src folder, add a folder named tests.
5- In tests add a file named indexSpec.ts to hold the tests for code in the index.js file.
6- In the tests folder, add another folder named helpers.
7- In helpers, add a file named reporter.ts. This will be the primary configuration for your spec reporter.


- terms 
New Terms in This Lesson
Term	Definition
Behavior Driven Development	A development style built on Test Driven Development where the focus is user interaction and stakeholders.
Comparison Test	A type of test that compares strings, numbers, objects, or arrays
Endpoint	An endpoint is the URL of the REST API with the method that gets, adds to, or modifies the data of an API in some way
Numerical Matchers Test	A test of numerical values within a specified range of the expected value
Spec	An individual test
Suite	A group of related tests
Test-Driven Development	A development style where tests are written before development
Truthiness	When a conditional proves to be truth-like such as the boolean true or a condition being true, or a value not equal to 0, NaN, undefined, null, or empty.