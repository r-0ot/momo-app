import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Title } from "../../components/Title";
import { Search } from "../../components/Search";
import { SearchResult } from "../../components/SearchResult";
import { Modal } from "../../components/Modal";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { employees, employees1 } from "../dummyData";
import { apiURL } from "../constants";

export function PeopleOperations() {
  const [showModal, setShowModal] = useState(false);
  const [employeesData, setEmployeesData] = useState([]);
  const [error, setError] = useState(null);
  const [searchKey, setSearchKey] = useState("");
  const navigation = useNavigation();
  const filteredEmployees = employeesData.filter((employee) =>
    employee.name.toLowerCase().includes(searchKey.toLowerCase()),
  );
  const fetchEmployees = async (data) => {
    try {
      //                       const response = await axios.get(`${apiURL}/api/v1/employees`);
      //                       setEmployeesData(response.data);
      setEmployeesData(data);
    } catch (err) {
      setError(err);
    }
  };
  const handleDelete = async () => {
    try {
      //                       const response = await axios.delete(`${apiURL}/api/v1/employees/${employeeId}`);
      //
    } catch (err) {
      //error
    }
    setShowModal(false);
    fetchEmployees(employees1);
  };
  useEffect(() => {
    fetchEmployees(employees);
  }, []);

  return (
    <View style={styles.container}>
      <Title text="People Operations" path="Menu" />
      <Search placeholder={"Search by name"} handleChange={setSearchKey} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filteredEmployees.map((employee, index) => (
          <SearchResult
            key={index}
            data={employee}
            view={"ViewEmployee"}
            edit={"EditEmployee"}
            setShowModal={setShowModal}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate("AddEmployee")}
      >
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
      {showModal && (
        <Modal setShowModal={setShowModal} handleDelete={handleDelete} />
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
  scrollContainer: { width: 350 },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#661A15",
    position: "absolute",
    top: "45%",
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
});
