import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  add_btn: {
    position: "absolute",
    bottom: 40,
    right: 20,
    backgroundColor: "#4285F4",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  add_btn_text: {
    fontSize: 25,
    color: "#fff",
  },
});

export default styles;
