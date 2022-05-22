import React, { useState, useEffect } from 'react';
import { 
    View,
    StyleSheet,
    Text,
    TextInput,
    FlatList,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import { Note, AddNote } from '../../components';
import { addNote } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../redux/types';


const HomeScreen = ({navigation}) => {
    const notes= useSelector((store) => store.state.notes)
    const isLoggedIn = useSelector((store) => store.state.isLoggedIn)
    const [allNotes, setNotes] =  useState(notes);
    const [showAddModal, toggleShowModal] = useState(false);
    const [filterText, setFilterText ] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
      if (!isLoggedIn) navigation.push("Login")
    }, [isLoggedIn])

    useEffect(() => {
      if (filterText !== "") {
        const filteredNotes = notes.filter(note => note.text.toLowerCase().includes(filterText.toLowerCase()))
      setNotes(filteredNotes)
      } else {
        setNotes(notes)
      }
    }, [notes, filterText]);

    const renderItem = ({ item, index }) => (
      <Note data={item} index={index}/>
    );

    const openAddModal = () => (
      <AddNote show={showAddModal} closeModal={toggleShowModal} />
    )

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.notesHeader}>Notes</Text>
          <TouchableOpacity style={styles.notesHeader} onPress={() => dispatch({ type: LOGOUT })}><Text>Logout</Text></TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <TextInput 
            placeholder=" Search"  
            onChangeText={(text) => setFilterText(text)}
            value={filterText}
          />
        </View>
        <View style={styles.divider}></View>
        <View>
          <FlatList
            data={allNotes}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <TouchableOpacity style={styles.addButton} onPress={() => toggleShowModal(true)}>
          <Text style={styles.addIcon}>+</Text>
        </TouchableOpacity>
        {openAddModal()}
      </SafeAreaView>
    );
};

export default HomeScreen;