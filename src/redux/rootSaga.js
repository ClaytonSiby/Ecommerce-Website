// sagas ( all allows to resolve effects in parallel, call allows to call functions.)
import { all, call } from 'redux-saga/effects';

// generator function
export default function* rootSaga() {
    // yield to an array which we'll pass all sagas.
    yield all([])
}
