import {EDIT_POST}  from '../../constants/actions'

it('editPost', () => {
  const expectedAction = {
    type: EDIT_POST,
    title: 'someTitle',
    body: 'someBody',
    id: 'someId',
  }
  expect(editPost('someTitle', 'someBody','someId')).toEqual(expectedAction)
})
