import * as Yup from "yup";

//Common
export const apiURL = "https://jsonplaceholder.typicode.com/posts";
export const today = new Date();
export const year = today.getFullYear();
export const month = today.getMonth();
export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// People Operations - View Employee
export const employeeInformation = [
  "First Name:",
  "Last Name:",
  "Native Place:",
  "Role:",
  "Email ID:",
  "Phone Number:",
  "Alternate Phone Number:",
  "Date of Birth:",
];
export const bankInformation = [
  "Aadhar Number:",
  "Bank Name:",
  "Account Holder Name:",
  "Account Number:",
  "IFSC:",
  "Account Branch:",
];
export const salaryInformation = [
  "Bonus:",
  "Advance Payment:",
  "Deductions:",
  "Salary Credited:",
];
export const staticSalaryInformation = ["Overtime rate:", "Salary Per Day:"];
export const dateFields = [
  {
    field1: {
      label: "Month",
      placeholder: "Month",
      type: "picker",
      options: months,
    },
    field2: {
      label: "Year",
      placeholder: "Year",
      type: "picker",
      options: [year, year - 1, year - 2],
    },
    size: "small",
  },
];
export const advanceFormFields = [
  { label: "Advance Amount", placeholder: "E.g INR 500" },
  { label: "Reason", placeholder: "Enter a reason" },
  { label: "Date of payment", placeholder: "Select a date", type: "date" },
];
export const advanceInitialValues = {
  "advance amount": "",
  reason: "",
  "date of payment": "",
};
export const advanceValidationSchema = Yup.object().shape({
  "advance amount": Yup.string()
    .required("Advance Amount is required")
    .matches(/^\d+$/, "Advance Amount must be a valid number"),
  reason: Yup.string()
    .required("Reason is required")
    .min(5, "Reason must be at least 5 characters long"),
  "date of payment": Yup.date()
    .required("Date of payment is required")
    .nullable() // Allows null value
    .typeError("Date of payment must be a valid date"),
});
export const deductionFormFields = [
  { label: "Amount Deducted", placeholder: "E.g INR 500" },
  { label: "Reason", placeholder: "Enter a reason" },
  { label: "Date of deduction", placeholder: "Select a date", type: "date" },
];
export const deductionInitialValues = {
  "amount deducted": "",
  reason: "",
  "date of deduction": "",
};
export const deductionValidationSchema = Yup.object().shape({
  "amount deducted": Yup.string()
    .required("Amount Deducted is required")
    .matches(/^\d+$/, "Amount Deducted must be a valid number"),
  reason: Yup.string()
    .required("Reason is required")
    .min(5, "Reason must be at least 5 characters long"),
  "date of deduction": Yup.date()
    .required("Date of deduction is required")
    .nullable() // Allows null value
    .typeError("Date of deduction must be a valid date"),
});
export const bonusFormFields = [
  { label: "Bonus Amount", placeholder: "E.g INR 500" },
  { label: "Reason", placeholder: "Enter a reason" },
  { label: "Date of payment", placeholder: "Select a date", type: "date" },
];
export const bonusInitialValues = {
  "bonus amount": "",
  reason: "",
  "date of payment": "",
};
export const bonusValidationSchema = Yup.object().shape({
  "bonus amount": Yup.string()
    .required("Bonus Amount is required")
    .matches(/^\d+$/, "Bonus Amount must be a valid number"),
  reason: Yup.string()
    .required("Reason is required")
    .min(5, "Reason must be at least 5 characters long"),
  "date of payment": Yup.date()
    .required("Date of payment is required")
    .nullable() // Allows null value
    .typeError("Date of payment must be a valid date"),
});

