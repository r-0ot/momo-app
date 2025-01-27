import * as React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/splash-and-login/HomeScreen";
import { Login } from "./screens/splash-and-login/Login";
import { SignUp } from "./screens/splash-and-login/SignUp";
import { Menu } from "./screens/splash-and-login/Menu";
import { PeopleOperations } from "./screens/employee-management/PeopleOperations";
import { ViewEmployee } from "./screens/employee-management/ViewEmployee";
import { AddEmployee } from "./screens/employee-management/AddEmployee";
import { EditEmployee } from "./screens/employee-management/EditEmployee";
import { InventoryManagement } from "./screens/inventory-management/InventoryManagement";
import { AddVendor } from "./screens/inventory-management/AddVendor";
import { ViewInventory } from "./screens/inventory-management/ViewInventory";
import { UpdateVendor } from "./screens/inventory-management/UpdateVendor";
import { OrderProduct } from "./screens/inventory-management/OrderProduct";
import { ExpenditureOversight } from "./screens/expenditure-oversight/ExpenditureOversight";
import { SalesOverview } from "./screens/sales-overview/SalesOverview";

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="PeopleOperations" component={PeopleOperations} />
          <Stack.Screen name="AddEmployee" component={AddEmployee} />
          <Stack.Screen name="ViewEmployee" component={ViewEmployee} />
          <Stack.Screen name="EditEmployee" component={EditEmployee} />
          <Stack.Screen
            name="InventoryManagement"
            component={InventoryManagement}
          />
          <Stack.Screen name="AddVendor" component={AddVendor} />
          <Stack.Screen name="ViewInventory" component={ViewInventory} />
          <Stack.Screen name="UpdateVendor" component={UpdateVendor} />
          <Stack.Screen name="OrderProduct" component={OrderProduct} />
          <Stack.Screen
            name="ExpenditureOversight"
            component={ExpenditureOversight}
          />
          <Stack.Screen name="SalesOverview" component={SalesOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
