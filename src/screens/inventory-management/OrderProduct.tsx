import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { CustomForm } from "../../components/CustomForm";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  apiURL,
  productFormFields,
  productInitialValues,
  productValidationSchema,
} from "../constants";
import axios from "axios";

export function OrderProduct() {
  const navigation = useNavigation();
  const [active, setActive] = useState(0);
  const [formData, setFormData] = useState({});
  const [provision, setProvision] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order a Product</Text>
      <Text style={styles.subtitle}>Fill the details to Place the order</Text>
      <CustomForm
        initialValues={productInitialValues}
        schema={productValidationSchema}
        fields={productFormFields}
        buttonText={"Place Order"}
        handleSubmission={() => navigation.navigate("InventoryManagement")}
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
