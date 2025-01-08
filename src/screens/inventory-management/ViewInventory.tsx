import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Title } from "../../components/Title";
import { Search } from "../../components/Search";
import { SearchResult } from "../../components/SearchResult";
import { InfoTile } from "../../components/InfoTile";
import { useState, useEffect } from "react";
import { DisplayPicture } from "../../components/DisplayPicture";
import { Tabs } from "../../components/Tabs";
import { FormField } from "../../components/FormField";
import { MenuItem } from "../../components/MenuItem";
import { CustomForm } from "../../components/CustomForm";
import {
  apiURL,
  supplierInformation,
  gstBankInformation,
  provisionInformation,
} from "../constants";
import { supplier, provision } from "../dummyData";
import { useNavigation } from "@react-navigation/native";

export function ViewInventory({ route }) {
  const tabs = ["Vendor profile", "Provision data"];
  const [supplierDetails, setSupplierDetails] = useState({});
  const [provisionDetails, setProvisionDetails] = useState([]);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const { Id } = route.params;
  const navigation = useNavigation();

  const fetchSupplier = async (data) => {
    try {
      console.log("supplier ID", Id);
      //                       const suppliersResponse = await axios.get(`${apiURL}/api/v1/suppliers/${Id}`);
      //                       setSupplierDetails(suppliersResponse.data);
      setSupplierDetails(data.supplier);
      //const provisionResponse = await axios.get(`${apiURL}/api/v1/supplies?supplier_id=${Id}`);
      //                       setProvisionDetails(provisionResponse.data);
      setProvisionDetails(data.provision);
      console.log(provision, supplier);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchSupplier({ supplier, provision });
    console.log("supplier and provision details fetched");
  }, [Id]);

  return (
    <View style={styles.page}>
      <Title text="View Inventory" path="InventoryManagement" />
      <View style={styles.container}>
        <DisplayPicture
          imageSource={require(`../../assets/dp.png`)}
          size={60}
        />
        <Text style={styles.title}>James Anderson</Text>
        <Text style={styles.subtitle}>Kitchen Cleaner</Text>
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 0 && (
          <>
            <InfoTile>
              <Text style={styles.tileTitle}>Vendor Information</Text>
              <View style={styles.columns}>
                <View style={styles.column}>
                  {supplierInformation.map((info, index) => (
                    <Text key={index} style={styles.text}>
                      {info}
                    </Text>
                  ))}
                </View>
                <View style={styles.column}>
                  <Text style={styles.text}>
                    {supplierDetails?.full_name?.split(" ")[0]}
                  </Text>
                  <Text style={styles.text}>
                    {supplierDetails?.full_name?.split(" ")[1]}
                  </Text>
                  <Text style={styles.text}>{supplierDetails?.email}</Text>
                  <Text style={styles.text}>
                    {supplierDetails?.phone_number}
                  </Text>
                  <Text style={styles.text}>{supplierDetails?.date}</Text>
                  <Text style={styles.text}>
                    {supplierDetails?.alternate_phone_number}
                  </Text>
                </View>
              </View>
            </InfoTile>
            <InfoTile>
              <Text style={styles.tileTitle}>GST & Bank Details</Text>
              <View style={styles.columns}>
                <View style={styles.column}>
                  {gstBankInformation.map((info) => (
                    <Text style={styles.text}>{info}</Text>
                  ))}
                </View>
                <View style={styles.column}>
                  <Text style={styles.text}>{supplierDetails?.gst_number}</Text>
                  <Text style={styles.text}>
                    {supplierDetails?.banking?.bank_name}
                  </Text>
                  <Text style={styles.text}>
                    {supplierDetails?.banking?.account_holder_name}
                  </Text>
                  <Text style={styles.text}>
                    {supplierDetails?.banking?.account_number}
                  </Text>
                  <Text style={styles.text}>
                    {supplierDetails?.banking?.ifsc_code}
                  </Text>
                  <Text style={styles.text}>
                    {supplierDetails?.banking?.bank_name}
                  </Text>
                </View>
              </View>
            </InfoTile>
          </>
        )}
        {activeTab === 1 && (
          <ScrollView>
            {provisionDetails.map((provision, pIndex) => (
              <InfoTile>
                <Text style={styles.tileTitle}>{provision.name}</Text>
                <View style={styles.columns}>
                  <View style={styles.column}>
                    {provisionInformation.map((info, index) => (
                      <Text key={index} style={styles.text}>
                        {info}
                      </Text>
                    ))}
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.text}>{provision?.category}</Text>
                    <Text style={styles.text}>{provision?.price_per_unit}</Text>
                  </View>
                </View>
              </InfoTile>
            ))}
          </ScrollView>
        )}
        <TouchableOpacity
          style={styles.icon}
          onPress={() =>
            navigation.navigate("UpdateVendor", { details: supplierDetails })
          }
        >
          <Text style={styles.iconText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
  },
  container: {
    flex: 1,
    marginVertical: 20,
    width: 345,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tileTitle: { color: "white", fontSize: 16, fontWeight: 800, margin: 5 },
  title: { color: "white", fontSize: 16, fontWeight: 500, margin: 5 },
  subtitle: {
    alignSelf: "center",
    color: "white",
    fontSize: 12,
    fontWeight: 500,
    marginBottom: 5,
  },
  text: { fontSize: 12, color: "white", padding: 10 },
  columns: {
    flexDirection: "row",
  },
  column: {
    width: 165,
  },
  cells: {
    width: 168,
  },
  menu: {
    width: 350,
    height: 415,
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#661A15",
    position: "absolute",
    bottom: "5%",
    right: "5%",
  },
  iconText: {
    color: "white",
    fontSize: 14,
    fontWeight: 500,
    position: "relative",
    alignSelf: "center",
    top: "30%",
  },
});
