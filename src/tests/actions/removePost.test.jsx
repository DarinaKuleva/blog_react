import removePost  from '../../actions/removePost'

it('removePost', () => {
  const expectedAction = {
    type: 'REMOVE_POST',
    payload: '100'
  }
  expect(removePost('100')).toEqual(expectedAction)
})
