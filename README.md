# Components to PDF

Demostration project to show how to create PDF files out of React Components.

## Notes

There are multiple ways of achieving this, but in this repo I will add the ones that seem the easiest and practical.

### Using `@react-pdf/renderer`

Provides a set of components that you will have to use and manipulate in order to make the PDF file look how you desire. It's a bit limitted on that regard since you won't be able to use any of the components that you already have in the project right away. But it has a really good and easy `PDFViewer` component that can be of use.

### Using `jsPDF` and `html2canvas`

This method is the most versatile and requires a bit of code to set it up, but it's probably the easiest to work with in the long term since it creates an image file from the React component you pass to it and then generates the PDF from that image. So you will be able to make use of all the components you already have in your project as well as any other third parties like Material UI, Chakra, Radix UI, etc.