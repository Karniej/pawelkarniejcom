import { colors } from "@/constants/customisedTheme";
import { Pressable, Text } from "@gluestack-ui/themed";
import { Linking } from "react-native";

export const Article = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <Pressable
      onPress={() => Linking.openURL(link)}
      flexDirection="row"
      alignItems="center"
      mt="$1"
    >
      <Text
        fontFamily="Poppins_500Medium"
        fontWeight="bold"
        fontSize="$sm"
        mr="$2"
        $light-color={colors.darkBackground}
        $dark-color={colors.lightBackground}
        textDecorationLine="underline"
      >
        {title}
      </Text>
      <Text
        fontFamily="Poppins_300Light"
        fontSize="$xs"
        $light-color={colors.darkBackground}
        $dark-color={colors.lightBackground}
      >
        {description}
      </Text>
    </Pressable>
  );
};
