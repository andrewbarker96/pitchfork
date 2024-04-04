import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

const WaitlistCounter = () => {
  const [waitlistCount, setWaitlistCount] = useState(0);

  // Fetch the count of the waitlist from the database when the component mounts
  useEffect(() => {
    const fetchWaitlistCount = async () => {
      const { count, error } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact' });

      if (error) {
        console.error(error);
      } else {
        setWaitlistCount(count ?? 0);
      }
    };

    fetchWaitlistCount();
  }, []);

  return (
    waitlistCount
  );
};

export default WaitlistCounter;
