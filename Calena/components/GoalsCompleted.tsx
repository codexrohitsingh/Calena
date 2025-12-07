import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

type GoalItem = {
  id: string;
  title: string;
};

type GoalsData = {
  today: {
    tasks: GoalItem[];
    bills: GoalItem[];
  };
  week: {
    tasks: GoalItem[];
    bills: GoalItem[];
  };
  month: {
    tasks: GoalItem[];
    bills: GoalItem[];
  };
};

type GoalsCompletedProps = {
  data: GoalsData;
};

export default function GoalsCompleted({ data }: GoalsCompletedProps) {
  const [activeTab, setActiveTab] = useState<"today" | "week" | "month">(
    "today"
  );

  const currentData = data[activeTab];
  const currentTasks = currentData.tasks;
  const currentBills = currentData.bills;

  return (
    <View style={styles.container}>
      {/* Header Title */}
      <Text style={styles.headerTitle}>Goals Completed</Text>

      {/* Tabs */}
      <View style={styles.tabsRow}>
        <Pressable
          onPress={() => setActiveTab("today")}
          style={[styles.tab, activeTab === "today" && styles.tabActive]}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "today" && styles.tabTextActive,
            ]}
          >
            Today
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setActiveTab("week")}
          style={[styles.tab, activeTab === "week" && styles.tabActive]}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "week" && styles.tabTextActive,
            ]}
          >
            Week
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setActiveTab("month")}
          style={[styles.tab, activeTab === "month" && styles.tabActive]}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "month" && styles.tabTextActive,
            ]}
          >
            Month
          </Text>
        </Pressable>
      </View>

      {/* Content Area */}
      <ScrollView style={styles.scrollArea}>
        {/* Tasks Section */}
        <Text style={styles.sectionTitle}>Tasks</Text>
        <View>
          {currentTasks.length === 0 ? (
            <View style={styles.emptyCard}>
              <Text style={styles.emptyText}>No tasks completed yet.</Text>
            </View>
          ) : (
            currentTasks.map((task) => (
              <View key={task.id} style={styles.itemCard}>
                <View style={styles.iconCircle}>
                  <Ionicons
                    name="checkmark"
                    size={18}
                    style={styles.iconTick}
                  />
                </View>
                <Text style={styles.itemText}>{task.title}</Text>
              </View>
            ))
          )}
        </View>

        {/* Bills Section */}
        <Text style={styles.sectionTitle}>Bills</Text>
        <View>
          {currentBills.length === 0 ? (
            <View style={styles.emptyCard}>
              <Text style={styles.emptyText}>No bills completed yet.</Text>
            </View>
          ) : (
            currentBills.map((bill) => (
              <View key={bill.id} style={styles.itemCard}>
                <View style={styles.iconCircle}>
                  <Ionicons
                    name="checkmark"
                    size={18}
                    style={styles.iconTick}
                  />
                </View>
                <Text style={styles.itemText}>{bill.title}</Text>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F3FF", // light purple background
    borderRadius: 24,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4C1D95",
    marginBottom: 12,
  },

  tabsRow: {
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 999,
    padding: 4,
    flexDirection: "row",
    marginBottom: 8,
  },

  tab: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },

  tabText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#6B7280",
  },

  tabActive: {
    backgroundColor: "#8B5CF6", // purple pill
  },

  tabTextActive: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  scrollArea: {
    marginTop: 8,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4C1D95",
    marginTop: 8,
    marginBottom: 6,
  },

  itemCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 999, // pill like in design
    marginBottom: 10,

    // shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    // elevation for Android
    elevation: 3,
  },

  iconCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#8B5CF6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  iconTick: {
    color: "#8B5CF6",
  },

  itemText: {
    flex: 1,
    fontSize: 14,
    color: "#111827",
    flexWrap: "wrap",
  },

  emptyCard: {
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginBottom: 10,
  },

  emptyText: {
    fontSize: 13,
    color: "#6B7280",
  },
});
