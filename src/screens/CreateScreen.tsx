import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ProductName from '../components/ProductName';
import Amount from '../components/Amount';
import ItemDescription from '../components/ItemDescription';
import Intention from '../components/Intention';
import Remarks from '../components/Remarks';
import SaveButton from '../components/SaveButton';

export default function CreateScreen() {
  const createListButton = () => {
    
  }
  return (
    <View style={styles.mainContainer}>
      <KeyboardAwareScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <ProductName />
          <Amount />
          <ItemDescription />
          <Intention />
          <Remarks />
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.buttonContainer}>
        <SaveButton createListButton={createListButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 16,
  },
  inputContainer: {
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 10,
  }
});