import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
export const MyDoc = () => (
  <Document className="bg-red-500">
    <Page size="A4" style={styles.page}>
      <View className="text-4xl" style={styles.section}>
        <Text>Section #</Text>
      </View>
      <Text>ssdxcdc asdcsadcascas</Text>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);
