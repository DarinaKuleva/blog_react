import dislikePost  from '../../actions/dislikePost'

it('dislikePost', () => {
  const expectedAction = {
    type: 'DISLIKE_POST',
    payload: '1001'
  }
  expect(dislikePost('1001')).toEqual(expectedAction)
})