// People Operations - Add Employee
export const staffFormFields = [
  { label: "Aadhar Number", placeholder: "Enter employee's Aadhar Number" },
  { label: "First Name", placeholder: "E.g John" },
  { label: "Last Name", placeholder: "E.g Appleseed" },
  {
    label: "Gender",
    placeholder: "Enter Employee's Gender",
    type: "picker",
    options: ["Male", "Female", "Other"],
  },
  { label: "Date of Birth", placeholder: "Select a date", type: "date" },
  { label: "Native Place", placeholder: "Select a location" },
  { label: "Role", placeholder: "Enter employee's role" },
  { label: "Salary Per Day", placeholder: "E.g INR 300" },
  { label: "Email Id", placeholder: "Enter employee's Email Id" },
  { label: "Phone Number", placeholder: "Enter employee's phone number" },
  {
    label: "Alternate phone number",
    placeholder: "Enter employee's alternate phone number",
  },
];
export const staffInitialValues = {
  "aadhar number": "",
  "first name": "",
  "last name": "",
  gender: "",
  "date of birth": "",
  "native place": "",
  role: "",
  "salary per day": "",
  "email id": "",
  "phone number": "",
  "alternate phone number": "",
};
export const staffValidationSchema = Yup.object().shape({
  "aadhar number": Yup.string()
    .required("Aadhar number is required")
    .matches(/^\d{12}$/, "Aadhar number must be exactly 12 digits"),

  "first name": Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters long")
    .max(50, "First name cannot exceed 50 characters"),

  "last name": Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters long")
    .max(50, "Last name cannot exceed 50 characters"),

  gender: Yup.string()
    .required("Gender is required")
    .oneOf(
      ["Male", "Female", "Other"],
      "Gender must be either Male, Female, or Other",
    ),

  "date of birth": Yup.date()
    .required("Date of birth is required")
    .max(new Date(), "Date of birth cannot be in the future"),

  "native place": Yup.string()
    .required("Native place is required")
    .max(100, "Native place cannot exceed 100 characters"),

  role: Yup.string()
    .required("Role is required")
    .max(50, "Role cannot exceed 50 characters"),

  "salary per day": Yup.number()
    .required("Salary per day is required")
    .positive("Salary must be a positive number"),

  "email id": Yup.string()
    .required("Email ID is required")
    .email("Email ID must be a valid email"),

  "phone number": Yup.string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),

  "alternate phone number": Yup.string()
    .matches(/^\d{10}$/, "Alternate phone number must be exactly 10 digits")
    .nullable(),
});
export const bankFormFields = [
  { label: "Bank Name", placeholder: "E.g HDFC Bank" },
  { label: "Account Holder Name", placeholder: "E.g Gaurav Kapoor" },
  { label: "Account Number", placeholder: "Enter Bank Account Number" },
  { label: "IFSC Code", placeholder: "Enter IFSC" },
  { label: "Account Branch", placeholder: "E.g MADIPAKKAM" },
];
export const bankInitialValues = {
  "bank name": "",
  "account holder name": "",
  "account number": "",
  "ifsc code": "",
  "account branch": "",
};
export const bankValidationSchema = Yup.object().shape({
  "bank name": Yup.string()
    .required("Bank name is required")
    .max(100, "Bank name cannot exceed 100 characters"),

  "account holder name": Yup.string()
    .required("Account holder name is required")
    .min(2, "Account holder name must be at least 2 characters long")
    .max(100, "Account holder name cannot exceed 100 characters"),

  "account number": Yup.string()
    .required("Account number is required")
    .matches(/^\d{9,18}$/, "Account number must be between 9 and 18 digits"),

  "ifsc code": Yup.string()
    .required("IFSC Code is required")
    .matches(
      /^[A-Z]{4}0[A-Z0-9]{6}$/,
      "IFSC Code must be in the format ABCD0123456",
    ),

  "account branch": Yup.string()
    .required("Account branch is required")
    .max(100, "Account branch cannot exceed 100 characters"),
});

// Inventory management
export const inventoryTabs = ["View Vendors", "Invoice Summary"];
export const invoiceInitialValues = { from: "", to: "" };
export const invoiceFormFields = [
  {
    field1: { label: "From", placeholder: "From", type: "date" },
    field2: { label: "To", placeholder: "To", type: "date" },
    size: "small",
  },
];
export const invoiceValidationSchema = Yup.object().shape({
  from: Yup.date()
    .required("From date is required")
    .nullable()
    .typeError("From must be a valid date"),
  to: Yup.date()
    .required("To date is required")
    .nullable()
    .typeError("To must be a valid date")
    .min(Yup.ref("from"), "To date must be later than From date"),
});
export const invoiceColumns = [
  "Product Name",
  "Category",
  "Vendor",
  "Quantity",
  "Price",
  "Total",
];

// Inventory Management - View Inventory
export const supplierInformation = [
  "First Name:",
  "Last Name:",
  "Email ID:",
  "Phone Number:",
  "Commencement Date:",
  "Alternate Phone Number:",
];
export const gstBankInformation = [
  "GST Number:",
  "Bank Name:",
  "Account Holder Name:",
  "Account Number:",
  "IFSC:",
  "Account Branch:",
];
export const provisionInformation = ["Category:", "Price Per Unit:"];

// Inventory Management - Add Vendor
export const vendorFormFields = [
  { label: "First Name", placeholder: "E.g John" },
  { label: "Last Name", placeholder: "E.g Appleseed" },
  { label: "Company Name", placeholder: "Enter Company's Name" },
  { label: "Email Id", placeholder: "Enter employee's Email Id" },
  { label: "Phone Number", placeholder: "Enter employee's phone number" },
  {
    label: "Alternate phone number",
    placeholder: "Enter employee's alternate phone number",
  },
  {
    type: "tile",
    tileFields: [
      { label: "Category", placeholder: "Select Category" },
      { label: "Provision Name", placeholder: "Select Provision Name" },
      { label: "Price", placeholder: "Enter Price" },
    ],
  },
];

