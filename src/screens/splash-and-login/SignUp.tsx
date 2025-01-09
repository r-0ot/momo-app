import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { CustomForm } from "../../components/CustomForm";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function SignUp() {
  const navigation = useNavigation();
  const accountFormFields = [
    { label: "Username", placeholder: "E.g Johntheone" },
    { label: "Email", placeholder: "Enter your email address" },
    { label: "Password", placeholder: "Enter password" },
    { label: "Confirm password", placeholder: "Confirm Password" },
  ];
  const accountInitialValues = {
    username: "",
    email: "",
    password: "",
    "confirm password": "",
  };
  const bioDataFormFields = [
    { label: "First name", placeholder: "E.g John" },
    { label: "Last name", placeholder: "E.g Appleseed" },
    { label: "Date of Birth", placeholder: "Select a date", type: "date" },
    { label: "Location", placeholder: "Select a location" },
    { label: "City", placeholder: "Select city in your location" },
  ];
  const bioDataInitialValues = {
    "first name": "",
    "last name": "",
    "date of birth": "",
    location: "",
    city: "",
  };
  const accountValidationSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must not exceed 20 characters")
      .matches(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores"
      ), // Alphanumeric and underscores only

    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),

    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter") // At least one lowercase letter
      .matches(/[0-9]/, "Password must contain at least one number") // At least one number
      .matches(/[\W_]/, "Password must contain at least one special character"), // At least one special character

    "confirm password": yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const bioDataValidationSchema = yup.object().shape({
    "first name": yup
      .string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must not exceed 50 characters"),

    "last name": yup
      .string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must not exceed 50 characters"),

    "date of birth": yup
      .string()
      .nullable() // Allow null values if using a date picker
      .max(new Date(), "Date of Birth cannot be in the future"), // Ensure the date is not in the future

    location: yup
      .string()
      .required("Location is required")
      .min(2, "Location must be at least 2 characters")
      .max(100, "Location must not exceed 100 characters"),

    city: yup
      .string()
      .required("City is required")
      .min(2, "City must be at least 2 characters")
      .max(50, "City must not exceed 50 characters"),
  });

  const [active, setActive] = useState(0);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: 343, height: 255 }}
      />
      <Text style={styles.title}>Create an Account</Text>
      <Text style={styles.subtitle}>
        Help us finish setting up your account
      </Text>
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.subtitle}>1. Account information</Text>
          <View style={styles.tabLayout}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.subtitle}>2. Biodata information</Text>
          <View
            style={{
              ...styles.tabLayout,
              backgroundColor: active ? "#661A15" : "#3F3F46",
            }}
          ></View>
        </TouchableOpacity>
      </View>
      <CustomForm
        initialValues={active ? bioDataInitialValues : accountInitialValues}
        schema={active ? bioDataValidationSchema : accountValidationSchema}
        fields={active ? bioDataFormFields : accountFormFields}
        buttonText={active ? "Create your account" : "Continue"}
        handleSubmission={
          active ? () => navigation.navigate("Login") : () => setActive(1)
        }
      />
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
  subtitle: {
    alignSelf: "center",
    color: "white",
    fontSize: 12,
    fontWeight: 500,
  },
  tabs: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tab: {
    width: 164,
    height: 28,
    justifyContent: "space-around",
    alignItems: "space-around",
  },
  tabLayout: { backgroundColor: "#661A15", width: 164, height: 4 },
});
