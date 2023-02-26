import React, { useState } from "react";
import { Switch } from "@react-native-material/core";
import { Text, View } from 'react-native';
import ProgressCircle from '@ecancan/react-native-progress-circle'

import { styles } from './styles/main.js';

export default function App() {
  const [checked, setChecked] = useState(true);
  return (
      <View style={styles.mainView}>
          <Text style={styles.title}>You are on Solar Power</Text>
          <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
            size={220}
            style={styles.progressCircle}
          >
            <Text style={{ fontSize: 28 }}>{'30%'}</Text>
          </ProgressCircle>
          <Switch value={checked} onValueChange={() => setChecked(!checked)} style={styles.switch}/>
      </View>
  );
}
