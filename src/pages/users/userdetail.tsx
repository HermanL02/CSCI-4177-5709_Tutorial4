import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, CircularProgress, Avatar } from '@mui/material';

const UserDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`https://express-t4.onrender.com/api/users/${id}`);
      setUser(response.data);
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <CircularProgress />;
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={3}>
      <Typography variant="h3">User Detail</Typography>
      <Box display="flex" flexDirection="column" alignItems="center" mt={3}>
        <Avatar alt={user.name} src={user.picture} style={{ width: '200px', height: '200px' }} />
        <Typography variant="h4">{user.name}</Typography>
        <Typography variant="subtitle1">{user.email}</Typography>
        <Typography variant="subtitle1">Age: {user.age}</Typography>
        <Typography variant="subtitle1">Eye Color: {user.eyeColor}</Typography>
        <Typography variant="subtitle1">Company: {user.company}</Typography>
        <Typography variant="subtitle1">Phone: {user.phone}</Typography>
        <Typography variant="subtitle1">Address: {user.address}</Typography>
        <Typography variant="subtitle1">About: {user.about}</Typography>
        <Typography variant="subtitle1">Registered: {user.registered}</Typography>
        <Typography variant="subtitle1">Latitude: {user.latitude}</Typography>
        <Typography variant="subtitle1">Longitude: {user.longitude}</Typography>
        <Typography variant="subtitle1">Tags: {user.tags.join(', ')}</Typography>
        <Typography variant="subtitle1">Friends:</Typography>
        <ul>
          {user.friends.map((friend) => (
            <li key={friend.id}>{friend.name}</li>
          ))}
        </ul>
        <Typography variant="subtitle1">Favorite Fruit: {user.favoriteFruit}</Typography>
      </Box>
    </Box>
  );
};

export default UserDetail;
