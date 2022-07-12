import React, {useCallback, useMemo} from 'react';
import {FlashList} from '@shopify/flash-list';
import {Text, View} from 'react-native';

const ITEMS_COUNT = 500;
const ITEM_HEIGHT = 50;

const ListItem = ({index}) => {
  return (
    <View style={{height: ITEM_HEIGHT, backgroundColor: index % 2 === 0 ? '#fff' : '#00000001'}}>
      <Text>{index}</Text>
    </View>
  );
};

const App = () => {
  const items = useMemo(() => {
    return new Array(ITEMS_COUNT).fill(null);
  }, []);

  const renderItem = useCallback(({index}) => <ListItem {...{index}} />, []);

  return (
    <FlashList data={items} estimatedItemSize={ITEM_HEIGHT} {...{renderItem}} />
  );
};

export default App;
