import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import './App.css';
import RenderMe from './components/RenderMe';

function App() {

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <h1>Components to PDF</h1>
        <PDFDownloadLink
          document={<RenderMe />}
          fileName={`example-${new Date().toLocaleDateString()}.pdf`}
          style={{
            textDecoration: 'none',
            padding: '10px 20px',
            color: '#fff',
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            maxWidth: '100px'
          }}
        >{({ loading }) => loading ? 'Generating PDF...' : 'Download PDF'}</PDFDownloadLink>
          <PDFViewer height={'500px'}>
            <RenderMe />
          </PDFViewer>
      </div>
    </div>
  )
}

export default App
