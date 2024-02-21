import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Image from 'next/image';
import { DataGrid } from '@mui/x-data-grid';


const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

const WaitlistAdmin = () => {
  const [waitlist, setWaitlist] = useState<any[]>([]);

  useEffect(() => {
    const fetchWaitlist = async () => {
      const { data, error } = await supabase
        .from('waitlist')
        .select('*');

      if (error) {
        console.error(error);
      } else {
        setWaitlist(data);
      }
    };

    fetchWaitlist();
  }, []);

  // Remove a user from the waitlist
  const seatUser = async (userId: number) => {
    const { error } = await supabase
      .from('waitlist')
      .delete()
      .eq('id', userId);

    if (error) {
      console.error(error);
    } else {
      // Remove the user from the local state
      setWaitlist(waitlist.filter((user: { id: number }) => user.id !== userId));
    }
  };

  const columns = [
    { field: 'firstName', headerName: 'First Name', flex:1},
    { field: 'lastName', headerName: 'Last Name', flex:1},
    { field: 'email', headerName: 'Email', flex:1},
    { field: 'phoneNumber', headerName: 'Phone Number', flex:1},
    { field: 'partySize', headerName: 'Party Size', flex:1},
    { field: 'createdTime', headerName: 'Created Time', flex:1},
    { field: 'action', headerName: 'Action', flex:1, renderCell: (params: any) => <button onClick={() => seatUser(params.row.id)}><Image src='red-x-icon.svg' alt='Seat guest' width={25} height={25} /></button> },
  ];

  const waitlistData = waitlist.map((user: { id: number, firstName: string, lastName: string, email: string, phoneNumber: string, partySize: number, createdTime: Date }) => {
    // Add the arrow function body here if needed
    return user;
  });

  return (
    <>
      <DataGrid rows={waitlistData} columns={columns} />
    </>
  );
};

export default WaitlistAdmin;