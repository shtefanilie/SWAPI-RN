import { fetchingPeople, fetchedPeople } from '../../../actions/people';
import { defaultState, peopleReducer } from '../reducer';
import { mockPeople } from './mocks';

describe('peopleReducer', () => {
  describe('case FETCHING_PEOPLE', () => {
    const result = peopleReducer(defaultState, fetchingPeople());

    it('sets expected state', () => {
      expect(result.loadingFailed).toBe(false);
      expect(result.loadingPeople).toBe(true);
    });
  });
  describe('case FETCHED_PEOPLE_SUCCESSFUL', () => {
    const result = peopleReducer(
      { ...defaultState, loadingPeople: true, loadingFailed: false },
      fetchedPeople(mockPeople),
    );
    const expectedState = {
      loadingFailed: false,
      loadingPeople: false,
      people: mockPeople,
    };

    it('sets expected state', () => {
      expect(result).toEqual(expectedState);
    });

    it('state does not change when state not stale', () => {
      expect(peopleReducer(expectedState, fetchedPeople(mockPeople))).toEqual(
        expectedState,
      );
    });

    it('state updates when stale', () => {
      const newPeople = { ...mockPeople, gender: 'female' };
      const updatedExpectedState = { ...expectedState, people: newPeople };
      expect(peopleReducer(expectedState, fetchedPeople(newPeople))).toEqual(
        updatedExpectedState,
      );
    });
  });
});
