import { router } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

	const Home = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
			<View style={styles.buttonContainer}>
				<Text onPress={() => router.navigate("/using-safearea")} style={styles.buttonText}>Using SafeAreas</Text>
        <Text onPress={() => router.navigate("/edge-to-edge")} style={styles.buttonText}>Edge to Edge</Text>
        <Text onPress={() => router.navigate("/auto-hide-nav")} style={styles.buttonText}>Handling Statusbar</Text>
        <Text onPress={() => router.navigate("/leanBackMode")} style={styles.buttonText}>Lean Back Mode</Text>
        <Text onPress={() => router.navigate("/translucentSystemBarsMode")} style={styles.buttonText}>Translucent System Bars</Text>
        <Text onPress={() => router.navigate("/sticky-immersive")} style={styles.buttonText}>Sticky Immersive Mode</Text>
			</View>
    </SafeAreaView>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#c2e4ea'
	},
  buttonContainer:{
    flex:1, 
    justifyContent:'center', 
    alignItems:'center'
  },
  buttonText: {
    padding: 20, 
    textAlign: 'center',
    fontSize: 20, 
    fontWeight: 'bold',
    marginTop: 5,
  }
});