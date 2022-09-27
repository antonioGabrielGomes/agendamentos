import AsyncStorage from '@react-native-community/async-storage';

const BASE_API = 'http://localhost:3000';

// mock barbers
const dataBarbers = {
  data: [
    {
      id: 1,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Amanda Diniz',
      stars: 3.5,
    },
    {
      id: 2,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Paulo Silva',
      stars: 4.8,
    },
    {
      id: 3,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Amanda Lacerda',
      stars: 2.5,
    },
    {
      id: 4,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Bonieky Lacerda',
      stars: 2.3,
    },
    {
      id: 5,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Leticia Lacerda',
      stars: 3.4,
    },
    {
      id: 6,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Pedro Gomes',
      stars: 3.4,
    },
    {
      id: 7,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Bonieky Alvaro',
      stars: 4.8,
    },
    {
      id: 8,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Roldado Sousa',
      stars: 2.1,
    },
    {
      id: 9,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Leticia Silva',
      stars: 2,
    },
    {
      id: 10,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Gabriel Alvaro',
      stars: 2.5,
    },
    {
      id: 11,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Amanda Diniz',
      stars: 3.5,
    },
    {
      id: 12,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Paulo Silva',
      stars: 4.8,
    },
    {
      id: 13,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Amanda Lacerda',
      stars: 2.5,
    },
    {
      id: 14,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Bonieky Lacerda',
      stars: 2.3,
    },
    {
      id: 15,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Leticia Lacerda',
      stars: 3.4,
    },
    {
      id: 16,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Pedro Gomes',
      stars: 3.4,
    },
    {
      id: 17,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Bonieky Alvaro',
      stars: 4.8,
    },
    {
      id: 18,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Roldado Sousa',
      stars: 2.1,
    },
    {
      id: 19,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Leticia Silva',
      stars: 2,
    },
    {
      id: 20,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
      name: 'Gabriel Alvaro',
      stars: 2.5,
    },
  ],
  error: '',
  loc: 'Bragança',
};

export default {
  checkToken: async token => {
    const req = await fetch(`${BASE_API}/auth/refresh`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token}),
    });
    const json = await req.json();
    return json;
  },
  signIn: async (email, password) => {
    const req = await fetch(`${BASE_API}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });
    const json = await req.json();
    return json;
  },
  signUp: async (name, email, password) => {
    const req = await fetch(`${BASE_API}/user`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, password}),
    });
    const json = await req.json();
    return json;
  },
  getBarbers: async (lat = null, lng = null, address = null) => {
    // const token = await AsyncStorage.getItem('token');
    //
    // const req = await fetch(`${BASE_API}/barbers?token=${token}&lat=${lat}&lng=${lng}&address=${address}`);
    // const json = await req.json();
    console.log(lat, lng, address);

    // mock
    const json = dataBarbers;
    // console.log(dataBarbers);
    // console.log(typeof dataBarbers);
    // console.log(typeof json);

    return json;
  },
};
