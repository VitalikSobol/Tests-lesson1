const expect = require('chai').expect;
const NumberValidator = require('./validator.js');

describe('Test Number Validator', () => {
    let validator;

    describe('setSubmitted()', () => {
        beforeEach(() => {
            validator = new NumberValidator(1, 20);
        });

        it('should return isSubmitted true', () => {
            validator.setSubmitted();
            return expect(validator.isSubmitted).to.be.true;
        });

        it('should return isSubmitted false', () => {
            return expect(validator.isSubmitted).to.be.false;
        });
    });

    describe('isValid()', () => {
        beforeEach(() => {
            validator = new NumberValidator(1, 20, true);
        });

        it('should return valid value', () => {
            validator.setSubmitted();
            const isValid = validator.isValid(5);
            return expect(isValid).to.be.true;
        });

        it('should return not valid value', () => {
            validator.setSubmitted();
            const isValid = validator.isValid(21);
            return expect(isValid).to.be.false;
        });

        it('should return valid value because !isSubmitted', () => {
            const isValid = validator.isValid(5);
            return expect(isValid).to.be.true;
        });

        it('should return not valid value because wrongType', () => {
            validator.setSubmitted();
            const isValid = validator.isValid('5a');
            return expect(isValid).to.be.false;
        });

        it('should return not valid value because wrongType', () => {
            validator.setSubmitted();
            const isValid = validator.isValid([]);
            return expect(isValid).to.be.false;
        });

    });
});
