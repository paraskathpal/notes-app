import React, {useState} from 'react';
import { 
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import { DELETE_NOTE } from '../../redux/types';
import styles from './styles';
import { AddNote } from '..';
import { useDispatch } from 'react-redux';

const Note = ({ data, index }) => {
  const [showAddModal, toggleShowModal] = useState(false);
  const dispatch = useDispatch()

  const openAddModal = () => (
    <AddNote show={showAddModal} editText={data.text} editIndex={index} closeModal={toggleShowModal} />
  )
  
  return (
    <View style={styles.view}>
        <View>
            <Text style={styles.titleText}>
                Title of the note
            </Text>
            <Text style={styles.noteText}>
                { data.text }
            </Text>
            <Text style={styles.noteText}>
                Last updated: { new Date(data.updatedAt).toLocaleString('en-US') }
            </Text>
        </View>
        <View style={styles.iconsView}>
            <TouchableOpacity
                onPress={() => toggleShowModal(true)}
                style={styles.iconButton}
            >
              <Image
                style={styles.icon}
                source={require('../../assets/images/editIcon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>  dispatch({ type: DELETE_NOTE, id: data.id })}
                style={styles.iconButton}
            >
              <Image
                style={styles.icon}
                source={require('../../assets/images/deleteIcon.png')}
              />
            </TouchableOpacity>
        </View>
        {openAddModal()}
    </View>
  )
};

export default Note;