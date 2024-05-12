import { colors } from "@/constants/customisedTheme";
import { Box, Text, Pressable, Image } from "@gluestack-ui/themed";
import { Linking } from "react-native";

type CardProps = {
  title: string;
  imageUrl?: string;
  link: string;
  description: string;
  type?: "web" | "app";
};

const Card = ({
  title,
  imageUrl,
  link,
  description,
  type = "web",
}: CardProps) => {
  const handlePress = () => {
    Linking.openURL(link);
  };

  return (
    <Pressable borderRadius={10} py="$2" flex={1} onPress={handlePress}>
      <Box p="$2" rounded="$lg" alignItems="center" flexDirection="row">
        {imageUrl ? (
          <Image
            bg="black"
            source={imageUrl}
            style={{ width: 44, height: 44, borderRadius: 8 }}
            resizeMode="contain"
          />
        ) : null}
        <Box w="90%" paddingLeft="$2">
          <Text
            fontFamily="Poppins_500Medium"
            fontWeight="bold"
            fontSize="$md"
            $light-color={colors.darkBackground}
            $dark-color={colors.lightBackground}
          >
            {title}
          </Text>
          <Text
            fontFamily="Poppins_400Regular"
            fontSize="$sm"
            color="$black"
            $light-color={colors.darkBackground}
            $dark-color={colors.lightBackground}
          >
            {description}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
};
export default Card;
