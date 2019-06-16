import {FIND_POST}  from '../../constants/actions'

it('editPost', () => {
  const expectedAction = {
    type: FIND_POST,
    payload: 'someTitle, someBody'
  }
  expect(findPost('someTitle, someBody')).toEqual(expectedAction)
})
