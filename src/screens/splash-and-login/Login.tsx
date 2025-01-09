import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { CustomForm } from "../../components/CustomForm";
import * as yup from "yup";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView } from "react-native-gesture-handler";

// type FieldType{}

interface FormFieldType {
  id: string;
  label: string;
  placeHolder: string;
  // type: FieldType;
}

export function Login() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const formFields: FormFieldType[] = [
    {
      label: "Email",
      placeHolder: "Enter your email address",
      id: "#email",
      // type: FieldType.,
    },
    {
      label: "Password",
      placeHolder: "Enter password",
      id: "#password",
      // type: FieldType.,
    },
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

  const handleSubmission = async (values: {
    email: string;
    password: string;
  }) => {
    // Here you can handle the login logic, e.g., API call
    // If successful, navigate to the Menu
    navigation.navigate("Menu");
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>Login to your Account</Text>
        <CustomForm
          initialValues={initialValues}
          schema={loginValidationSchema}
          fields={formFields}
          buttonText="Login"
          handleSubmission={handleSubmission}
        />
        <Text style={styles.title}>
          Don't have an account?
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            accessibilityLabel="Sign up"
          >
            <Text style={styles.link}> Sign up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",

    padding: 20, // Added padding for better layout
  },
  logo: {
    width: 343,
    height: 255,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "500", // Changed to string
    textAlign: "center", // Center align text
  },
  link: {
    color: "white",
    fontSize: 16,
    textDecorationLine: "underline",
    marginLeft: 8,
    fontWeight: "500", // Changed to string
  },
});