export const vendorInitialValues = {
  "first name": "",
  "last name": "",
  "company name": "",
  "email id": "",
  "phone number": "",
  "alternate phone number": "",
};

export const vendorValidationSchema = Yup.object().shape({
  "first name": Yup.string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 characters long"), // Minimum length for first name
  "last name": Yup.string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters long"), // Minimum length for last name
  "company name": Yup.string().required("Company Name is required"), // Required field
  "email id": Yup.string()
    .required("Email Id is required")
    .email("Email Id must be a valid email"), // Valid email format
  "phone number": Yup.string()
    .required("Phone Number is required")
    .matches(/^\d{10}$/, "Phone Number must be exactly 10 digits"), // Validates for a 10-digit phone number
  "alternate phone number": Yup.string()
    .matches(/^\d{10}$/, "Alternate Phone Number must be exactly 10 digits") // Optional: Validates for a 10-digit phone number
    .nullable(),
  category: Yup.string().required("Category is required"), // Required field
  "provision name": Yup.string().required("Provision Name is required"), // Required field
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be a positive number") // Ensures price is a positive number
    .typeError("Price must be a number"), // Ensures it's a number
});

export const gstBankFormFields = [
  { label: "GST Number", placeholder: "E.g XXXXXXXXXXX" },
  { label: "Bank Name", placeholder: "E.g HDFC Bank" },
  { label: "Account Holder Name", placeholder: "E.g Gaurav Kapoor" },
  { label: "Account Number", placeholder: "Enter Bank Account Number" },
  { label: "IFSC Code", placeholder: "Enter IFSC" },
  { label: "Account Branch", placeholder: "E.g MADIPAKKAM" },
];
export const gstBankInitialValues = {
  "gst number": "",
  "bank name": "",
  "account holder name": "",
  "account number": "",
  "ifsc code": "",
  "account branch": "",
};
export const gstBankValidationSchema = Yup.object().shape({
  "gst number": Yup.string()
    .required("GST Number is required")
    .matches(
      /^[0-9]{2}[A-Z]{4}[0-9]{4}[A-Z]{1}[Z]{1}[0-9A-Z]{1}$/,
      "GST Number must be a valid format",
    ),
  "bank name": Yup.string()
    .required("Bank name is required")
    .max(100, "Bank name cannot exceed 100 characters"),
  "account holder name": Yup.string()
    .required("Account holder name is required")
    .min(2, "Account holder name must be at least 2 characters long")
    .max(100, "Account holder name cannot exceed 100 characters"),
  "account number": Yup.string()
    .required("Account number is required")
    .matches(/^\d{9,18}$/, "Account number must be between 9 and 18 digits"),

  "ifsc code": Yup.string()
    .required("IFSC Code is required")
    .matches(
      /^[A-Z]{4}0[A-Z0-9]{6}$/,
      "IFSC Code must be in the format ABCD0123456",
    ),

  "account branch": Yup.string()
    .required("Account branch is required")
    .max(100, "Account branch cannot exceed 100 characters"),
});

// Inventory Management - Order Product

export const productFormFields = [
  {
    type: "tile",
    tileFields: [
      { label: "Category", placeholder: "Select Category" },
      { label: "Vendor Name", placeholder: "Select Vendor's Name" },
      { label: "Provision Name", placeholder: "Select Provision Name" },
      { label: "Quantity", placeholder: "Enter Quantity" },
    ],
  },
];

export const productInitialValues = {};

export const productValidationSchema = Yup.object().shape({
  category: Yup.string().required("Category is required"),
  "provision name": Yup.string().required("Provision Name is required"),
  "vendor name": Yup.string().required("Provision Name is required"),
  quantity: Yup.number()
    .required("Quantity is required")
    .positive("Quantity must be a positive number")
    .typeError("Quantity must be a number"),
});

//Expenditure Oversight - Add Expense

export const expenseFormFields = [
  {
    type: "tile",
    tileFields: [
      { label: "Payment mode", placeholder: "Select payment mode" },
      { label: "Provision Name", placeholder: "Select Provision Name" },
      { label: "Price per unit", placeholder: "Enter price" },
      { label: "Quantity", placeholder: "Enter Quantity" },
    ],
  },
];

export const expenseInitialValues = {};

export const expenseValidationSchema = Yup.object().shape({
  "payment mode": Yup.string().required("Payment mode is required"),
  "provision name": Yup.string().required("Provision Name is required"),
  "price per unit": Yup.string().required("Price is required"),
  quantity: Yup.number()
    .required("Quantity is required")
    .positive("Quantity must be a positive number")
    .typeError("Quantity must be a number"),
});
