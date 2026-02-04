import { Typography } from "@/shared/components";
import { StyleSheet, View } from "react-native";

export const Calendar = () => {
  return (
    <View style={styles.container}>
      <Typography variant="heading">Planejamento Semanal</Typography>
      <Typography variant="body" style={styles.subtitle}>
        Calendário de refeições planejadas (em breve)
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
