import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ProductName from '../components/ProductName';
import Amount from '../components/Amount';
import ItemDescription from '../components/ItemDescription';
import Intention from '../components/Intention';
import Remarks from '../components/Remarks';
import UpdateButton from '../components/UpdateButton';

export default function CreateScreen() {

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
        <UpdateButton/>
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
    paddingBottom: 10
  }
});