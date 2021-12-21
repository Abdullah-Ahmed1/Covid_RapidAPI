import React, { Component } from "react";
import {
  ActivityIndicator,
  Button,
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [isLoading, setLoading] = React.useState(true);
  const [dataSource, setDataSource] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://covid-19-data.p.rapidapi.com/country/code?code=it", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "7333042294mshccf262fd41bdb78p1daf5ajsn155b40f9549c",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
        setDataSource(responseJson);
        console.log("data", responseJson);
      })
      .catch((error) => {
        console.error(error);
      });

    fetch("https://world-population.p.rapidapi.com/worldpopulation", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "world-population.p.rapidapi.com",
        "x-rapidapi-key": "7333042294mshccf262fd41bdb78p1daf5ajsn155b40f9549c",
      },
    })
      .then((response) => response.json())
      .then((responseJson1) => {
        setLoading(false);
        setDataSource(responseJson1);
        console.log("data1", responseJson1.body);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading Data from JSON Placeholder API ...</Text>
      </View>
    );
  }

  return (
    <View style={{ paddingTop: 30 }}>
      {/* <FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.5}>
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                borderBottomWidth: 1,
                borderColor: "grey",
              }}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={{ uri: item.thumbnailUrl }}
              />
              <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                <Text>
                  {item.id}: {item.title}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      /> */}
    </View>
  );
}
