import { useState } from "react"; // ADDED: for the points state
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity, // ADDED: for the + button
    View,
} from "react-native";

export default function App() {
  // ADDED: State to make points interactive
  const [points, setPoints] = useState(0);

  return (
    <View style={styles.container}>

      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      
      <View style={styles.profileSection}>

        <View style={styles.profileContainer}>
          <Image
            source={require("./assets/profile.png")}
            style={styles.profileImage}
          />

          <View style={styles.checkContainer}>
            <Text style={styles.check}>✓</Text>
          </View>
        </View>

        <View style={styles.line} />

        
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Maneesha</Text>

        
        <Text style={styles.label}>Email</Text>

        <View style={styles.row}>
          <Text style={styles.icon}>✉</Text>
          <Text style={styles.value}>Maneesha@gmail.com</Text>
        </View>

        
        <Text style={styles.label}>Points</Text>

        <View style={styles.row}>
          <Text style={styles.star}>★</Text>
          {/* CHANGED: Replaced 0 with {points} */}
          <Text style={styles.value}>{points}</Text>
        </View>

      </View>

      {/* ADDED: Floating Action Button (FAB) to add points */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setPoints((prev) => prev + 1)}
        activeOpacity={0.7}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },

  header: {
    height: 70,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  profileSection: {
    padding: 20,
  },

  profileContainer: {
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#dddddd",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  checkContainer: {
    position: "absolute",
    right: -2,
    bottom: 2,
    backgroundColor: "limegreen",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  check: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },

  line: {
    height: 1,
    backgroundColor: "black",
    marginTop: 5,
    marginBottom: 10,
  },

  label: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 3,
  },

  value: {
    fontSize: 14,
    color: "#333",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  icon: {
    fontSize: 16,
    marginRight: 6,
  },

  star: {
    fontSize: 18,
    marginRight: 7,
  },

  // ADDED: Styles for the Floating Action Button (FAB)
  fab: {
    position: "absolute",
    right: 25,
    bottom: 35,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  fabText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: -2,
  },
});