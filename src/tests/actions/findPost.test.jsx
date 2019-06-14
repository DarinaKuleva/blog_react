import findPost  from '../../actions/findPost'

it('editPost', () => {
  const expectedAction = {
    type: 'FIND_POST',
    payload: 'someTitle, someBody'
  }
  expect(findPost('someTitle, someBody')).toEqual(expectedAction)
})
