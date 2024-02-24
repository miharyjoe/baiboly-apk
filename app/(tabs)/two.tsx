import { StyleSheet } from "react-native";

import genesisy from "../../assets/Testameta taloha/eksodosy.json";
import { BibleChapter } from "@/components/BibleChapter";

export default function TabTwoScreen() {
  return <BibleChapter data={genesisy} />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
