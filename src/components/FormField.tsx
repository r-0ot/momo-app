import { View, Text, TextInput, StyleSheet } from "react-native";
import DatePicker from "react-native-neat-date-picker";
import { useState } from "react";
import { Picker } from "./Picker";

export function FormField({
  field,
  index,
  styling,
  handleChange,
  handleBlur = () => {},
  value,
  setFieldValue = () => {},
}) {
  const [open, setOpen] = useState(false);
  const [openPicker, setOpenPicker] = useState(false);

  const handleFocus = () => {
    if (field.type === "date") {
      setOpen(true);
    }
    if (field.type === "picker") {
      setOpenPicker(true);
    }
  };
  const handlePress = (e) => {
    setFieldValue(field.label.toLowerCase(), e.target.textContent);
    setOpenPicker(false);
    handleChange(e.target.textContent);
  };
  return (
    <>
      <View key={index} style={styles.container}>
        <Text style={{ ...styles.label, ...styling }}>{field.label}</Text>
        <TextInput
          style={{ ...styles.input, width: field.size ? 163 : 343, ...styling }}
          placeholder={field.placeholder}
          onFocus={handleFocus}
          onChangeText={
            field.type !== "picker" && handleChange(field.label.toLowerCase())
          }
          onBlur={handleBlur(field.label.toLowerCase())}
          value={value}
        />
        {field.type === "picker" && (
          <Picker
            size={field.size}
            isOpen={openPicker}
            options={field.options}
            handlePress={handlePress}
          />
        )}
      </View>
      {field.type === "date" && (
        <DatePicker
          style={styles.datePicker}
          modalStyles={styles.datePicker}
          isVisible={open}
          mode={"single"}
          onConfirm={(output) => {
            setOpen(false);
            setFieldValue(field.label.toLowerCase(), output.dateString);
          }}
          onCancel={() => setOpen(false)}
          maxDate={new Date()}
          colorOptions={{
            backgroundColor: "#C6C6C6",
            headerColor: "#661A15",
            changeYearModalColor: "#661A15",
            weekDaysColor: "#661A15",
            confirmButtonColor: "#661A15",
            selectedDateBackgroundColor: "#661A15",
          }}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 2,
  },
  input: {
    backgroundColor: "#3F3F46",
    width: 343,
    height: 42,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: 500,
    padding: 8,
    marginTop: 8,
    color: "#C6C6C6",
  },
  label: {
    color: "white",
    fontSize: 14,
    fontWeight: 400,
    alignSelf: "flex-start",
  },
  datePicker: {
    zIndex: 1000,
    position: "fixed",
    justifyContent: "center",
    alignItems: "center",
  },
});
