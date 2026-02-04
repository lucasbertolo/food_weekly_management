import { Typography } from "@/shared/components";
import { StyleSheet, View } from "react-native";

export const ShoppingListView = () => {
  return (
    <View style={styles.container}>
      <Typography variant="heading">Lista de Compras</Typography>
      <Typography variant="body" style={styles.subtitle}>
        Ingredientes necessários para a semana (em breve)
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
