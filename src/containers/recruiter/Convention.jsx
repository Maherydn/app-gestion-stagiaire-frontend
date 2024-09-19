import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page1: {
    backgroundColor: '#FFFFFF',
    padding: 40,
    letterSpacing: 0.8,
    lineHeight: 1.4,
  },
  title: {
    marginTop: '60px',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize : 10
  },
  underline: {
    borderBottom: '1px solid black',
  },
  h2:{
    position: 'absolute',
    left: 40,
    top: 140,
    fontWeight: 'bold',
    fontSize : 10  
  },
  p1: {
    position: 'absolute',
    left: 40,
    right: 40, 
    top: 170,
    fontSize : 10,

  },
  p2: {
    position: 'absolute',
    left: 40,
    right: 40, 
    top: 285,
    fontSize : 10,

  },
  p3: {
    position: 'absolute',
    left: 40,
    right: 40, 
    top: 405,
    fontSize : 10,

  },
  h3: {
    alignItems: 'center',
    marginTop: '400px',
    fontSize : 10,
  },
  h4: {
    position: 'absolute',
    left: 40,
    right: 40, 
    top: 570,
    fontSize : 10,
    display: 'flex',
    flexDirection: 'row' 
  },
  // ?
  p4: {
    position: 'absolute',
    top: 60,
    fontSize : 10,
  },
  h5: {
    position: 'absolute',
    left: 40,
    right: 40, 
    top: 650,
    fontSize : 10,
    display: 'flex',
    flexDirection: 'row' 
  },
  // ?
  p5: {
    position: 'absolute',
    top: 140,
    fontSize : 10,
  },
  page2: {
    backgroundColor: '#FFFFFF',
    padding: 40,
    letterSpacing: 0.8,
    lineHeight: 1.4,
  },
  footer1: {
    borderBottom: '1px solid black',
    position: 'absolute',
    left: 40,
    right: 40,
    bottom: 60 
  },
  numero_page1: {
    textAlign: 'center',
    fontSize : 10,
    marginTop: 255
  },

  // page 2
  h6: {
    position: 'absolute',
    left: 40,
    right: 40, 
    top: 40,
    fontSize : 10,
    display: 'flex',
    flexDirection: 'row' 
  },
  h6_1: {
    position: 'absolute',
    left: 0,
    right: 40, 
    top: 20,
    fontSize : 10,
  },
  p6_1: {
    position: 'absolute',
    left: 40,
    right: 40, 
    top: 40,
    fontSize : 10
  },
  h6_2: {
    position: 'absolute',
    left: 0,
    right: 40, 
    top: 80,
    fontSize : 10,
  },
  p6_2: {
    position: 'absolute',
    left: 40,
    right: 40, 
    top: 100,
    fontSize : 10
  },
  h6_3: {
    position: 'absolute',
    left: 0,
    right: 40, 
    top: 190,
    fontSize : 10,
  },
  p6_3: {
    position: 'absolute',
    left: 40,
    right: 40, 
    top: 210 ,
    fontSize : 10
  },
  h7: {
    position: 'absolute',
    left: 40,
    right: 40, 
    top: 360,
    fontSize : 10,
    display: 'flex',
    flexDirection: 'row' 
  },
  p7: {
    position: 'absolute',
    top: 340,
    fontSize : 10,
  },
  h8: {
    position: 'absolute',
    left: 40,
    right: 40, 
    top: 410,
    fontSize : 10,
    display: 'flex',
    flexDirection: 'row' 
  },
  p8: {
    position: 'absolute',
    top: 390,
    fontSize : 10,
  },
  h9: {
    position: 'absolute',
    left: 40,
    right: 40, 
    top: 480,
    fontSize : 10,
    display: 'flex',
    flexDirection: 'row' 
  },
  p9: {
    position: 'absolute',
    top: 455  ,
    fontSize : 10,
  },
  p10: {
    position: 'absolute',
    top: 500,
    right: 50,
    fontSize : 10,
  },
  signature_1: {
    position: 'absolute',
    top: 605,
    left: 40,
    right: 40, 
    fontSize : 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between' 
  },
  signature_2: {
    position: 'absolute',
    top: 690,
    left: 200,
    right: 40, 
    fontSize : 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between' 
  },
  footer2: {
    borderBottom: '1px solid black',
    position: 'absolute',
    left: 40,
    right: 40, 
    bottom: 60
  },
  numero_page2: {
    textAlign: 'center',
    fontSize : 10,
    marginTop: 745
  },
  image: {
    width: 100,
    height: 125,
    position: 'absolute',
    top: 10,
    left: 242
  },
  
});



