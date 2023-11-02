# K6 Demo

This demo is a load test to the [k6 register endpoint](https://test-api.k6.io/user/register/). It consists in two tests, one to register multiple users using valid credentials and the other to register multiple users using credential already used. 

## Setting up

### Dependencies

1. Make sure you have installed on your system:
- [K6](https://k6.io/open-source/)

2. Libraries used in the project:

- [@faker-js/faker](https://fakerjs.dev/)
- [K6 HTML Reporter V2](https://github.com/benc-uk/k6-reporter#k6-html-report-exporter-v2)

### Running

To execute the tests, run: 

```bash
K6 run registerUserTests.js
```

## Reports

When the test finished to run a report with the result is generate in the `reports` folder of the project. If you want to change the name or location you have to go to the tests file and change this part of the code:

```javascript
export function handleSummary(data) {
  return {
    [`hereFolderName/hereReportName.html`]: htmlReport(data),
  }
};
```

## Collaboration

### Naming Conventions

- Use `lowerCamelCase`for variables, properties, files and folder names. 
- Use prefix like `is`, `are`, or `has` for bool variables.
- Use self explanatory names for variables, E.g `let fields`.
- Always start functions with a verb and the entity being affect by it, E.g `registerUser()`.
