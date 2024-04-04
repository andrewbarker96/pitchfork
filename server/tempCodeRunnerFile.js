import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const client = createClient(SUPABASE_URL, SUPABASE_KEY);

class Supabase {
    async getItems() {
        try {
            const { data: items, error } = await client
                .from('pizza')
                .select('*');

            if (error) throw error;

            console.log('Fetched items:', items);
            return items;
        } catch (error) {
            console.error('Error fetching items:', error.message);
            throw error;
        }
    }

    async addPizzasToDatabase() {
      try {
        const pizzas = [
          {
            title: "Margherita",
            description: "Fresh mozzarella, basil, and tomatoes.",
            smallPrice: "12.99",
            mediumPrice: "16.99",
            largePrice: "20.99",
            xLargePrice: "24.99"
          },
          {
            title: "Pepperoni",
            description: "Classic pepperoni pizza.",
            smallPrice: "12.99",
            mediumPrice: "16.99",
            largePrice: "20.99",
            xLargePrice: "24.99"
          },
          {
            title: "Meat Lovers",
            description: "Pepperoni, sausage, bacon, and ham.",
            smallPrice: "14.99",
            mediumPrice: "18.99",
            largePrice: "22.99",
            xLargePrice: "26.99"
          },
          {
            title: "Veggie",
            description: "Mushrooms, bell peppers, onions, and olives.",
            smallPrice: "14.99",
            mediumPrice: "18.99",
            largePrice: "22.99",
            xLargePrice: "26.99"
          },
          {
            title: "BBQ Chicken",
            description: "Grilled chicken, red onions, and BBQ sauce.",
            smallPrice: "14.99",
            mediumPrice: "18.99",
            largePrice: "22.99",
            xLargePrice: "26.99"
          },
          {
            title: "Hawaiian",
            description: "Ham, pineapple, and bacon.",
            smallPrice: "14.99",
            mediumPrice: "18.99",
            largePrice: "22.99",
            xLargePrice: "26.99"
          },
          {
            title: "Buffalo Chicken",
            description: "Grilled chicken, buffalo sauce, and ranch.",
            smallPrice: "14.99",
            mediumPrice: "18.99",
            largePrice: "22.99",
            xLargePrice: "26.99"
          }
        ];
  
        const { data, error } = await client.from('pizzas').insert(pizzas);
        if (error) throw error;
        console.log('Added pizzas to database:', data);
      } catch (error) {
        console.error('Error adding pizzas to database:', error.message);
        throw error;
      }
  }
}

run = async () => {
    const supabase = new Supabase();
    await supabase.addPizzasToDatabase();
    await supabase.getItems();
}

run();
