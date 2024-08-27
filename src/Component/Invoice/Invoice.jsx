import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: 'Helvetica',
    lineHeight: 1.5,
  },
  header: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    marginBottom: 15,
  },
  soldBy: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 10,
    marginBottom: 2,
    color: '#555',
  },
  table: {
    display: 'table',
    width: '100%',
    marginTop: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  tableHeader: {
    backgroundColor: '#f7f7f7',
  },
  tableCol: {
    width: '25%',
    padding: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tableCell: {
    fontSize: 10,
    color: '#333',
  },
  tableCellBold: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  summary: {
    marginTop: 20,
    textAlign: 'right',
  },
  summaryText: {
    fontSize: 12,
    marginBottom: 5,
  },
  total: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 30,
  },
  footerText: {
    fontSize: 10,
    color: '#555',
  },
});

const Invoice = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Tax Invoice/Bill of Supply/Cash Memo</Text>

      <View style={styles.section}>
        <Text style={styles.soldBy}>Sold By: Aman</Text>
        <br />
        <Text style={styles.To}>To: {data.customerName}</Text>
        <Text style={styles.email}>Email: {data.email}</Text>
        <Text style={styles.phone}>Phone: {data.phone}</Text>

        <Text style={styles.address}>Billing Address: {data.billingAddress}</Text>
        <Text style={styles.address}>Shipping Address: {data.shippingAddress}</Text>
      </View>

      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellBold}>Description</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellBold}>Price</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellBold}>Qty</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellBold}>Amount</Text>
          </View>
        </View>
        {data.items.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.description}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.price.toFixed(2)}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.qty}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{(item.price * item.qty).toFixed(2)}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryText}>Subtotal: {data.subtotal}</Text>
        <Text style={styles.summaryText}>Shipping: {data.shipping}</Text>
        <Text style={styles.summaryText}>Tax: {data.tax}</Text>
        <Text style={styles.summaryText}>Savings: {data.savings}</Text>
        <Text style={styles.total}>Total: {data.total}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Payment Method: {data.paymentMethod}</Text>
        <Text style={styles.footerText}>Special Instructions: {data.instructions}</Text>
        <Text style={styles.footerText}>Order Date: {data.orderDate}</Text>
        <Text style={styles.footerText}>Order ID: {data.orderId}</Text>
      </View>
    </Page>
  </Document>
);

export default Invoice;