//composant PDF
const Convention = ( ) => {
  
  return(
  <Document>
    <Page size="A4" style={styles.page1}>

    <View style={styles.image} >
      <Image  src="spat.png" />
    </View>

    <View style={styles.title}>
      <Text style={styles.underline}>CONVETION DE STAGE</Text>
    </View>

    <View style={styles.h2}>
      <Text > Entre les soussigné :</Text>
    </View>

    <View style={styles.p1}>
      <Text > 
        {/* a corriger l orhographe */}
        <Text>La SOCIETE DU PORT a gestion AUTONOME DE TOAMASINA (SPAT), </Text>
        representee par son directeur General, Monsieur Christian Eddy AVELLIN, ayant son siege social au Boulevard Ratsimilaho Toamasina, elisant domicila a cette meme adresse, ci-apres denomme 
        <Text>" l'Entreprise ", {'\n\n'}</Text>
        d'une part, {'\n\n'}</Text>
        <Text>Et {'\n\n'}</Text>
    </View>

    <View style={styles.p2}>
      <Text>
        <Text>Le ................................................... (Etablissement), </Text>
        représenté par son ................................, Monsieur/Madame ........................,ayant son siége social à ....................... élisant domicile à cette même adresse, ci-après dénommé 
        <Text>" l'Etablissement pédagogique "; {'\n\n'}</Text>
      d'une part, {'\n\n'}</Text>
      <Text>Et {'\n\n'}</Text>
    </View>

    <View style={styles.p3}>
      <Text>
      Mme, Mlle, Mr .................................................... , de nationalité  .............................., né(e) le ...................................., demeurant ..................................., étudiant(e) à ........................(Etablissement), dans la formation en .................(étude et niveau), parcours ................., ci-après dénommé(e)
      <Text>" le Stagiaire ".</Text>
      </Text>
    </View>

    <View style={styles.h3}>
      <Text > IL EST CONVENU CE QUI SUIT :</Text>
    </View>

    <View style={styles.h4}>
      <Text style={styles.underline} >Article 1 :</Text>
      <Text> OBJET</Text>
    </View>

    <View>
      <Text style={styles.p4} >
        La présente convetion a pour objjet de définir les conditions dqns lesquelles le stagiaire effectuera un stage au sein de l'Entreprise dans le cadre de sa formation dispensée par l'Etablissement pédagogique.
      </Text>
    </View>

    <View style={styles.h5}>
      <Text style={styles.underline} >Article 2 :</Text>
      <Text> DUREE</Text>
    </View>

    <View>
      <Text style={styles.p5} >
        Le stage se déroulera du .............. (Date de début du stage) au .............. (Date de fin du stage), pour une durée totale de .............. (Nobre de semaine/mois). La durée hebdomadaire est fixée à ......... heures, de  ...... à ......h (matinée) et de ..... à ......h (après-midi).
      </Text>
    </View>

    <View style={styles.footer1}></View>    

    <View>
      <Text style={styles.numero_page1}>1</Text>
    </View>


    {/* PAGE 2 */}
    </Page>
    <Page size="A4" style={styles.page2}>

    <View style={styles.h6}>
      <Text style={styles.underline} >Article 3 :</Text>
      <Text> LES ENGAGEMENTS</Text>

      <Text style={styles.h6_1}>3.1 L'Entreprise s'engage à :</Text>
      <Text style={styles.p6_1}>
        <Text>- Accueilir l'étudiant stagiaire; {'\n'}</Text>
        <Text>- Désigner un encqdreur professionnel ou une équipe d'encqdrement.</Text>
      </Text>

      <Text style={styles.h6_2}>3.2 L'Etablissement pédagogique s'engage à :</Text>
      <Text style={styles.p6_2}>
        <Text>- Définir les objectifs du stage en fonction du niveau des étudiant;{'\n'}</Text>
        <Text>- Désigner un référent pédagogique chargé  de suivre le déroulement du stage et d'évaluer les compétences acquises par l'Etudiant;{'\n'}</Text>
        <Text>- Orienter les étudiants, suivant leur niveau d'étude, vers des thèmes précis, si possible.</Text>
      </Text>

      <Text style={styles.h6_3}>3.3 Le stagiaire s'engage à :</Text>
      <Text style={styles.p6_3}>
        <Text>- Respecter les règles et consignes de l'Entreprise;{'\n'}</Text>
        <Text>- Effectuer les missions qui lui sont confiées avec sérieux et professionalismem;{'\n'}</Text>
        <Text>- Respecter la confidentialité des informations auxquelles il aura accès dans le cadre de son stage; {'\n'}</Text>
        <Text>- Informer immédiatement l'Entreprise et l'Etablissement pédagogique de toute difficulité rencontrée pendant le stage.</Text>
      </Text>

    </View>

    <View style={styles.h7}>
      <Text style={styles.underline} >Article 4 :</Text>
      <Text> REMUNERATION</Text>
    </View>

    <View>
      <Text style={styles.p7} >Le stage est gratuit et n'est pas rémunéré.</Text>
    </View>

    <View style={styles.h8}>
      <Text style={styles.underline} >Article 5 :</Text>
      <Text> ASSURANCE</Text>
    </View>

    <View>
      <Text style={styles.p8} >Le stagiaire devra être couvert par une assurance responsabilité civile couvrant les dommages qu'il pourrait causer dans le cadre de ses  activités au sein de l'Entreprise.</Text>
    </View>

    <View style={styles.h9}>
      <Text style={styles.underline} >Article 6 :</Text>
      <Text> ATTESTATION DE STAGE</Text>
    </View>

    <View>
      <Text style={styles.p9} >A l'issue du stage, l'Entreprise délivre au stagiaire une attestation de stage.</Text>
    </View>

    <View>
      <Text style={styles.p10} >Fait à Toamasina, le ........... {'\n'}
        en deux (02) exemplaires originaux,
      </Text>
    </View>

    <View style={styles.signature_1}>
      <Text>Pour la SPAT</Text>
      <Text>Pour l'Etablilssement pédagogique</Text>
      <Text>Le stagiaire</Text>
    </View>

    <View style={styles.signature_2}>
      <Text>Pour l'Encadreur professionnel</Text>
      <Text>Pour l'Encadreur pédagogique</Text>
    </View>

    <View style={styles.footer2}></View>    

    <View>
      <Text style={styles.numero_page2}>2</Text>
    </View>
      
    </Page>
  </Document>
)};

export default Convention;
