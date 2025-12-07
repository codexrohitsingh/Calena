import { View } from "react-native";
import GoalsCompleted from "../components/GoalsCompleted"; // path as per your project
export default function DashboardScreen() {
  // 🔹 This will later come from Google Sheets / API
  const goalsData = {
    today: {
      tasks: [
        // { id: "t1", title: "Signal & System assignment" },
        // { id: "t2", title: "PA assignment" },
      ],
      bills: [
        /*{ id: "b1", title: "Backlog Fee" }*/
      ],
    },
    week: {
      tasks: [
        // { id: "t3", title: "DE Assignment" },
        // { id: "t4", title: "Lab File Work" },
      ],
      bills: [
        /*{ id: "b2", title: "Hostel Charges" }*/
      ],
    },
    month: {
      tasks: [
        /*{ id: "t5", title: "Project Report" }*/
      ],
      bills: [
        /*{ id: "b3", title: "Internet Bill" }*/
      ],
    },
  };

  return (
    <View>
      {/* other dashboard components... */}

      <GoalsCompleted data={goalsData} />
    </View>
  );
}
