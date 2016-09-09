describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result = 'webpack-typescript-template';
    expect(subject).toEqual(result);
  });

});
