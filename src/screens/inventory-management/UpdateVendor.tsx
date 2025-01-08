import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { CustomForm } from "../../components/CustomForm";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  apiURL,
  vendorFormFields,
  vendorValidationSchema,
  gstBankFormFields,
  gstBankValidationSchema,
} from "../constants";
import axios from "axios";

export function UpdateVendor({ route }) {
  const navigation = useNavigation();
  const [active, setActive] = useState(0);
  const [formData, setFormData] = useState({});
  const [provision, setProvision] = useState([]);
  const { details } = route.params;
  console.log(details);
  const vendorInitialValues = {
    "first name": details.full_name.split(" ")[0],
    "last name": details.full_name.split(" ")[1],
    "company name": details.company_name,
    "email id": details.email,
    "phone number": details.phone_number,
    "alternate phone number": details.alternate_phone_number,
  };
  const gstBankInitialValues = {
    "gst number": details?.banking?.gst_number,
    "bank name": details?.banking?.bank_name,
    "account holder name": details?.banking?.account_holder_name,
    "account number": details?.banking?.account_number,
    "ifsc code": details?.banking?.ifsc_code,
    "account branch": details?.banking?.bank_name,
  };

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
    //                  const response = await  axios.put(`${apiURL}/api/v1/suppliers/${details.Id}`, updatedFormData);
    //                  console.log('Response:', response.data);
    //              } catch (error) {
    //                  console.error('Error sending data:', error);
    //              }
    navigation.navigate("InventoryManagement");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Vendor</Text>
      <Text style={styles.subtitle}>Fill the details to update the Vendor</Text>
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
        buttonText={active ? "Update Vendor" : "Next"}
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
