import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserResult } from '@src/services';

type AppData = {
  users: UserResult[];
  user: UserResult;
  isForceUpdate: boolean;
};

const initialState: AppData = {
  isForceUpdate: false,
  user: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
    role: '',
    phone: '',
    measurements: {
      height: 0,
      weight: 0,
      chest: 0,
      waist: 0,
      hip: 0,
      inseam: 0,
    },

  },
  users: [],
};

export const userDataSlice = createSlice({
  initialState,
  name: 'userData',
  reducers: {
    resetUserData: () => initialState,
    setForceUpdate: (state, { payload }: PayloadAction<boolean>) => {
      state.isForceUpdate = payload;
    },
    setUsers: (state, { payload }: PayloadAction<UserResult[] | []>) => {
      state.users = payload;
    },
    setUser: (state, { payload }: PayloadAction<UserResult>) => {
      state.user = payload;
    },
  },
});

export const {
  actions: { resetUserData, setForceUpdate, setUsers, setUser },
  name: userDataName,
  reducer: userData,
} = userDataSlice;
