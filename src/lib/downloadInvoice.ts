import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * Converts a DOM element with a given ID into a downloadable PDF.
 * @param elementId The DOM ID of the invoice container
 * @param fileName The name of the PDF file to download
 */
export async function downloadInvoiceAsPDF(elementId: string, fileName: string) {
  const input = document.getElementById(elementId);

  if (!input) {
    console.error(`Element with ID '${elementId}' not found.`);
    return;
  }

  const canvas = await html2canvas(input);
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = (canvas.height * pageWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
  pdf.save(`${fileName}.pdf`);
}
