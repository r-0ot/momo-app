import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Formik, ErrorMessage } from "formik";
import { InfoTile } from "./InfoTile";
import { CustomButton } from "./CustomButton";
import { FormField } from "./FormField";
import { DisplayPicture } from "../components/DisplayPicture";
import { useState } from "react";

export const CustomForm = ({
  initialValues,
  schema,
  fields,
  buttonText,
  handleSubmission,
  showDP = false,
}) => {
  const [count, setCount] = useState(1);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      validateOnChange={false}
      enableReinitialize={true}
      onSubmit={(values, actions) => {
        console.log("Form submitted", values, actions);
        handleSubmission(values);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        setFieldValue,
      }) => (
        <ScrollView>
          {showDP && (
            <DisplayPicture
              imageSource={require(`../assets/dp.png`)}
              size={60}
            />
          )}
          {fields &&
            fields.map((field) => {
              if (field.size === "small") {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <FormField
                        field={{ ...field.field1, size: field.size }}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        setFieldValue={setFieldValue}
                        value={values[field.field1.label.toLowerCase()]}
                      />
                      <ErrorMessage
                        name={field.field1.label.toLowerCase()}
                        component={Text}
                        style={{ color: "red" }}
                      />
                    </View>
                    <View>
                      <FormField
                        field={{ ...field.field2, size: field.size }}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        setFieldValue={setFieldValue}
                        value={values[field.field2.label.toLowerCase()]}
                      />
                      <ErrorMessage
                        name={field.field2.label.toLowerCase()}
                        component={Text}
                        style={{ color: "red" }}
                      />
                    </View>
                  </View>
                );
              } else if (field.type === "tile") {
                return (
                  <>
                    {Array.from({ length: count }, () => [
                      ...field.tileFields,
                    ]).map((tiles, index) => (
                      <>
                        <InfoTile width={338}>
                          <Text
                            style={styles.title}
                          >{`Provision ${index + 1}`}</Text>
                          {tiles &&
                            tiles.map((tile) => (
                              <>
                                <FormField
                                  index={index + 1}
                                  field={tile}
                                  styling={{ width: 328, marginHorizontal: 5 }}
                                  handleChange={handleChange}
                                  handleBlur={handleBlur}
                                  setFieldValue={setFieldValue}
                                  value={values[tile.label.toLowerCase()]}
                                />
                                <ErrorMessage
                                  name={tile.label.toLowerCase()}
                                  component={Text}
                                  style={{ color: "red" }}
                                />
                              </>
                            ))}
                        </InfoTile>
                      </>
                    ))}
                    <CustomButton
                      size={"medium"}
                      text={"Add"}
                      handlePress={() => setCount((prevCount) => prevCount + 1)}
                    />
                  </>
                );
              } else {
                return (
                  <>
                    <FormField
                      field={field}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      setFieldValue={setFieldValue}
                      value={values[field.label.toLowerCase()]}
                    />
                    <ErrorMessage
                      name={field.label.toLowerCase()}
                      component={Text}
                      style={{ color: "red" }}
                    />
                  </>
                );
              }
            })}
          <CustomButton text={buttonText} handlePress={handleSubmit} />
        </ScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 14,
    fontWeight: 400,
    alignSelf: "flex-start",
    marginHorizontal: 5,
  },
});
