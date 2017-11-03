import * as actions from '../../src/actions/counter';

describe('actions', () => {
  test('increment() should create increment action', () => {
    const action = actions.increment();    
    expect(action).toEqual({
      type: actions.INCREMENT_COUNTER
    });
  });

  test('decrement() should create a decrement action', () => {
    const action = actions.decrement();
    expect(action).toEqual({
      type: actions.DECREMENT_COUNTER
    });
  });

  test('incrementIfOdd() should dispatch increment action', () => {
    const incrementOddFn = actions.incrementIfOdd();
    expect(incrementOddFn).toBeInstanceOf(Function);
    const dispatch = jest.fn();
    const getState = () => ({ counter: 1 });

    incrementOddFn(dispatch, getState);
    expect(dispatch).toBeCalledWith({
      type: actions.INCREMENT_COUNTER  
    }); 
  });

  test('incrementIfOdd() should not create increment action if counter is even' , () => {
    const fn = actions.incrementIfOdd();
    const dispatch = jest.fn();
    const getState = () => ({ counter: 2 });

    fn(dispatch, getState);
    expect(dispatch).not.toBeCalled();
  });

  test('incrementAsync()', done => {
    const fn = actions.incrementAsync(1);
    expect(fn).toBeInstanceOf(Function);
    const dispatch = jest.fn();

    fn(dispatch);
    setTimeout(() => {
      expect(dispatch).toBeCalledWith({
        type: actions.INCREMENT_COUNTER
      });
      done();
    }, 5);
  });
});