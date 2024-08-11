import { Document, Page, View, Text } from '@react-pdf/renderer';

const RenderMe = () => {
  return (
    <Document>
      <Page size="A4" style={{ flexDirection: 'row', backgroundColor: '#E4E4E4' }}>
        <View style={{ margin: 10, padding: 10, flexGrow: 1 }}>
          <Text style={{fontSize: 40}}>Invoice</Text>
        </View>
      </Page>
    </Document>
  )
}

export default RenderMe;