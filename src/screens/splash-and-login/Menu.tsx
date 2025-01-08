import { Text, View, Image, StyleSheet, Button } from "react-native";
import { MenuItem } from "../../components/MenuItem";
import { DisplayPicture } from "../../components/DisplayPicture";
import { useNavigation } from "@react-navigation/native";

export function Menu() {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.title}>
          <DisplayPicture
            imageSource={require(`../../assets/dp.png`)}
            size={40}
          />
          <Text style={styles.name}>Hi Rohini</Text>
        </View>
        <View style={styles.menu}>
          <View style={styles.row}>
            <MenuItem
              title={"People Operations"}
              imageSource={require(`../../assets/people_and_operations.png`)}
              handlePress={() => navigation.navigate("PeopleOperations")}
              width={169}
              height={315}
            />
            <MenuItem
              title={"Inventory Management"}
              imageSource={require(`../../assets/inventory_management.jpeg`)}
              handlePress={() => navigation.navigate("InventoryManagement")}
              width={169}
              height={315}
            />
          </View>
          <View style={styles.row}>
            <MenuItem
              title={"Expenditure Oversight"}
              imageSource={require(`../../assets/expenditure_oversight.jpeg`)}
              handlePress={() => navigation.navigate("ExpenditureOversight")}
              width={169}
              height={315}
            />
            <MenuItem
              title={"Sales Overview"}
              imageSource={require(`../../assets/sales_overview.jpeg`)}
              handlePress={() => navigation.navigate("PeopleOperations")}
              width={169}
              height={315}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  container: {
    width: 345,
    height: 720,
    justifyContent: "space-between",
  },
  title: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  name: {
    fontSize: 16,
    fontWeight: 500,
    color: "white",
    lineHeight: 35,
    marginLeft: 10,
  },
  menu: {
    justifyContent: "space-between",
    height: 640,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
