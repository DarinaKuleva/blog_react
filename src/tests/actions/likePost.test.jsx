import {LIKE_POST}  from '../../constants/actions'

it('likePost', () => {
  const expectedAction = {
    type: LIKE_POST,
    payload: '100'
  }
  expect(likePost('100')).toEqual(expectedAction)
})
