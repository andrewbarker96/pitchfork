import React from 'react'

const MenuComp = () => {
  return (
    <div>
      <header>
        <h1>MenuComp</h1>
        <p>Indulge in the delightful flavors of our upscale country dishes.</p>
      </header>

      <section>
        <h2>Appetizers</h2>
        <table>
          <thead>
            <tr>
              <th>Dish</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Truffle Mushroom Risotto</td>
              <td>Arborio rice cooked with truffle-infused mushrooms.</td>
              <td>$18.99</td>
            </tr>
            <tr>
              <td>Smoked Salmon Bruschetta</td>
              <td>House-smoked salmon served on crispy bruschetta.</td>
              <td>$22.99</td>
            </tr>
            {/* Add more appetizers */}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Main Courses</h2>
        <table>
          <thead>
            <tr>
              <th>Dish</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Grilled Ribeye Steak</td>
              <td>Prime ribeye steak grilled to perfection.</td>
              <td>$38.99</td>
            </tr>
            <tr>
              <td>Herb-Crusted Lamb Chops</td>
              <td>Tender lamb chops with a flavorful herb crust.</td>
              <td>$32.99</td>
            </tr>
            {/* Add more main courses */}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Desserts</h2>
        <table>
          <thead>
            <tr>
              <th>Dish</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chocolate Bourbon Pecan Pie</td>
              <td>Decadent pecan pie with a hint of bourbon and chocolate.</td>
              <td>$12.99</td>
            </tr>
            <tr>
              <td>Apple Cinnamon Tiramisu</td>
              <td>Classic tiramisu with a twist of apple and cinnamon.</td>
              <td>$14.99</td>
            </tr>
            {/* Add more desserts */}
          </tbody>
        </table>
      </section>
        
    </div>
  )
}

export default MenuComp