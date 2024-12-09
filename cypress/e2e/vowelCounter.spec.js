// cypress/e2e/vowelCounter.spec.js
import { countVowels } from "../../src/vowelCounter";

describe('Vowel Counter Function', () => {
    it('should correctly count total and repeated vowels in the name "Roberto Carlos"', () => {
        const input = "Roberto Carlos";
        const result = countVowels(input);

        cy.log(`Nome completo: ${input}`);
        cy.log(`Total de vogais: ${result.totalVowels}`);
        cy.log(`Total de vogais repetidas ao menos uma vez: ${result.repeatedVowels}`);

        console.log("Informações do teste:");
        console.log(`Nome completo: ${input}`);
        console.log(`Total de vogais: ${result.totalVowels}`);
        console.log(`Total de vogais repetidas ao menos uma vez: ${result.repeatedVowels}`);

        expect(result.totalVowels).to.equal(5); // Total vowels
        expect(result.repeatedVowels).to.equal(1); // Repeated vowels
    });

    it('should return zero for names without vowels', () => {
        const input = "Brrr";
        const result = countVowels(input);

        cy.log(`Nome completo: ${input}`);
        cy.log(`Total de vogais: ${result.totalVowels}`);
        cy.log(`Total de vogais repetidas ao menos uma vez: ${result.repeatedVowels}`);

        console.log("Informações do teste:");
        console.log(`Nome completo: ${input}`);
        console.log(`Total de vogais: ${result.totalVowels}`);
        console.log(`Total de vogais repetidas ao menos uma vez: ${result.repeatedVowels}`);

        expect(result.totalVowels).to.equal(0); // Total vowels
        expect(result.repeatedVowels).to.equal(0); // Repeated vowels
    });

    it('should handle uppercase letters correctly', () => {
        const input = "AEIOUaeiou";
        const result = countVowels(input);

        cy.log(`Nome completo: ${input}`);
        cy.log(`Total de vogais: ${result.totalVowels}`);
        cy.log(`Total de vogais repetidas ao menos uma vez: ${result.repeatedVowels}`);

        console.log("Informações do teste:");
        console.log(`Nome completo: ${input}`);
        console.log(`Total de vogais: ${result.totalVowels}`);
        console.log(`Total de vogais repetidas ao menos uma vez: ${result.repeatedVowels}`);

        expect(result.totalVowels).to.equal(10); // Total vowels
        expect(result.repeatedVowels).to.equal(5); // Repeated vowels
    });

    it('should handle names with special characters and spaces', () => {
        const input = "Ana-Maria de Souza";
        const result = countVowels(input);

        cy.log(`Nome completo: ${input}`);
        cy.log(`Total de vogais: ${result.totalVowels}`);
        cy.log(`Total de vogais repetidas ao menos uma vez: ${result.repeatedVowels}`);

        console.log("Informações do teste:");
        console.log(`Nome completo: ${input}`);
        console.log(`Total de vogais: ${result.totalVowels}`);
        console.log(`Total de vogais repetidas ao menos uma vez: ${result.repeatedVowels}`);

        expect(result.totalVowels).to.equal(9); // Total vowels
        expect(result.repeatedVowels).to.equal(1); // Repeated vowels
    });
});
