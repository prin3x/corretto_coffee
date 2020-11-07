import React, {useEffect, useState} from 'react';
import axios from '../../config/axios';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    async function fetchData() {
      const {data} = await axios.get('/api/users/profile');
      setUserInfo(data);
    }
    fetchData();
  }, []);

  return (
    <div className='layout'>
      <h1>{userInfo && userInfo.username}</h1>
    </div>
  );
};

export default UserProfile;
