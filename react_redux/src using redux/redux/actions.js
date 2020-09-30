import { INCREMENT, DECREMENT } from '../redux/action-types';

export const increment = (select) => ({ type: INCREMENT, data: select });
export const decrement = (select) => ({ type: DECREMENT, data: select });
