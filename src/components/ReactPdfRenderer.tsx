
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import RenderMe from './RenderMe';

const ReactPdfRenderer = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <h1>Using ReactPDF Renderer</h1>
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
  )
}

export default ReactPdfRenderer;