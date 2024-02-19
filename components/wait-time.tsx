import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';

const EstWaitTime = () => {
  const [waitlistCount, setWaitlistCount] = useState(0);
  const minWait = 5;
  const maxWait = 60;

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

  // Calculate the wait time
  let waitTime;
  if (waitlistCount * 5 < minWait) {
    waitTime = minWait;
  } else if (waitlistCount * 5 > maxWait) {
    waitTime = maxWait;
  } else {
    waitTime = waitlistCount * 5;
  }

  // Render the wait time
  return (
      waitTime
  );
};

export default EstWaitTime;