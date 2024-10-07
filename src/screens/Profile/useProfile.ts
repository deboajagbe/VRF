import { useAppContext } from '@src/context';

import { profileStyles } from './Profile.style';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { logger } from '@src/utils';
import { getUserData as userProfile, setUser, useAppDispatch } from '@src/store';
import { UserResponseDTO } from '@src/services/commercial/dtos/UserResponseDTO';

const useProfile = () => {
  const { color, loader, navigation, services } = useAppContext();
  const dispatch = useAppDispatch();

  const data = useSelector(userProfile);
  const [disabled, setDisabled] = useState(false);

  const getUserData = useCallback(async () => {
    loader.current?.show();
    try {
      const getUser = await services.getUser();
      if (getUser){
        logger('getUser>>', getUser);
        dispatch(setUser(getUser));
      }else{
        logger('getUser>>', 'No data found');
      }
    } catch (error) {
      logger('Error getNews>>', error);
    } finally {
      loader.current?.hide();
    }
  }, [loader, services, dispatch]);

  const handleOnSave = useCallback(
    async (values: UserResponseDTO) => {
      logger('values: ', values);
      setDisabled(true);
      await new Promise(res => setTimeout(res, 3000));
      dispatch(setUser(values.user.measurements as any));
      setDisabled(false);
    },
    []
  );

  const handleOnCapture = useCallback(
    async (values: any) => {
      logger('values: ', values);
      setDisabled(true);
       // Here you would implement the functionality to capture a 360-degree view of the user
      // This is a placeholder function to simulate capturing
      //onCapture("path/to/captured/image.jpg"); // Replace with actual capture logic
      await new Promise(res => setTimeout(res, 3000));
      setDisabled(false);
    },
    []
  );

  useEffect(() => {
    logger('Calling Use Effect');
    getUserData();
  }, [getUserData]);

  return {
    navigation,
    data,
    handleOnSave,
    handleOnCapture,
    color,
    styles: profileStyles(color),
  };
};

export default useProfile;
