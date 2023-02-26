import React, { useState, useEffect } from "react";
import { Switch } from "@react-native-material/core";
import { Text, View } from 'react-native';
import ProgressCircle from '@ecancan/react-native-progress-circle'
import axios from "axios";
import { styles } from './styles/main.js';

export default function App() {
  const [checked, setChecked] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:5001/getInformation/2');
      setData(result.data);
      console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [])

  return (
      <View style={styles.mainView}>
          <Text style={styles.title}>You are on Solar Power</Text>
          <ProgressCircle
            percent={data.battery_percentage}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
            size={220}
            style={styles.progressCircle}
          >
            <Text style={{ fontSize: 28 }}>{data.battery_percentage}%</Text>
          </ProgressCircle>
          <Switch value={checked} onValueChange={() => setChecked(!checked)} style={styles.switch}/>
      </View>
  );
}
