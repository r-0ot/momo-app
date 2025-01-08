import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { CustomForm } from "../../components/CustomForm";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  apiURL,
  vendorFormFields,
  vendorInitialValues,
  vendorValidationSchema,
  gstBankFormFields,
  gstBankInitialValues,
  gstBankValidationSchema,
} from "../constants";
import axios from "axios";

export function AddVendor() {
  const navigation = useNavigation();
  const [active, setActive] = useState(0);
  const [formData, setFormData] = useState({});
  const [provision, setProvision] = useState([]);

  const handleTabChange = (values) => {
    setFormData({
      name: `${values["first name"]} ${values["last name"]}`,
      email: values["email id"],
      company_name: values["company name"],
      phone_number: values["phone number"],
      alternate_phone_number: values["alternate phone number"],
      supplies: provision,
    });
    setActive(1);
  };
  const handleFormSubmission = async (values) => {
    const updatedFormData = {
      ...formData,
      banking: {
        gst_number: values["gst number"],
        bank_name: values["bank name"],
        ifsc_code: values["ifsc code"],
        account_number: values["account number"],
        account_holder_name: values["account holder name"],
      },
    };
    console.log("form data", updatedFormData);
    //           try {
    //                  const response = await  axios.post(`${apiURL}/api/v1/suppliers`, updatedFormData);
    //                  console.log('Response:', response.data);
    //              } catch (error) {
    //                  console.error('Error sending data:', error);
    //              }
    navigation.navigate("InventoryManagement");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a Vendor</Text>
      <Text style={styles.subtitle}>Fill the details to add the Vendor</Text>
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.subtitle}>1. Vendor information</Text>
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
        initialValues={active ? gstBankInitialValues : vendorInitialValues}
        schema={active ? gstBankValidationSchema : vendorValidationSchema}
        fields={active ? gstBankFormFields : vendorFormFields}
        buttonText={active ? "Add Vendor" : "Next"}
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
