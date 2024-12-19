import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-chart-kit';
import {hp, wp} from '@enums';
import {Spacer} from '@common/spacer';

const data = {
  labels: [
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
    '2029',
    '2030',
  ],
  datasets: [
    {
      data: [20, 2, 2, 1, 2, 2, 2, 3, 4], // Only value for 2022 is non-zero
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: 'transparent',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: 'transparent',
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  labelColor: (opacity = 1) => `rgba(86, 86, 86, ${opacity})`,
  propsForBackgroundLines: {
    strokeDasharray: '', // Remove dotted background lines
  },
};

export const Barchart = () => {
  return (
    <View style={styles.container}>
      <Text>Repayment Amount</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 25, color: '#282460'}}>61,500</Text>
        <Text style={{fontSize: 13, color: '#282460'}}>5000/month</Text>
      </View>
      <Spacer height={hp(2)} />
      <BarChart
        style={styles.graphStyle}
        data={data}
        width={wp(90)}
        height={hp(25)}
        chartConfig={chartConfig}
        verticalLabelRotation={0} // Make the labels straight
        yAxisSuffix="k" // Append 'k' at the end of the labels
        showBarTops={false} // Hide tops of bars
        withInnerLines={false} // Disable grid lines within the chart
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  graphStyle: {
    backgroundColor: 'transparent',
  },
});
