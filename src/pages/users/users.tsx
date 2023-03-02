import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardHeader, CardMedia, CardContent, Button } from '@mui/material';
import Link from 'next/link';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://express-t4.onrender.com/api/users');
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  return (
    <Grid container spacing={3}>
      {users.map((user) => (
        <Grid item xs={12} md={6} lg={4} key={user._id}>
          <Card>
            <CardHeader title={`${user.name} Age: ${user.age}`} subheader={user.name} />
            <CardMedia image={user.picture} title={`${user.name}`} style={{ height: 0, paddingTop: '56.25%' }} />
            <CardContent>
              <Link href={`/users/userdetail/?id=${user._id}`}>
                <Button variant="contained" color="primary">
                  View Profile
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Users;
