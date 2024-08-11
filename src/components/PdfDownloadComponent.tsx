import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Invoice from './Invoice'; // Import the component you want to convert to PDF

const PdfDownloadComponent = () => {

  const handleDownloadPDF = async () => {
    const input = document.getElementById('invoice');
    const canvas = await html2canvas(input!);
    const imageData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imageHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imageData, 'PNG', 0, 0, pdfWidth, imageHeight);
    pdf.save(`invoice-${new Date().toLocaleDateString()}.pdf`);
  };

  return (
    <div>
      <Invoice id="invoice" />
      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
};
export default PdfDownloadComponent;