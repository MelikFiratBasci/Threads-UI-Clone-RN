import * as React from "react";
import {
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import Lottie from "lottie-react-native";
import { ThreadContext } from "../../context/thread-context";
import ThreadItem from "../../components/threadsItem";

export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null);
  const threads = React.useContext(ThreadContext);

  React.useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingTop: Platform.select({ android: 30 }),
          paddingHorizontal: 10,
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            tintColor={"transparent"}
            onRefresh={() => animationRef.current?.play()}
          />
        }
      >
        <ScrollView style={{ alignSelf: "center" }}>
          <Lottie
            ref={animationRef}
            source={require("../../lottie-animations/threadsIcon.json")}
            style={{
              width: 40,
              height: 40,
              alignSelf: "auto",
            }}
            loop={false}
            onAnimationFinish={() => animationRef.current?.pause()}
          />
        </ScrollView>
        {threads.map((thread) => (
          <ThreadItem key={thread.id} {...thread} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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