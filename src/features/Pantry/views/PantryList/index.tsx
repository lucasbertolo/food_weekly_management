import { Typography } from "@/shared/components";
import { StyleSheet, View } from "react-native";

export const PantryList = () => {
  return (
    <View style={styles.container}>
      <Typography variant="heading">Despensa</Typography>
      <Typography variant="body" style={styles.subtitle}>
        Gestão de alimentos em casa (em breve)
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  subtitle: {
    marginTop: 8,
    opacity: 0.7,
  },
});
