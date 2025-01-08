import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Title } from "../../components/Title";
import { Search } from "../../components/Search";
import { SearchResult } from "../../components/SearchResult";
import { Modal } from "../../components/Modal";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Tabs } from "../../components/Tabs";
import { CustomForm } from "../../components/CustomForm";
import { CustomButton } from "../../components/CustomButton";
import { InfoTile } from "../../components/InfoTile";
import {
  apiURL,
  inventoryTabs,
  invoiceInitialValues,
  invoiceFormFields,
  invoiceValidationSchema,
  invoiceColumns,
} from "../constants";
import { provision, suppliers, suppliers1 } from "../dummyData";
import { calculateTotal } from "../utils";
import axios from "axios";

export function InventoryManagement() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [viewInvoice, setViewInvoice] = useState(0);
  const navigation = useNavigation();
  const [suppliersData, setSuppliersData] = useState([]);
  const [error, setError] = useState(null);
  const [searchKey, setSearchKey] = useState("");
  const filteredSuppliers = suppliersData.filter((supplier) =>
    supplier.full_name.toLowerCase().includes(searchKey.toLowerCase()),
  );
  const fetchSuppliers = async (data) => {
    try {
      //                       const response = await axios.get(`${apiURL}/api/v1/suppliers`);
      //                       setSuppliersData(response.data);
      setSuppliersData(data);
    } catch (err) {
      setError(err);
    }
  };
  const handleDelete = async () => {
    try {
      //                       const response = await axios.delete(`${apiURL}/api/v1/suppliers/${supplierId}`);
      //
    } catch (err) {
      //error
    }
    setShowModal(false);
    fetchSuppliers(suppliers1);
  };
  useEffect(() => {
    fetchSuppliers(suppliers);
  }, []);

  return (
    <View style={styles.container}>
      <Title text="Inventory Management" path="Menu" />
      <Tabs
        tabs={inventoryTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === 0 && (
        <>
          {" "}
          <Search
            placeholder={"Search by name or shop name"}
            handleChange={setSearchKey}
          />
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {filteredSuppliers.map((supplier, index) => (
              <SearchResult
                key={index}
                data={supplier}
                view={"ViewInventory"}
                edit={"UpdateVendor"}
                setShowModal={setShowModal}
              />
            ))}
          </ScrollView>
          <TouchableOpacity
            style={{ ...styles.icon, top: "55%" }}
            onPress={() => navigation.navigate("AddVendor")}
          >
            <Text style={styles.text}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.navigate("OrderProduct")}
          >
            <Text style={styles.text}>Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.icon, top: "75%" }}
            onPress={() => navigation.navigate("Menu")}
          >
            <Text style={styles.text}>Menu</Text>
          </TouchableOpacity>
          {showModal && (
            <Modal setShowModal={setShowModal} handleDelete={handleDelete} />
          )}
        </>
      )}
      {activeTab === 1 && (
        <View style={styles.tabContainer}>
          <Text style={styles.title}>Select Filters to view invoice</Text>
          <CustomForm
            initialValues={invoiceInitialValues}
            schema={invoiceValidationSchema}
            fields={invoiceFormFields}
            buttonText="Get Invoice"
            handleSubmission={() => setViewInvoice(1)}
          />
          {viewInvoice === 1 && (
            <ScrollView>
              <InfoTile width={343}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text style={styles.invoiceText1}>
                      Invoice Date Falls Between the Below Range
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.invoiceText}>From</Text>
                      <Text style={styles.invoiceText}>To</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.invoiceText}>From value</Text>
                      <Text style={styles.invoiceText}>To value</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.invoiceText2}>Paid Sum:</Text>
                    <Text style={styles.invoiceTitle}>
                      {calculateTotal(provision).toFixed(2)}
                    </Text>
                    <Text style={{ ...styles.invoiceText2, fontWeight: 600 }}>
                      INR
                    </Text>
                  </View>
                </View>
              </InfoTile>
              <InfoTile width={343}>
                <View style={styles.columns}>
                  {invoiceColumns.map((column) => (
                    <Text style={styles.column}>{column}</Text>
                  ))}
                </View>
                <FlatList
                  data={provision}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <View style={styles.columns}>
                      <Text style={{ ...styles.column, width: 82 }}>
                        {item.name}
                      </Text>
                      <Text style={{ ...styles.column, width: 60 }}>
                        {item.category}
                      </Text>
                      <Text style={{ ...styles.column, width: 50 }}>
                        {item.supplier_id.slice(0, 5)}
                      </Text>
                      <Text style={{ ...styles.column, width: 60 }}>
                        {item.quantity}
                      </Text>
                      <Text style={{ ...styles.column, width: 42 }}>
                        {item.price_per_unit}
                      </Text>
                      <Text
                        style={{
                          ...styles.column,
                          width: 40,
                          textAlign: "right",
                        }}
                      >
                        {item.quantity * item.price_per_unit}
                      </Text>
                    </View>
                  )}
                />
                <View style={styles.columns}>
                  <Text style={{ ...styles.column, fontWeight: 600 }}>
                    TOTAL
                  </Text>
                  <Text style={{ ...styles.column, fontWeight: 600 }}>
                    {calculateTotal(provision).toFixed(2)}
                  </Text>
                </View>
              </InfoTile>
              <CustomButton text={"Share"} handlePress={() => {}} />
            </ScrollView>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
  },
  tabContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  scrollContainer: { width: 350 },
  image: { width: 343, height: 255 },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#661A15",
    position: "absolute",
    top: "65%",
    right: "5%",
  },
  text: {
    color: "white",
    fontSize: 14,
    fontWeight: 500,
    position: "relative",
    alignSelf: "center",
    top: "30%",
  },
  title: { color: "white", fontSize: 14, fontWeight: 400 },
  column: { fontSize: 9, color: "white", padding: 10 },
  columns: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  invoiceText: {
    color: "white",
    fontSize: 10,
    fontWeight: 500,
    padding: 4,
    width: 120,
  },
  invoiceTitle: { color: "white", fontSize: 16, fontWeight: 500, padding: 3 },
  invoiceText1: { color: "white", fontSize: 10, fontWeight: 400, padding: 4 },
  invoiceText2: {
    color: "white",
    fontSize: 10,
    fontWeight: 500,
    padding: 4,
    alignSelf: "flex-end",
  },
});
