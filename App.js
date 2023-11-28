import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import CourseInput from "./components/CourseInput";

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startModal = () => {
    setModalIsVisible(!modalIsVisible);
  };
  const endModal = () => {
    setModalIsVisible(!modalIsVisible);
  };

  const addCourse = (courseTitle) => {
    endModal()
  };


  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Kurs Ekle" color="red" onPress={startModal} />
        <CourseInput visible={modalIsVisible} onAddCourse={addCourse} onCancel={endModal}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
