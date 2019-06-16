import {REMOVE_POST}  from '../../constants/actions'

it('removePost', () => {
  const expectedAction = {
    type: REMOVE_POST,
    payload: '100'
  }
  expect(removePost('100')).toEqual(expectedAction)
})
