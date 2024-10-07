import { RootState } from '../index';

export const usersData = (state: RootState) => state.userData.users;

export const getUserData = (state: RootState) => state.userData.user;

export const isForceUpdate = (state: RootState) => state.userData.isForceUpdate;
