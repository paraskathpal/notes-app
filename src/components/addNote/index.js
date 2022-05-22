import React from 'react';
import { useState, useEffect } from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';
import Modal from "react-native-modal";
import styles from './styles';
import { addNote } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const AddNote = ({ show, closeModal, editText= "", editIndex = -1 }) => {
  const [text, setText] = useState();
  const [showModal, setShowModal] = useState(show);
  const dispatch = useDispatch()
  const allNotes = useSelector((state) => state.state.notes)
  const [notes, setNotes] = useState(allNotes);

  useEffect(() => {
    if (editText !== "") {
      setText(editText)
    }
  }, [])

  useEffect(() => {
    setShowModal(show)
  }, [show]);

  useEffect(() => {
    setNotes(allNotes)
  }, [allNotes]);

  const saveNote = () => {
    const newNote = {
      text: text,
      updatedAt: new Date(),
      id: Math.random().toString(36).substr(2, 9)
    }
    if (editIndex < 0) {
      const updatedNotes = notes && notes.length ? [...notes, newNote ] : [ newNote ];
      dispatch({  
        type: "ADD_NOTE",
        payload: updatedNotes
      })
    } else {
      dispatch({  
        type: "EDIT_NOTE",
        payload: {
          note: newNote,
          index: editIndex
        }
      });
    }
    setText("");
    setShowModal(false)
    closeModal()
  }

  return (
    <Modal 
      isVisible={showModal}
      backdropOpacity={1}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Add new note
          </Text><TouchableOpacity onPress={() => closeModal(false)}>
            <Text style={styles.closeIcon}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <TextInput
            multiline={true}
            numberOfLines={6}
            onChangeText={(text) => setText(text)}
            value={text}
          />
        </View>
        <View style={styles.saveButton}>
          <Button title={'save'} onPress={() => saveNote()}/>
        </View>
      </View>
    </Modal>
  );
};

export default AddNote;