import React, {useEffect, useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';
import {Container, LoadingIcon} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import Api from '../../Api';

import BarberLogo from '../../assets/barber.svg';

/**
 * mock
 */
const Avatar = 'https://cdn-icons-png.flaticon.com/512/147/147142.png';
const TOKEN_MOCK =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjM3MDEzMTQsImV4cCI6MTY5NTIzNzMxNCwic3ViIjoiYmMyZWJjYWQtOTE4NS00YjNmLTg0NDktNDBkNWY1ZGZiMzVjIn0.T-xyKhZV3IBx4KHChzbtiZqB0dfrufWxrBj_Cx8S57M';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      // mock
      // if (token) {
      if (TOKEN_MOCK) {
        // mock
        // let res = await Api.checkToken(token)

        // if (res.token) {
        if (TOKEN_MOCK) {
          // await AsyncStorage.setItem('token', json.token);
          // mock
          await AsyncStorage.setItem('token', TOKEN_MOCK);

          userDispatch({
            type: 'setAvatar',
            payload: {
              // mock
              avatar: Avatar,
              //  avatar: json.data.avatar,
            },
          });

          navigation.reset({
            routes: [{name: 'MainTab'}],
          });
        } else {
          navigation.navigate('SignIn');
        }
      } else {
        navigation.navigate('SignIn');
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <BarberLogo widt="100%" height="160" />
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
};
