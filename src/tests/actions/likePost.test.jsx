import likePost  from '../../actions/likePost'

it('likePost', () => {
  const expectedAction = {
    type: 'LIKE_POST',
    payload: '100'
  }
  expect(likePost('100')).toEqual(expectedAction)
})
