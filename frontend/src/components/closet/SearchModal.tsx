import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';

import { Tag } from './searchTag'
import { COLORS, FONTSIZE } from '../../shared/styles/STYLES'

interface SearchModalProps {
  visible: boolean;
  onClose: () => void;
}

const TagItem: React.FC<{ tag: any }> = ({ tag }) => {
  const [clicked, setClicked] = useState(false);

  const addTag = () => {
    setClicked(!clicked); // 클릭된 상태를 토글합니다.
  }

  return (
    <View style={styles.tagTitle}>
      <Pressable onPress={addTag} style={[styles.tagItem, clicked ? styles.tagItemClicked : null]}>
        <Text style={styles.tagText}>{tag.name}</Text>
      </Pressable>
    </View>
  )
}

const TagList: React.FC = () => {
  return (
    <View style={styles.tagContainer}>
      {Tag.map((tag) => (
          <TagItem key={tag.id} tag={tag} />
      ))}
    </View>
  );
};

const SearchModal: React.FC<SearchModalProps> = ({ visible, onClose }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // 여기에 modal값을 검색로직으로 넘겨야한다.
          // Alert.alert('모달이 닫혔습니다.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalText}>검색</Text>
              <Pressable
                style={[styles.button]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>🔍</Text>
              </Pressable>
            </View>
            <TagList />
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>🔍</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalView: {
    marginTop: 20,
    backgroundColor: COLORS.White,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    borderBottomColor: COLORS.Black,
    borderBottomWidth: 1,
  },
  modalHeader: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: COLORS.White,
    borderColor: COLORS.Black,
    borderWidth: 1,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: FONTSIZE.Medium,
    fontWeight: "bold",
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-around',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  tagItem: {
    backgroundColor: COLORS.White,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagItemClicked: {
    backgroundColor: COLORS.CarrotRed,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagTitle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-around',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  tagText: {
    fontSize: FONTSIZE.ExtraSmall,
    padding: 5,
    // borderRadius: 10,
  }
});

export default SearchModal;