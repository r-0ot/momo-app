import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
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
  today,
  month,
  months,
  year,
  employeeInformation,
  bankInformation,
  salaryInformation,
  staticSalaryInformation,
  dateFields,
  advanceFormFields,
  advanceInitialValues,
  advanceValidationSchema,
  deductionFormFields,
  deductionInitialValues,
  deductionValidationSchema,
  bonusFormFields,
  bonusInitialValues,
  bonusValidationSchema,
} from "../constants";
import { employee, payroll } from "../dummyData";
import { apiURL } from "../constants";
import { useNavigation } from "@react-navigation/native";

export function ViewEmployee({ route }) {
  const tabs = ["Staff Profile", "Salary Details", "Modify Payroll"];
  const [employeeDetails, setEmployeeDetails] = useState({});
  const [payrollDetails, setPayrollDetails] = useState({});
  const [salaryMonth, setSalaryMonth] = useState(months[month]);
  const [salaryYear, setSalaryYear] = useState(year);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [activeForm, setActiveForm] = useState(0);
  const { Id } = route.params;
  const navigation = useNavigation();

  const fetchEmployee = async (data) => {
    try {
      console.log("employee ID", Id);
      //                       const employeesResponse = await axios.get(`${apiURL}/api/v1/employees/${Id}`);
      //                       setEmployeeDetails(employeesResponse.data);
      setEmployeeDetails(data);
    } catch (err) {
      setError(err);
    }
  };

  const fetchPayroll = async (data) => {
    try {
      console.log(
        "year",
        salaryYear,
        "month",
        salaryMonth,
        months.indexOf(salaryMonth),
      );
      //const payrollResponse = await axios.get(`${apiURL}/api/v1/payroll?employee_id=${Id}&month=${months.indexOf(salaryMonth)}&year=${salaryYear}&spd=0`);
      //                       setPayrollDetails(payrollResponse.data);
      setPayrollDetails(data);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchEmployee(employee);
    console.log("employee details fetched");
  }, [Id]);

  useEffect(() => {
    fetchPayroll(payroll);
    console.log("payroll fetched");
  }, [salaryMonth, salaryYear]);

  const handleAdvance = (values) => {
    const advance = {
      amount: values["advance amount"],
      date: values["date of payment"],
      reason: values["reason"],
      approval_status: "Requested",
      employee_id: Id,
    };
    console.log("advance data", advance);
    //           try {
    //                  const response = await  axios.post(`${apiURL}/api/v1/payroll/addAdvance`, advance);
    //                  console.log('Response:', response.data);
    //              } catch (error) {
    //                  console.error('Error sending data:', error);
    //              }
    setActiveForm(0);
  };

  const handleDeduction = (values) => {
    const deduction = {
      amount: values["amount deducted"],
      date: values["date of deduction"],
      reason: values["reason"],
      employee_id: Id,
    };
    console.log("deduction data", deduction);
    //           try {
    //                  const response = await  axios.post(`${apiURL}/api/v1/payroll/addDeduction`, deduction);
    //                  console.log('Response:', response.data);
    //              } catch (error) {
    //                  console.error('Error sending data:', error);
    //              }
    setActiveForm(0);
  };

  const handleBonus = (values) => {
    const bonus = {
      amount: values["bonus amount"],
      date: values["date of payment"],
      reason: values["reason"],
      employee_id: Id,
    };
    console.log("bonus data", bonus);
    //           try {
    //                  const response = await  axios.post(`${apiURL}/api/v1/payroll/addBonus`, bonus);
    //                  console.log('Response:', response.data);
    //              } catch (error) {
    //                  console.error('Error sending data:', error);
    //              }
    setActiveForm(0);
  };
  return (
    <View style={styles.page}>
      <Title text="View Employee" path="PeopleOperations" />
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
              <Text style={styles.tileTitle}>Employee Information</Text>
              <View style={styles.columns}>
                <View style={styles.column}>
                  {employeeInformation.map((info, index) => (
                    <Text key={index} style={styles.text}>
                      {info}
                    </Text>
                  ))}
                </View>
                <View style={styles.column}>
                  <Text style={styles.text}>
                    {employeeDetails?.name?.split(" ")[0]}
                  </Text>
                  <Text style={styles.text}>
                    {employeeDetails?.name?.split(" ")[1]}
                  </Text>
                  <Text style={styles.text}>
                    {employeeDetails?.address?.state}
                  </Text>
                  <Text style={styles.text}>{employeeDetails?.gender}</Text>
                  <Text style={styles.text}>{employeeDetails?.email}</Text>
                  <Text style={styles.text}>
                    {employeeDetails?.phone_number}
                  </Text>
                  <Text style={styles.text}>
                    {employeeDetails?.alternate_phone_number}
                  </Text>
                  <Text style={styles.text}>{employeeDetails?.age}</Text>
                </View>
              </View>
            </InfoTile>
            <InfoTile>
              <Text style={styles.tileTitle}>Aadhar & Bank Details</Text>
              <View style={styles.columns}>
                <View style={styles.column}>
                  {bankInformation.map((info) => (
                    <Text style={styles.text}>{info}</Text>
                  ))}
                </View>
                <View style={styles.column}>
                  <Text style={styles.text}>
                    {employeeDetails?.aadhar_number}
                  </Text>
                  <Text style={styles.text}>
                    {employeeDetails?.banking?.bank_name}
                  </Text>
                  <Text style={styles.text}>
                    {employeeDetails?.banking?.account_holder_name}
                  </Text>
                  <Text style={styles.text}>
                    {employeeDetails?.banking?.account_number}
                  </Text>
                  <Text style={styles.text}>
                    {employeeDetails?.banking?.ifsc_code}
                  </Text>
                  <Text style={styles.text}>
                    {employeeDetails?.banking?.bank_name}
                  </Text>
                </View>
              </View>
            </InfoTile>
            <TouchableOpacity
              style={styles.icon}
              onPress={() =>
                navigation.navigate("EditEmployee", {
                  details: employeeDetails,
                })
              }
            >
              <Text style={styles.iconText}>Edit</Text>
            </TouchableOpacity>
          </>
        )}
        {activeTab === 1 && (
          <>
            <View style={styles.columns}>
              <View style={styles.cells}>
                {staticSalaryInformation.map((info) => (
                  <Text style={{ ...styles.text, paddingHorizontal: 0 }}>
                    {info}
                  </Text>
                ))}
              </View>
              <View style={styles.cells}>
                <Text style={styles.text}>
                  {employeeDetails?.payroll?.overtime_rate}
                </Text>
                <Text style={styles.text}>
                  {employeeDetails?.payroll?.salary_per_day}
                </Text>
              </View>
            </View>
            {dateFields &&
              dateFields.map((field) => (
                <>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: 338,
                    }}
                  >
                    <FormField
                      field={{ ...field.field1, size: field.size }}
                      handleChange={setSalaryMonth}
                      value={salaryMonth}
                    />
                    <FormField
                      field={{ ...field.field2, size: field.size }}
                      handleChange={setSalaryYear}
                      value={salaryYear}
                    />
                  </View>
                </>
              ))}
            <InfoTile width={338}>
              <Text style={styles.tileTitle}>Salary Information</Text>
              <View style={styles.columns}>
                <View style={styles.column}>
                  {salaryInformation.map((info) => (
                    <Text style={styles.text}>{info}</Text>
                  ))}
                </View>
                <View style={styles.column}>
                  <Text style={styles.text}>{payrollDetails?.bonus}</Text>
                  <Text style={styles.text}>
                    {payrollDetails?.advance_taken}
                  </Text>
                  <Text style={styles.text}>
                    {payrollDetails?.total_deductions}
                  </Text>
                  <Text style={styles.text}>
                    {payrollDetails?.total_earnings}
                  </Text>
                </View>
              </View>
            </InfoTile>
          </>
        )}
        {activeTab === 2 && activeForm === 0 && (
          <View style={styles.menu}>
            <MenuItem
              title={"Advance Payments"}
              imageSource={require(`../../assets/people_and_operations.png`)}
              width={350}
              height={197}
              logo={false}
              handlePress={() => setActiveForm(1)}
            />
            <View style={styles.row}>
              <MenuItem
                title={"Manage Deductions"}
                imageSource={require(`../../assets/people_and_operations.png`)}
                width={160}
                height={197}
                logo={false}
                handlePress={() => setActiveForm(2)}
              />
              <MenuItem
                title={"Bonus Allocation"}
                imageSource={require(`../../assets/people_and_operations.png`)}
                width={160}
                height={197}
                logo={false}
                handlePress={() => setActiveForm(3)}
              />
            </View>
          </View>
        )}
        {activeTab === 2 && activeForm === 1 && (
          <>
            {" "}
            <Text style={styles.title}>Advance Payments</Text>
            <CustomForm
              initialValues={advanceInitialValues}
              schema={advanceValidationSchema}
              fields={advanceFormFields}
              buttonText="Done"
              handleSubmission={handleAdvance}
            />
          </>
        )}
        {activeTab === 2 && activeForm === 2 && (
          <>
            {" "}
            <Text style={styles.title}>Manage Deductions</Text>
            <CustomForm
              initialValues={deductionInitialValues}
              schema={deductionValidationSchema}
              fields={deductionFormFields}
              buttonText="Done"
              handleSubmission={handleDeduction}
            />
          </>
        )}
        {activeTab === 2 && activeForm === 3 && (
          <>
            {" "}
            <Text style={styles.title}>Bonus Allocation</Text>
            <CustomForm
              initialValues={bonusInitialValues}
              schema={bonusValidationSchema}
              fields={bonusFormFields}
              buttonText="Done"
              handleSubmission={handleBonus}
            />
          </>
        )}
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
