import { testStore } from '../../../utils/testUtils';
import { openModal, closeModal } from '../actions/modalActions';

describe('Modal actions', () => {

    const modalName = 'test';
    const expecedState = ['test'];
    
   
    test('openModal()', async ()  => {
        const store = testStore();
        await store.dispatch(openModal(modalName));
        const newState = store.getState().modalData.modalNames;
        expect(newState).toStrictEqual(expecedState);
    });

    test('close()', async ()  => {
        const store = testStore();
        await store.dispatch(closeModal(modalName));
        const newState = store.getState().modalData.modalNames;
        expect(newState).toStrictEqual([]);
    });

});