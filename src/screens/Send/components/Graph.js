import React from 'react';
import {
  Dimensions,
  StyleSheet,
} from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import Colors from 'styles/Colors';

const { width: screenWidth } = Dimensions.get('window');

const Graph = ({transactions, address}) => {
  const sentTransactions= transactions.filter(item => item.fromAddress === address);
  console.log('sent', sentTransactions);
  const labels = sentTransactions.map(item => item.toAddress);
  const dataSet = sentTransactions.map(item => Number(item.amount));

  const data = {
    labels: labels,
    datasets: [
      {
        data: dataSet,
      }
    ]
  };

  const chartConfig = {
    backgroundGradientFrom: '#Ffffff',
    backgroundGradientTo: '#ffffff',
    barPercentage: 1.3,
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
  
    style: {
      borderRadius: 16,
      fontFamily: 'Arial',
    },
    propsForBackgroundLines: {
      strokeWidth: 1,
      stroke: '#efefef',
      strokeDasharray: '0',
    },
    propsForLabels: {
      fontFamily: 'Arial',
    },
  };

  return (
    <BarChart
      style={styles.graphStyle}
      showBarTops={false}
      showValuesOnTopOfBars={true}
      withInnerLines={true}
      segments={3}
      data={data}
      width={screenWidth - 15}
      height={175}
      yAxisLabel="J$"
      chartConfig={chartConfig}
      verticalLabelRotation={0}
    />
  );
};

const styles = StyleSheet.create({
  graphStyle: {
    flex: 1,
    paddingRight: 25,
  },
});

export default Graph;
