import * as demandService from '../services/list';
import { PAGE_SIZE } from '../constants';

export default {
  namespace: 'demands',
  state: {
    list: [],
    visible: false,
    pageNo: 1,
  },
  reducers: {
    save(state, { payload: { data: list, pageNo } }) {
      return { ...state, list, pageNo };
    },
    toggle(state, { payload: { visible } }) {
      return { ...state, visible };
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const { result } = yield call(demandService.fetch, payload);
      const { data } = result;
      yield put({
        type: 'save',
        payload: { data, pageNo: payload.pageNo },
      });
    },
    *remove({ payload }, { call, put }) {
      yield call(demandService.remove, payload);
      yield put({ type: 'fetch', payload: { pageSize: PAGE_SIZE, pageNo: 1 } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/demands/list') {
          dispatch({ type: 'fetch', payload: { pageSize: PAGE_SIZE, pageNo: 1 } });
        }
      });
    },
  },
};
