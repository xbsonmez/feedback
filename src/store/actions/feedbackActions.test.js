import moxios from 'moxios';
import { testStore } from '../../../utils/testUtils';
import { sendFeedBacks, getFeedbacks } from '../actions/feedbackActions';
import errorMessage from './errorMessage';

describe('sendFeedbacks action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('sendFeedBacks()', async ()  => {

        const expectedState = [{"feedbacks":"deneme","_id":"62892a42e996e7c0cb823a53","createdAt":"2022-05-21T18:06:58.839Z"}];

        const store = testStore();

        await moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(sendFeedBacks('test'))
        .then(() => {
            const newState = store.getState().feedback.data;
            expect(newState).toBe(expectedState);
        })
        
    });

    test('sendFeedBacks() error', async ()  => {

        const expectedState = {
            data: [],
            isLoading: false,
            error: errorMessage,
            items: []
          };
    
        await  moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 400,
              response: errorMessage
            });
          });
        const store = testStore();

        return store.dispatch(sendFeedBacks('test'))
        .then(() => {
            const newState = store.getState().feedback;
            expect(newState).toEqual(expectedState);
        })
        
    });
});

describe('getFeedbacks action', () => {

    const mockResponseError = {
        data: 'Invalid Data'
      };

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('getFeedbacks()', async ()  => {

        const expectedState = [{"feedbacks":"deneme","_id":"62892a42e996e7c0cb823a53","createdAt":"2022-05-21T18:06:58.839Z"}];

        const store = testStore();

        await moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(getFeedbacks())
        .then(() => {
            const newState = store.getState().feedback.items;
            expect(newState).toBe(expectedState);
        })
        
    });

    test('getFeedbacks() error', async ()  => {

        const expectedState = {
            data: [],
            isLoading: false,
            error: errorMessage,
            items: []
          };
    
        await  moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 400,
              response: errorMessage
            });
          });
        const store = testStore();

        return store.dispatch(getFeedbacks())
        .then(() => {
            const newState = store.getState().feedback;
            expect(newState).toEqual(expectedState);
        })
        
    });
});