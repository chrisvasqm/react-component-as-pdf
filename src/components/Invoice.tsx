
const Invoice = ({ id }: { id: string }) => {
  return (
    <div id={id}>
      <h1>Invoice</h1>
      <p>Description</p>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  )
}

export default Invoice;