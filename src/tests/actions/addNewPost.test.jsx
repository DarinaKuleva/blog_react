import addNewPost  from '../../actions/addNewPost'

it('addNewPost():jopa', () => {
  const expectedAction = {
    type: 'ADD_NEW_POST',
    title: 'someTitle',
    body: 'someBody'
  }
  expect(addNewPost('someTitle', 'someBody')).toEqual(expectedAction)
})