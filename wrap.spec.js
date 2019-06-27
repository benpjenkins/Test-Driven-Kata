const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Returns the original string if it is shorter than maxLength', () => {
    expect(wrap('the', 5)).to.equal('the');
  });
  it('Wraps the string in a simple case', () => {
    expect(wrap('wrap test', 5)).to.equal('wrap \ntest ');
  });
  it('Wraps the string in a complicated case', () => {
    expect(wrap('here is a more complicated example', 11)).to.equal(
      'here is a \nmore \ncomplicated \nexample '
    );
  });
});
