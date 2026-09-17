import { Image, View, Text, StyleSheet } from "react-native";


export function PostCards () {
	return (
		<View style={styles.postCard}> 
  		<PostHeader />
			<PostBody />
  	</View>
	)
};

function PostHeader () {
	return (
		<View style={styles.postHeader}>
		<Image 
			source={require('../assets/radGrafIcon.jpg')} 
      style={styles.iconImageMini}
      resizeMode="contain"
		/>
		<Text>radicalgraff</Text>
		<Image 
			source={require('../assets/meatball-menu-icon.svg')} 
			style={styles.meatballMenu}
      resizeMode="contain"
		/>
	</View>
	)
};

function PostBody () {
	return (
		<View>
			<Image 
				source={require('../assets/radGrafPost.jpg')}
				style={styles.postImage} 
      	resizeMode="contain"
			/>
			<Text>Anti-ICE sticker spotted in NYC</Text>
		</View>
	)
};

const styles = StyleSheet.create({
	iconImageMini: {
		width: 40,
		height: 40,
		borderRadius: 50,
		marginHorizontal: 10,
	},
	postCard: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
    alignItems: 'center',
		backgroundColor: '#00000000',
		zIndex: 2,
	},
	postHeader: {
		flex: 1,
		justifyContent: 'center',
    alignItems: 'center',
		flexDirection: "row",
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	postImage: {
		maxWidth: 385,
	},
	meatballMenu: {
		alignSelf: "flex-end"
	}
});