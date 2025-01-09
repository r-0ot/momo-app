import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { CustomForm } from "../../components/CustomForm";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  staffFormFields,
  staffValidationSchema,
  bankFormFields,
  bankValidationSchema,
} from "../constants";
import { calculateAge } from "../utils";
import axios from "axios";

export function EditEmployee({ route }) {
  const navigation = useNavigation();
  const [active, setActive] = useState(0);
  const [formData, setFormData] = useState({});
  const { details } = route.params;
  console.log(details);
  const staffInitialValues = {
    "aadhar number": details.aadhar_number,
    "first name": details.name.split(" ")[0],
    "last name": details.name.split(" ")[1],
    gender: details.gender.toLowerCase(),
    "date of birth": details.age,
    "native place": details.address.state,
    role: details.gender,
    "salary per day": details.payroll.salary_per_day,
    "email id": details.email,
    "phone number": details.phone_number,
    "alternate phone number": details.alternate_phone_number,
  };
  const bankInitialValues = {
    "bank name": details.banking.bank_name,
    "account holder name": details.banking.account_holder_name,
    "account number": details.banking.account_number,
    "ifsc code": details.banking.ifsc_code,
    "account branch": details.banking.bank_name,
  };
  const handleTabChange = (values) => {
    setFormData({
      name: `${values["first name"]} ${values["last name"]}`,
      age: calculateAge(values["date of birth"]),
      gender: values.gender.toUpperCase(),
      email: values["email id"],
      phone_number: values["phone number"],
      alternate_phone_number: values["alternate phone number"],
      aadhar_number: values["aadhar number"],
      address: {
        street: "",
        city: "",
        state: values["native place"],
        postal_code: "",
        country: "",
      },
      payroll: {
        salary_per_day: values["salary per day"],
        overtime_rate: "",
      },
    });
    setActive(1);
  };
  const handleFormSubmission = async (values) => {
    const updatedFormData = {
      ...formData,
      banking: {
        bank_name: values["bank name"],
        ifsc_code: values["ifsc code"],
        account_number: values["account number"],
        account_holder_name: values["account holder name"],
      },
    };
    console.log("form data", updatedFormData);
    //           try {
    //                  const response = await  axios.put(`${apiURL}/api/v1/employees/${details.Id}`, updatedFormData);
    //                  console.log('Response:', response.data);
    //              } catch (error) {
    //                  console.error('Error sending data:', error);
    //              }
    navigation.navigate("PeopleOperations");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Employee Information</Text>
      <Text style={styles.subtitle}>
        Fill the details to update an employee
      </Text>
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.subtitle}>1. Staff information</Text>
          <View style={styles.tabLayout}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.subtitle}>2. Bank information</Text>
          <View
            style={{
              ...styles.tabLayout,
              backgroundColor: active ? "#661A15" : "#3F3F46",
            }}
          ></View>
        </TouchableOpacity>
      </View>
      <CustomForm
        initialValues={active ? bankInitialValues : staffInitialValues}
        schema={active ? bankValidationSchema : staffValidationSchema}
        fields={active ? bankFormFields : staffFormFields}
        buttonText={active ? "Update Employee" : "Next"}
        handleSubmission={active ? handleFormSubmission : handleTabChange}
        showDP={active ? false : true}
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
  title: { color: "white", fontSize: 16, fontWeight: 500, margin: 5 },
  subtitle: {
    alignSelf: "center",
    color: "white",
    fontSize: 12,
    fontWeight: 500,
    marginBottom: 5,
  },
  tabs: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 25,
  },
  tab: {
    width: 164,
    height: 28,
    justifyContent: "space-around",
    alignItems: "space-around",
  },
  tabLayout: { backgroundColor: "#661A15", width: 164, height: 4 },
});
