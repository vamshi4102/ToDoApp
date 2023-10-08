import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const AddToDo = (props) => {
  const modalVisible = props.modalVisible;
  const setModalVisible = props.setModalVisible;
  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Text style={styles.back_btn}>{"<-"}</Text>
              <Text style={styles.heading}>
                {props.EditTodoId !== null ? "Edit Todo" : "Add Todo"}
              </Text>
            </View>
            <Text style={styles.lable}>Lable</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter lable hetre.."
              onChangeText={(val) => props.setInput(val)}
              defaultValue={props.Input}
            />
            <Text style={styles.lable}>Select priority</Text>
            <View style={styles.priority_row}>
              <TouchableOpacity
                onPress={() => props.ChangePriority("high")}
                style={[
                  styles.priority,
                  styles.high,
                  {
                    borderColor: props.priority === "high" ? "#333" : "#fff",
                  },
                ]}
              >
                <Text style={styles.priority_text}>High</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.ChangePriority("medium")}
                style={[
                  styles.priority,
                  styles.medium,
                  {
                    borderColor: props.priority === "medium" ? "#333" : "#fff",
                  },
                ]}
              >
                <Text style={styles.priority_text}>Medium</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.ChangePriority("low")}
                style={[
                  styles.priority,
                  styles.low,
                  {
                    borderColor: props.priority === "low" ? "#333" : "#fff",
                  },
                ]}
              >
                <Text style={styles.priority_text}>Low</Text>
              </TouchableOpacity>
            </View>
            {props.EditTodoId !== null ? (
              <TouchableOpacity onPress={props.OnUpdate} style={styles.submit}>
                <Text style={styles.submit_text}>Update</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={props.OnSubmit} style={styles.submit}>
                <Text style={styles.submit_text}>Submit</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default AddToDo;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingVertical: 50,
  },
  modalView: {
    // margin: 20,
    width: "100%",
    marginTop: 25,
    // backgroundColor: "#ccc",
    // borderRadius: 20,
    // padding: 35,
    // alignItems: 'center',
  },
  // -------
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#f1f1f1",
    borderBottomWidth: 2,
    height: 40,
    paddingHorizontal: 20,
  },
  back_btn: {
    paddingRight: 10,
  },
  heading: {
    fontSize: 20,
  },
  lable: {
    fontSize: 18,
    color: "#000",
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 5,
  },
  input: {
    borderColor: "#f1f1f1",
    borderWidth: 1,
    height: 40,
    paddingLeft: 5,
  },
  priority_row: {
    flexDirection: "row",
  },
  priority: {
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 45,
    padding: 10,
    margin: 5,
    borderWidth: 2,
  },
  high: {
    backgroundColor: "#F7D7DA",
  },
  medium: {
    backgroundColor: "#FFF3CD",
  },
  low: {
    backgroundColor: "#D4EDDA",
  },

  submit: {
    backgroundColor: "#4285F4",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 40,
  },
  submit_text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});
