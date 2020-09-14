import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import CustomButton from "./src/components/button/custom-button.component";
import ColorBox from "./src/components/color-box/color-box.component";

export default function App() {
  const [colorYellow, setColorYellow] = useState("transparent");
  const [colorYellowSwitch, setColorYellowSwitch] = useState(false);
  const [colorRed, setColorRed] = useState("transparent");
  const [colorRedSwitch, setColorRedSwitch] = useState(false);
  const [colorBlue, setColorBlue] = useState("transparent");
  const [colorBlueSwitch, setColorBlueSwitch] = useState(false);
  const [colorGreen, setColorGreen] = useState("transparent");
  const [colorGreenSwitch, setColorGreenSwitch] = useState(false);

  const yellowButtonClick = (colorYellow) => {
    if (colorYellowSwitch === false) {
      setColorYellow(colorYellow), setColorYellowSwitch(!colorYellowSwitch);
    } else {
      setColorYellow("transparent"), setColorYellowSwitch(!colorYellowSwitch);
    }
  };

  const redButtonClick = (colorRed) => {
    if (colorRedSwitch === false) {
      setColorRed(colorRed), setColorRedSwitch(!colorRedSwitch);
    } else {
      setColorRed("transparent"), setColorRedSwitch(!colorRedSwitch);
    }
  };

  const blueButtonClick = (colorBlue) => {
    if (colorBlueSwitch === false) {
      setColorBlue(colorBlue), setColorBlueSwitch(!colorBlueSwitch);
    } else {
      setColorBlue("transparent"), setColorBlueSwitch(!colorBlueSwitch);
    }
  };

  const greenButtonClick = (colorGreen) => {
    if (colorGreenSwitch === false) {
      setColorGreen(colorGreen), setColorGreenSwitch(!colorGreenSwitch);
    } else {
      setColorGreen("transparent"), setColorGreenSwitch(!colorGreenSwitch);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <CustomButton
          title="Yellow"
          onPress={() => yellowButtonClick("yellow")}
        />
        <CustomButton title="Red" onPress={() => redButtonClick("red")} />
        <CustomButton title="Blue" onPress={() => blueButtonClick("blue")} />
        <CustomButton title="Green" onPress={() => greenButtonClick("green")} />
      </View>
      <View style={styles.boxesContainer}>
        <ColorBox color={colorYellow} />
        <ColorBox color={colorRed} />
        <ColorBox color={colorBlue} />
        <ColorBox color={colorGreen} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flex: 3,
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#cceeff",
  },
  boxesContainer: {
    flex: 3,
    flexDirection: "column",
    height: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffd4f3",
  },
});
