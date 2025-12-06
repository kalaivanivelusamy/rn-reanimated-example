import { useState } from 'react';
import { Button,View, Text, Pressable } from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

export default function Index() {
const width = useSharedValue(150);
const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
     isPressed ? width.value = withSpring(width.value + 150) : width.value = withSpring(width.value-150);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
    <Animated.View
      style={{
        marginTop: 100,
        backgroundColor: "violet",
        width:width,
        height: 100,
      }}
    >
    </Animated.View>
    <Pressable  onPress={handlePress} style={{ marginTop: 40, padding: 10,backgroundColor: 'lightblue', borderRadius: 5 }}>
      <Text>Click here</Text>
      </Pressable>
    </View>
  );
}
