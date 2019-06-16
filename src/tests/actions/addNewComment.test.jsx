import { ADD_NEW_COMMENT } from '../../constants/actions'

it('addNewComment', () => {
  const expectedAction = {
    type: ADD_NEW_COMMENT,
    name: 'someName',
    email: 'someEmail',
    body: 'someBody',
    postId: 'someId'
  }
  expect(addNewComment('someName', 'someEmail','someBody', 'someId')).toEqual(expectedAction)
})
