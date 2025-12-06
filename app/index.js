import { useState } from 'react';
import { Button,View, Text } from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

export default function Index() {
  const width = useSharedValue(100);
const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
     isPressed ? width.value = withSpring(width.value + 150) : width.value = withSpring(width.value - 150);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
    <Animated.View
      style={{
        backgroundColor: "violet",
        width,
        height: 100,
      }}
    >
    </Animated.View>
    <Button title='Click here' onPress={handlePress} style={{ marginTop: 40, padding: 10 }}>
      <Text>Click here</Text>
      </Button>
    </View>
  );
}
