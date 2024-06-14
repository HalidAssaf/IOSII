import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, Dimensions } from 'react-native';
import { Searchbar, Card } from 'react-native-paper';
import firebase from '@react-native-firebase/app';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const Search = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    const userId = currentUser.uid;
    firebase
      .database()
      .ref(`users/${userId}`)
      .on('value', (snapshot) => {
        const dataArray = [];
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          dataArray.push(childData);
        });
        setData(dataArray);
      });
  }, []);

  const renderDataItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.Text1}>Age: {item.age}</Text>
        <Text style={styles.Text1}>Calories: {item.calories}</Text>
      </Card.Content>
    </Card>
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredData = data.filter((item) => {
  return (
    item.age?.toString().includes(searchQuery.toLowerCase()) ||
    item.calories?.toString().includes(searchQuery.toLowerCase())
  );
});

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        value={searchQuery}
        onChangeText={handleSearch}
        style={styles.searchBar}
      />
      {filteredData.length > 0 ?(
        <FlatList
          data={filteredData}
          renderItem={renderDataItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No data found</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    margin: 10,
  },
  card: {
    margin: 5,
    backgroundColor: '#007AFF',
  },
  Text1: {
    color: '#fff',
    fontSize: 15,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: '#999',
    fontSize: 18,
  },
});

export default Search;
