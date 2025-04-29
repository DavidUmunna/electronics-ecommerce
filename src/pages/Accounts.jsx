// src/components/Auth/Account.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { TextField, Button, Paper,Tabs, Tab, Box } from '@mui/material';

const Account = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const { login, register } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 0) {
      login(formData.email, formData.password);
    } else {
      register(formData.email, formData.password, formData.name);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '2rem', maxWidth: '500px', margin: '2rem auto' }}>
      <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)}>
        <Tab label="Login" />
        <Tab label="Register" />
      </Tabs>
      <Box p={3}>
        <form onSubmit={handleSubmit}>
          {activeTab === 1 && (
            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
          )}
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '1rem' }}
          >
            {activeTab === 0 ? 'Login' : 'Register'}
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default Account;