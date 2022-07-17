import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Dimensions } from 'react-native';

const ScrollPicker = (props) => {
  const [selectedIndex, setselectedIndex] = useState(props.selectedIndex || 0);
  const [onScroll, setOnScroll] = useState(false);
  const [scrollViewRef, setScrollViewRef] = useState(null);
  const wrapperHeight = props.wrapperHeight || 300;
  const wrapperWidth = props.wrapperWidth || Dimensions.get('window').width;
  const itemHeight = props.itemHeight || 40;
  const highlightColor = props.highlightColor || 'gray';
  const data = props.data || [];
  const marginInterval = (wrapperHeight - itemHeight) / 2;
  const whiteSpace = <View style={{ height: marginInterval, flex: 1 }} />;
  let onDrag = false;

  useEffect(() => {
    if (scrollViewRef) {
      scrollViewRef.scrollTo({ y: selectedIndex * itemHeight });
    }
  }, [scrollViewRef]);

  let hightLigntStyle = {
    top: (wrapperHeight - itemHeight) / 2,
    position: 'absolute',
    width: wrapperWidth,
    backgroundColor: highlightColor,
    opacity: 0.5,
    height: itemHeight,
  };

  let itemStyle = {
    color: 'black',
    height: 40,
    width: wrapperWidth,
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    // borderWidth: StyleSheet.hairlineWidth,
  };

  const scrollFix = (currentY) => {
    if (!onScroll && !onDrag) {
      return;
    }
    setOnScroll(false);
    const findIndex = Math.round(currentY / itemHeight);
    setselectedIndex(findIndex);
    scrollViewRef.scrollTo({ y: itemHeight * findIndex });
    if (props.onSelect) {
      props.onSelect(findIndex);
    }
  };

  return (
    <View>
      <ScrollView
        ref={(ref) => {
          setScrollViewRef(ref);
        }}
        showsVerticalScrollIndicator={false}
        onScrollBeginDrag={() => (onDrag = true)}
        onScrollEndDrag={() => (onDrag = false)}
        decelerationRate={0.9}
        onMomentumScrollBegin={() => setOnScroll(true)}
        onMomentumScrollEnd={({ nativeEvent }) => {
          scrollFix(nativeEvent.contentOffset.y);
        }}
      >
        {whiteSpace}
        {data.map((count) => {
          return (
            <Text key={count} style={itemStyle}>
              {count}
            </Text>
          );
        })}
        {whiteSpace}
      </ScrollView>
      <View style={hightLigntStyle} />
    </View>
  );
};
export default ScrollPicker;
