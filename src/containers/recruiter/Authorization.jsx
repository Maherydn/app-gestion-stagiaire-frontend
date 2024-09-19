import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Définir les styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    padding: 40,
    letterSpacing: 0.8
  },
  underline: {
    borderBottom: '2px solid black',
  },
  title:{ 
    fontSize: 14,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  departement: {
    position:'absolute',
    top: 80,
    left: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    width:250,
  },
  date: {
    position: 'absolute',
    top: 150,
    right: 50,
    fontSize: 12,
    fontWeight: 'extrabold'
  },
  numero: {
    position: 'absolute',
    top: 170,
    left: 62,
    fontSize: 12,
    display: 'flex',
    flexDirection: 'row'
  },
  autorisation: {
    marginTop: 215,
    fontSize: 20,
    textAlign: 'center'
  },
  text: {
    position: 'absolute',
    top: 350,
    left: '15%',
    width: '85%',
    fontSize: 12,
    textAlign: 'left',
    lineHeight: 1.4
  },
  bold: {
    fontWeight: 'bold'
  },
  text_mb: {
    marginBottom: 20
  },
  destinataire_titre: {
    position: 'absolute',
    bottom: 150,
    left: 62,
    fontSize: 16
  },
  destinataire_content: {
    position: 'absolute',
    bottom: 90,
    left: 62,
    fontSize: 14
  }
});


// change la date en '02 aout 2024'
const formatDate = (date) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Intl.DateTimeFormat('fr-FR', options).format(date);
}

const date = new Date()
const dateNow = formatDate(date)

// recuperer le deux dernier chiffre de l'annee
const currentYear = new Date().getFullYear();
const year = currentYear % 100;

//composant PDF
const Authorization = ( {nomPrenom, dateDebut, dateFin, durer, numero} ) => {

  const debut = formatDate(new Date(dateDebut))

  const fin = formatDate(new Date(dateFin))
  
  return(
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.title}>
        <Text>SOCIETE DU PORT A GESRION AUTONOME DE TOAMASINA</Text>
        <Text style={styles.underline}>B.P : 492</Text>
      </View>

      <View style={styles.departement}>
        <Text style={styles.underline}>DIRECTION DES RESSOURCES</Text>
        <Text style={styles.underline}>HUMAINES</Text>
        <Text style={styles.underline}>DEPARTEMENT CENTRE DE </Text>
        <Text style={styles.underline}>PERFECTIONNEMENT ET APPUI RH</Text>
      </View>

      <View style={styles.date} >
        <Text>Toamasina, le {dateNow} </Text>
      </View>

      <View style={styles.numero} >
        <Text style={styles.underline}>N {numero} </Text>
        <Text>- SPAT/DRH/DCPRH/SGAF.{year}</Text>
      </View>

      <View style={styles.autorisation}>
        <Text>AUTORISATION DE STAGE</Text>
      </View>

      <View style={styles.text}>
        <Text style={styles.text_mb}>{'\u00A0\u00A0\u00A0\u00A0'}Nous sousignée, SOCIETE DU PORT A GESTION AUTONOME DE TOAMASINA, autorisons, Monsieur <Text style={styles.bold}>{nomPrenom}</Text> , à effectuer un stage non rémunéré pour une durée de {durer} auprès du Département Informatique et Télécommunications, du {debut} au {fin}.</Text>
        <Text style={styles.text_mb}>{'\u00A0\u00A0\u00A0\u00A0'}Et qu'à l'issue de ce stage, il doit fournir un rapport visé par son encadreur professionnel.</Text>
        <Text>{'\u00A0\u00A0\u00A0\u00A0'}En foi de quoi, la présente autorisation lui est délivrée pour servir et valoir ce que de droit.</Text>
      </View>

      <View style={styles.destinataire_titre}>
        <Text style={styles.underline}>DESTINATAIRES:</Text>
      </View>

      <View style={styles.destinataire_content}>
        <Text>- Département Informatique et Télécommunications;</Text>
        <Text>- Intéressé;</Text>
        <Text>- Archives.</Text>
      </View>

    </Page>
  </Document>
)};

export default Authorization;
