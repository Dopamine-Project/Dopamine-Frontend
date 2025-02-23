import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login</Text>

      <Input
        style={styles.emailInput}
        variant="outline"
        size="lg"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Email" />
      </Input>

      <Input
        style={styles.passwordInput}
        variant="outline"
        size="lg"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Password" />
      </Input>

      <Button
        style={styles.loginButton}
        size="lg"
        variant="solid"
        action="primary"
      >
        <ButtonText style={styles.buttonText}>login</ButtonText>
      </Button>

      <Button size="md" variant="link" action="secondary">
        <ButtonText>Forgot Password?</ButtonText>
      </Button>

      <View>
        <View style={styles.divider} />
        <Text>Text Here!!</Text>
        <View style={styles.divider} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 32,
    marginBottom: 50,
  },
  emailInput: {
    width: 300,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 20,
  },
  passwordInput: {
    width: 300,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 100,
    borderRadius: 20,
  },
  loginButton: {
    width: 170,
    height: 40,
    borderRadius: 20,
    marginBottom: 2,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 300,
    marginVertical: 150,
  },
});
