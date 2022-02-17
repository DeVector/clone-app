import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.txt}>INVESTIMENTOS</Text>
      <View style={styles.boxInvest}>
        <View style={styles.boxHeader}>

          <Text style={styles.txtHeader}>Meu patrimônio</Text>
          <Text style={styles.txtPrice}>R$5.000,68</Text>

        </View>

        <View style={styles.boxImg}>
          <Image source={require('./assets/print-150.jpg')}/>
        </View>

          <View style={styles.boxInCent}>
            <Text>Renda Fixa</Text>
            <Text style={styles.txtPorc}>0.00%</Text>
          </View>
          <View style={styles.boxInCent}>
            <Text>Fundos</Text>
            <Text style={styles.txtPorc}>0.00%</Text>
          </View>
          <View style={styles.boxInCent}>
            <Text style={styles.txtRend}>Poupança</Text>
            <Text style={styles.txtPorc}>100.00%</Text>
          </View>

          <View>
            <TouchableHighlight style={styles.submitBtn}>
              <Text style={styles.submitTxt}>Novo investimento</Text>
            </TouchableHighlight>
          </View>
      </View>
      <Text style={styles.txtFooter}>Meu Investimentos</Text>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    padding: 40,
  },
  boxInvest:{
    padding: 10,
    width: 350,
    height: 660,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  boxHeader: {
    paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxInvesTot:{
    flexDirection: 'row',
  },
  boxInCent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxImg: {
    justifyContent:'center',
    alignItems: 'center',
    paddingTop: 10,
    resizeMode: 'stretch',
    paddingBottom: 15,
  },
  
  txt: {
    padding: 30,
    color: '#FFFFFF',
  },
  txtPrice: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    
  },
  txtFooter: {
    padding: 100,
    color: '#FFFFFF',
  },
  txtHeader: {
    paddingTop: 40,
  },
  txtLisInv: {
    fontSize: 15,
    alignSelf: 'flex-start',
    color: '#000',
  },
  txtPorc: {
    color: '#000',
    fontWeight: 'bold',
  },
  txtRend: {
    paddingBottom: 180,
  },
  submitTxt: {
    color: '#000'
  },

  submitBtn: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#F08000',
    borderRadius: 8,
    alignItems: 'center'
  }
});
