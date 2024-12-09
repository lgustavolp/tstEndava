# Vowel Counter Test with Cypress

This project includes a Cypress-based testing suite for verifying the functionality of a vowel counting utility. The function calculates the total number of vowels in a given name and the number of vowels that are repeated at least once.

## Prerequisites

Before running the project, ensure you have the following installed:

1. [Node.js](https://nodejs.org/) (version 14 or higher)
2. [npm](https://www.npmjs.com/) (comes with Node.js)
3. A code editor (e.g., [VS Code](https://code.visualstudio.com/))

## Installation

Follow these steps to install and run the project:

4. Clone the repository:
   ```
   git clone <repository-url>
   cd <repository-folder>
    ```

5. Install the dependencies:
   ```
   npm install
   ```

6. Install Cypress if not already installed:
   ```
   npm install cypress --save-dev
    ```

## Directory Structure

project/

├── src/

    └── vowelCounter.js    # The vowel counting function

├── cypress/

    ├── e2e/
    
    │   └── vowelCounter.spec.js    # Cypress tests

│   └── support/

        └── commands.js    # Cypress custom 

├── node_modules/

├── cypress.config.js      # Cypress configuration file

├── package.json           # Project metadata and dependencies

├── package-lock.json

└── README.md              # Project documentation

Running Tests

7. Open the Cypress test runner:
```
npx cypress open
```

8. Select the test file vowelCounter.spec.js to run the tests.
```
npx cypress run
```

# Test Cases

## Test Case 1: Validating Vowels in a Simple Name
- Input: "Roberto Carlos"
- Expected Output:
    - Total vowels: 5
    - Repeated vowels: 1

## Test Case 2: Name Without Vowels
- Input: "Brrr"
- Expected Output:
    - Total vowels: 0
    - Repeated vowels: 0

## Test Case 3: Name with Uppercase Letters
- Input: "AEIOUaeiou"
- Expected Output:
    - Total vowels: 10
    - Repeated vowels: 5

## Test Case 4: Name with Special Characters and Spaces
- Input: "Ana-Maria de Souza"
- Expected Output:
    - Total vowels: 9
    - Repeated vowels: 1


### Notes
- The function treats vowels as case-insensitive.
- Special characters (e.g., hyphens, spaces) are ignored during the count.

Feel free to fork this repository and customize the tests or functionality as needed