import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, StatusBar, NativeModules, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const getBaseUrl = (port) => {
  const explicitHost = process.env.EXPO_PUBLIC_API_HOST;
  if (explicitHost) return `http://${explicitHost}:${port}`;

  const scriptURL = NativeModules.SourceCode?.scriptURL ?? '';
  const match = scriptURL.match(/^(?:https?:\/\/|exp:\/\/)([^/:]+)/);
  const host = match?.[1] || 'localhost';
  const resolvedHost = host === 'localhost' && Platform.OS === 'android' ? '10.0.2.2' : host;
  return `http://${resolvedHost}:${port}`;
};

const BASE_URL = getBaseUrl(4004);

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/products`);
        if (!res.ok) throw new Error('Network response was not ok');
        const json = await res.json();
        setProducts(json);
      } catch (err) {
        console.error(err);
        setError('Could not load products');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.product_name}</Text>
      <Text style={styles.subtitle}>Price: Rs. {item.price}</Text>
      <Text style={styles.subtitle}>Stock: {item.stock}</Text>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.header}>Products</Text>
        <Text style={styles.status}>Using {BASE_URL}</Text>
        {loading && <Text style={styles.status}>Loading...</Text>}
        {error ? <Text style={[styles.status, styles.error]}>{error}</Text> : null}
        {!loading && !error && (
          <FlatList
            data={products}
            keyExtractor={(_item, index) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 12,
    marginBottom: 8,
  },
  status: {
    fontSize: 16,
    marginVertical: 4,
  },
  error: {
    color: '#b91c1c',
  },
  list: {
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    elevation: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    color: '#374151',
  },
});
