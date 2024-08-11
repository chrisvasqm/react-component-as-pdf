
const RenderMe = () => {
  return (
    <>
      <h2 style={{ color: 'dodgerblue' }}>Invoice #123</h2>
      <p style={{ color: 'tomato' }}>Description of the sale</p>
      <p>{new Date().toLocaleDateString()}</p>

      <table style={{ border: '1px solid black' }}>
        <thead>
          <th>Item</th>
          <th>Price</th>
        </thead>
        <tbody>
          <tr>
            <td>Milk</td>
            <td>$9.99</td>
          </tr>
          <tr>
            <td>Eggs</td>
            <td>$4.99</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default RenderMe;