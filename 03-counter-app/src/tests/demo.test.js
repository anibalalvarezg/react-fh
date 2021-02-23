test('String should be equals ', () => {
    const message = 'hello world';

    const messageTwo = `hello world`;

    expect( message ).toBe( messageTwo );
});