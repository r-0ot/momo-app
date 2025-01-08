import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { CustomForm } from "../../components/CustomForm";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const navigation = useNavigation();
  const formFields = [
    { label: "Email", placeholder: "Enter your email address" },
    { label: "Password", placeholder: "Enter password" },
  ];
  const initialValues = { email: "", password: "" };
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format") // Validates email format
      .required("Email is required"), // Ensures email is provided

    password: yup
      .string()
      .required("Password is required") // Ensures password is provided
      .min(6, "Password must be at least 6 characters") // Minimum length
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter") // At least one uppercase letter
      .matches(/[a-z]/, "Password must contain at least one lowercase letter") // At least one lowercase letter
      .matches(/[0-9]/, "Password must contain at least one number") // At least one number
      .matches(/[\W_]/, "Password must contain at least one special character"), // At least one special character
  });
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/momo-sa-khang.png")}
        style={{ width: 343, height: 255 }}
      />
      <Text style={styles.title}>Login to your Account</Text>
      <CustomForm
        initialValues={initialValues}
        schema={loginValidationSchema}
        fields={formFields}
        buttonText="Login"
        handleSubmission={() => navigation.navigate("Menu")}
      />
      <Text style={styles.title}>
        Don't have an account?
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </Text>
      <Text style={styles.title}>Alternatively Login with: Google</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
  },
  title: { color: "white", fontSize: 16, fontWeight: 500 },
  link: {
    color: "white",
    fontSize: 16,
    textDecorationLine: "underline",
    marginLeft: 8,
    fontWeight: 500,
  },
});
