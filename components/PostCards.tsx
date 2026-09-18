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
		<Text style={styles.postText}>radicalgraff</Text>
		<Image 
			source={require('../assets/meatball-menu-icon.png')} 
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
			<Text style={styles.postText}>Anti-ICE sticker spotted in NYC</Text>
		</View>
	)
};

const styles = StyleSheet.create({
	postCard: {
		flex: 1,
		backgroundColor: '#000',
		borderRadius: 10,
		zIndex: 2,
	},
	postHeader: {
		justifyContent: 'center',
    alignItems: 'center',
		flexDirection: "row",
		paddingVertical: 5,
		paddingHorizontal: 10,
	},
	iconImageMini: {
		width: 45,
		height: 45,
		borderRadius: 50,
		marginRight: 10,
	},
	postImage: {
		maxWidth: 385,
		maxHeight: 500,
	},
	meatballMenu: {
		width: 30,
		height: 30,
		alignSelf: 'flex-end',
		marginLeft: 190,
		marginBottom: 10
	},
	postText: {
		color: '#fff',
		paddingVertical: 20,
		paddingHorizontal: 10,
	}
});