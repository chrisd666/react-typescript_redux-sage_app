import { takeLatest, put, delay } from 'redux-saga/effects';

function* counterUpAsync({ payload }: any) {
  yield delay(2500);
  yield put({ type: 'COUNTER_UP_ASYNC', payload });
}

function* counterDownAsync({ payload }: any) {
  yield delay(2500);
  yield put({ type: 'COUNTER_DOWN_ASYNC', payload });
}

// CALL REDUX ACTIONS
export function* increaseCounter() {
  yield takeLatest('INCREMENT', counterUpAsync);
}

export function* decreaseCounter() {
  yield takeLatest('DECREMENT', counterDownAsync);
}
