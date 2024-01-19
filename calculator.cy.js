// Function to open this URL for each test
beforeEach(() => {
  // Visit the URL
  cy.visit("http://127.0.0.1:5500/index.html"); //VS
});


// Test the addition user option
describe('Addition option spec', () => {
  // Calculate using "+" option
  it('Check the "+" option passes', () => {

    //   Get the "+" button if exist
    cy.get('[test-cy = "operator"]').should('have.value', 'Operators', 'Operators');
    cy.get('select').select('+');

    // Type the numbers to calculate
    cy.get('[test-cy = "first-number"]').type('2');
    cy.get('[test-cy = "second-number"]').type('2');

    // Click the button to calculate
    cy.get('[test-cy = "calculate"]').click();

    // Check if the output is as expected
    cy.get('[test-cy = "output"]').should('contain', 'The result of: 2+2 = 4');
  })
})

// Test the subtraction user option
describe('Subtraction option spec', () => {
  // Calculate using "-" option
  it('Check the "-" option passes', () => {

    //   Get the "-" button and click if exist in the operators
    cy.get('[test-cy = "operator"]').should('have.value', 'Operators', 'Operators');
    cy.get('select').select('-');

    // Type the numbers to calculate
    cy.get('[test-cy = "first-number"]').type('2');
    cy.get('[test-cy = "second-number"]').type('2');

    // Click the button to calculate
    cy.get('[test-cy = "calculate"]').click();

    // Check if the output is as expected
    cy.get('[test-cy = "output"]').should('contain', 'The result of: 2-2 = 0');
  })
})

// Test the multiplication user option
describe('Multiplication option spec', () => {
  // Calculate using "*" option
  it('Check the "*" option passes', () => {

    //   Get the "*" button and click if exist in the operators
    cy.get('[test-cy = "operator"]').should('have.value', 'Operators', 'Operators');
    cy.get('select').select('*');

    // Type the numbers to calculate
    cy.get('[test-cy = "first-number"]').type('2');
    cy.get('[test-cy = "second-number"]').type('2');

    // Click the button to calculate
    cy.get('[test-cy = "calculate"]').click();

    // Check if the output is as expected
    cy.get('[test-cy = "output"]').should('contain', 'The result of: 2*2 = 4');
  })
})

// Test the division user option
describe('Division option spec', () => {
  // Calculate using "/" option
  it('Check the "/" option passes', () => {

    //   Get the "/" button and click if exist in the operators
    cy.get('[test-cy = "operator"]').should('have.value', 'Operators', 'Operators');
    cy.get('select').select('/');

    // Type the numbers to calculate
    cy.get('[test-cy = "first-number"]').type('2');
    cy.get('[test-cy = "second-number"]').type('2');

    // Click the button to calculate
    cy.get('[test-cy = "calculate"]').click();

    // Check if the output is as expected
    cy.get('[test-cy = "output"]').should('contain', 'The result of: 2/2 = 1');
  })
})