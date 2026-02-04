import { BottomBar, TabBarIcon } from "@/shared/components";
import { Tabs } from "expo-router";
import React from "react";
import { useTheme } from "react-native-paper";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      tabBar={(props) => <BottomBar {...props} centerRoute="new-recipe" />}
      screenOptions={{
        headerStyle: { backgroundColor: "transparent" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          headerTitleStyle: { color: theme.colors.primary },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "calendar" : "calendar-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="pantry"
        options={{
          title: "Despensa",
          headerShown: false,
          headerTitleStyle: { color: theme.colors.primary },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "restaurant" : "restaurant-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="new-recipe"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="add" color={color} />,
        }}
      />
      <Tabs.Screen
        name="shopping"
        options={{
          title: "Compras",
          headerShown: false,
          headerTitleStyle: { color: theme.colors.primary },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "cart" : "cart-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="recipes"
        options={{
          title: "Receitas",
          headerShown: false,
          headerTitleStyle: { color: theme.colors.primary },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "book" : "book-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          title: "Configurações",
          headerTitleStyle: { color: theme.colors.primary },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "settings" : "settings-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
