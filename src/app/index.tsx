import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { Image, Text, View } from "react-native";

interface IconProps {
  style?: object;
}

// Create custom icon components for Apple and Google
const AppleIcon: React.FC<IconProps> = props => {
  return (
    <Image
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      source={require("@/../assets/Screenshot 2025-02-23 025857.png")}
      style={[{ width: 20, height: 20, resizeMode: "contain" }, props.style]}
    />
  );
};

const GoogleIcon: React.FC<IconProps> = props => {
  return (
    <Image
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      source={require("@/../assets/Screenshot 2025-02-23 030310.png")}
      className="size-5 object-contain"
      style={[{ width: 20, height: 20, resizeMode: "contain" }, props.style]}
    />
  );
};

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-[50px] text-[32px]">Login</Text>

      <Input
        className="mb-[20px] h-[40px] w-[300px] rounded-[20px] border border-gray-300 px-[10px]"
        variant="outline"
        size="lg"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Email" />
      </Input>

      <Input
        className="mb-[50px] h-[40px] w-[300px] rounded-[20px] border border-gray-300 px-[10px]"
        variant="outline"
        size="lg"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Password" />
      </Input>

      <Button
        className="mb-[2px] h-[40px] w-[170px] rounded-[20px]"
        size="lg"
        variant="solid"
        action="primary"
      >
        <ButtonText className="text-center text-[20px]">login</ButtonText>
      </Button>

      <Button size="md" variant="link" action="secondary">
        <ButtonText>Forgot Password?</ButtonText>
      </Button>

      <View className="flex flex-row">
        <View className="mb-[7px] w-[250px] border-b border-b-black" />
        <Text className="mt-[150px]">Other Sign In</Text>
        <View className="mb-[7px] w-[250px] border-b border-b-black" />
      </View>

      <View className="mt-[20px] flex flex-row items-center justify-center gap-6 space-x-5">
        <Button
          className="mb-[50px] h-[40px] w-[170px] flex-row items-center justify-center rounded-[20px]"
          size="lg"
          variant="solid"
          action="primary"
        >
          <ButtonText className="text-center text-[20px]">Apple</ButtonText>
          <ButtonIcon as={AppleIcon} className="mr-2" />
        </Button>

        <Button
          className="mb-[50px] h-[40px] w-[170px] flex-row items-center justify-center rounded-[20px] bg-white"
          size="lg"
          variant="solid"
          action="primary"
        >
          <ButtonText className="text-center text-[20px] text-black">
            Google
          </ButtonText>
          <ButtonIcon as={GoogleIcon} className="mr-2" />
        </Button>
      </View>

      <View className="flex flex-row items-center justify-center space-x-4">
        <Text className="text-[16px]">Don't Have Account?</Text>
        <Button size="md" variant="link" action="secondary">
          <ButtonText className="text-blue-500">Sign Up</ButtonText>
        </Button>
      </View>
    </View>
  );
}
