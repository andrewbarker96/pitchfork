const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const client = createClient(SUPABASE_URL, SUPABASE_KEY);

class Supabase {
    async getItems() {
        try {
            const { data: items, error } = await client
                .from('breakfast')
                .select('*');

            if (error) throw error;

            console.log('Fetched items:', items);
            return items;
        } catch (error) {
            console.error('Error fetching items:', error.message);
            throw error;
        }
    }

    async addItemsToDatabase() {
      try {
        const items = [
          {
            title: "Multi-grain Pancakes",
            description: "Start your day on a wholesome note with our Multi-grain Pancakes.",
            price: "9.99"
          },
          {
            title: "Whole Grain French Toast",
            description: "Savor the goodness of whole grains with our Whole Grain French Toast.",
            price: "11.99"
          },
          {
            title: "Traditional",
            description: "Two eggs, bacon or sausage, and fresh baked sourdough toast.",
            price: "9.99"
          },
          {
            title: "Avocado Toast",
            description: "Fresh avocado, cherry tomatoes, and a sunny-side-up egg on toasted sourdough.",
            price: "12.99"
          },
          {
            title: "Egg White Omelette",
            description: "Egg whites, spinach, mushrooms, and tomatoes.",
            price: "10.99"
          },
          {
            title: "Breakfast Burrito",
            description: "Scrambled eggs, sausage, cheddar cheese, and salsa.",
            price: "11.99"
          },
          {
            title: "Breakfast Sandwich",
            description: "Scrambled eggs, bacon, and cheddar cheese on a croissant.",
            price: "10.99"
          },
          {
            title: "Breakfast Tacos",
            description: "Scrambled eggs, bacon, cheddar cheese, and salsa.",
            price: "11.99"
          }
        ];
  
        const { data, error } = await client.from('breakfast').insert(items);
        if (error) throw error;
        console.log('Added items to database:', data);
      } catch (error) {
        console.error('Error adding items to database:', error.message);
        throw error;
      }
  }
}

run = async () => {
    const supabase = new Supabase();
    await supabase.getItems();
}

run();
