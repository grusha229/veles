import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { baseGap, basePadding } from '@/constants/Paddings';

interface SearchBarProps {
  search: string;
  setSearch: (text: string) => void;
  sorted: boolean;
  toggleSort: () => void;
}

export default function SearchBar({ search, setSearch, sorted, toggleSort }: SearchBarProps) {
  return (
    <View style={styles.header}>
      <TextInput
        placeholder="Поиск по названию"
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />
      <TouchableOpacity onPress={toggleSort} style={{ marginBottom: 10 }}>
        {sorted ? (
          <MaterialCommunityIcons name="sort-alphabetical-descending" size={24} color="black" />
        ) : (
          <MaterialCommunityIcons name="sort-alphabetical-ascending" size={24} color="black" />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 5,
    flex: 1,
  },
  header: {
    paddingHorizontal: basePadding,
    display: 'flex',
    flexDirection: 'row',
    gap: baseGap,
  },
});