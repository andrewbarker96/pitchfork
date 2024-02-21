import * as React from 'react';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl!, supabaseKey!);

interface GridTextFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const GridTextField: React.FC<GridTextFieldProps> = ({ label, name, value, onChange }) => (
  <Grid item xs={12} sm={6} md={6}>
    <TextField label={label} name={name} value={value} onChange={onChange} fullWidth />
  </Grid>
);

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    partySize: '',
    createdTime: new Date(),
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from('waitlist')
      .insert([formData]);

    if (error) {
      console.error(error);
    } else {
      console.log(data);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        partySize: '',
        createdTime: new Date(),
      })
      console.log('Form submitted successfully!')
      alert('Form submitted successfully!')
    
    }
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ flexGrow: 1 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <GridTextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
              <GridTextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
              <GridTextField label="Email" name="email" value={formData.email} onChange={handleChange} />
              <GridTextField label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
              <GridTextField label="Party Size" name="partySize" value={formData.partySize} onChange={handleChange} />
              <Grid item xs={12}>
                <button type="submit" className='bg-black text-white p-2 rounded-md'>Submit</button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </LocalizationProvider>
    </div>
  );
};

export default WaitlistForm;