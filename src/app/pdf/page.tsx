'use client'
import React, { useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff', // Set background color to white
    width: '100%',
    height: '100%',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: "46%",
    left: "40%",
    width: '100%',
    height: '100%',
    zIndex: -1,
    opacity:0.2

  },
  left_section: {
    flex: 3
  },
  right_section: {
    flex: 1
  },

  main_section: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: "flex",
    flexDirection: 'row',
    padding: "20px"
  },

  logo: {
    display: "flex",
    flexDirection: "row",
    gap: "3px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px"
  },
  logo_text: {
    color: "#018343",
  },
  logo_name: {
    fontSize: "50px",
    // fontFamily:"Helvetica",
    letterSpacing: "2px",
    fontWeight: "extrabold"
  },
  logo_subname: {
    fontSize: "18px",
    letterSpacing: "2px",
  },
  logo_address: {
    fontSize: "12px",
    color: "black",
    letterSpacing: "2px",
  },
  title_content: {
    textAlign: "center",
    color: "#f0ff00",
    marginVertical: "30px"
  },

  title_name: {
    fontSize: "55px",
    // marginBottom:"5px"


  },
  title_subname: {
    fontSize: "30px",



  },
  content: {
    textAlign: "center"

  },
  content_text: {
    fontSize: "15px",
    marginHorizontal: "15px"

  },
  content_mindrriser: {
    fontSize: "15px",
    textAlign: "center",
    marginTop:"40px"
  },
  content_name: {
    fontWeight: "bold",
    fontSize: "24px",
    marginVertical: "5px",
  },

  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    alignContent: "center",
    gap: "30px",
    marginVertical: '30px',
    marginHorizontal: '15px'

  },

  r_logoContainer: {

    height: "100%",
    width: "100%",
    marginTop: "10px",
    marginBottom: "10px",
    paddingRight: "10px"

  }




});
const pdfViewerStyle = {
  width: '100%',
  height: '100vh',
};
const name = "ARJUN LAMA"
const course = "MERN Stack Training"
const duration = "3"
const issuedDate = "20,Jan,2024"
const certificate_number = "014"
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page} orientation="landscape">
      {/* Background container */}



      <View style={styles.main_section}>

        <View style={styles.left_section}>
                <View style={styles.backgroundImage}>
                  <Image src={`./images/logoMindrisers.png`} style={{ width: '100px', height: '100px' }} />
                </View>
          <View style={styles.logo}>
            <View>
              <Image src={`./images/logoMindrisers.png`} style={{ width: '60px', height: '60px' }} />
            </View>
            <View style={styles.logo_text}>
              <Text style={styles.logo_name}>mindrisers</Text>
              <Text style={styles.logo_subname}>CONSORTIUM PVT.LTD.</Text>
              <Text style={styles.logo_address}>PUTALISADAK, KATHMANDU, NEPAL</Text>
            </View>
          </View>

          <View style={styles.title_content}>
            <View >
              <Text style={styles.title_name}>CERTIFICATE</Text>
              <Text style={styles.title_subname}>OF COMPLETION </Text>
            </View>
          </View>

          <View style={styles.content}>
            <View>
              <Text style={styles.content_text}>This is to certify that</Text>
              <Text style={styles.content_name}>{name} </Text>
              <Text style={styles.content_text}>has successfully completed the {course} </Text>
            </View>

          </View>
          <View style={styles.footer}>
            <View>
              <Text style={styles.content_text}>Course Duration:{duration} Months</Text>
              <Text style={styles.content_text}>Certificate:{certificate_number}</Text>
            </View>
            <View>
              <Text style={styles.content_text}>Issued Date:</Text>
              <Text style={styles.content_text}>{issuedDate}</Text>
            </View>
            <View>
              <Text style={styles.content_text}>Signateurnfslg</Text>
              <Text style={styles.content_text}>Director</Text>
            </View>

          </View>
          <Text style={styles.content_mindrriser}>Mindrisersnepal.com</Text>
        </View>


        <View style={styles.right_section}>
          <View style={styles.r_logoContainer}>
            <Image src={`./images/rightImage.png`} style={{ width: '100%', height: '100%', }} />
          </View>


        </View>

      </View>
    </Page>
  </Document>
);


function PageViewer() {

  return (
    <PDFViewer style={pdfViewerStyle} showToolbar={false}>
      <MyDocument />
    </PDFViewer>
  );
}

export default PageViewer;
