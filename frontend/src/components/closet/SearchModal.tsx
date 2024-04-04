import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// 컴포넌트
import { COLORS, FONTSIZE } from '../../shared/styles/STYLES';
// axios
import { API } from "../../shared";

interface ClothesTag {
  clothesTagName: string;
}

interface ClothesTagGroup {
  clothesTagGroupName: string;
  clothesTagList: ClothesTag[];
}

interface SearchModalProps {
  onClose: () => void;
  // 클릭된 태그 정보를 상위 컴포넌트로 전달하기 위한 콜백 함수
  onTagsSelected: (tags: string[]) => void; 
};

const TagItem: React.FC<{ tag: ClothesTag; onClick: (name: string) => void }> = ({ tag, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const addTag = () => {
    setClicked(!clicked);
    onClick(tag.clothesTagName);
  };

  return (
    <View style={styles.tagTitle}>
      <Pressable onPress={addTag} style={[styles.tagItem, clicked ? styles.tagItemClicked : null]}>
        <Text style={styles.tagText}>{tag.clothesTagName}</Text>
      </Pressable>
    </View>
  );
};

const TagList: React.FC<{ onTagsSelected: (tags: string[]) => void }> = ({ onTagsSelected }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tagName: string) => {
    if (selectedTags.includes(tagName)) {
      setSelectedTags(selectedTags.filter((name) => name !== tagName));
    } else {
      setSelectedTags([...selectedTags, tagName]);
    }
  };

  // 클릭된 태그 ID 정보를 전달
  useEffect(() => {
    const fetchTagList = async () => {
      try {
        const response = await API.get('clothes/tag');
        const tagData = response.data.data;
        // 태그 데이터를 묶어서 태그 그룹 리스트로 구성
        const clothesTagGroups: ClothesTagGroup[] = [];
        for (const key in tagData) {
          const group: ClothesTagGroup = {
            clothesTagGroupName: key,
            clothesTagList: tagData[key].map((tagName: string) => ({ clothesTagName: tagName })),
          };
          clothesTagGroups.push(group);
        }
        setClothesTagGroups(clothesTagGroups);
      } catch (error) {
        console.error('태그 목록을 불러오는데 문제가 발생했습니다:', error);
      }
    };

    fetchTagList();
  }, []);

  const [clothesTagGroups, setClothesTagGroups] = useState<ClothesTagGroup[]>([]);

  useEffect(() => {
    const selectedTagNames: string[] = []; // 선택된 태그 이름의 배열로 수정
    clothesTagGroups.forEach((group) => {
      group.clothesTagList.forEach((tag) => {
        if (selectedTags.includes(tag.clothesTagName)) {
          selectedTagNames.push(tag.clothesTagName);
        }
      });
    });
    onTagsSelected(selectedTagNames);
  }, [selectedTags]);


  return (
    <ScrollView>
      <View style={styles.tagContainer}>
        {clothesTagGroups.map((group) => (
          <View key={group.clothesTagGroupName}>
            <Text style={styles.tagGroupTitle}>{group.clothesTagGroupName}</Text>
            <ScrollView horizontal={true} style={styles.tagGroupContainer}>
            {group.clothesTagList.map((tag) => (
              <TagItem key={tag.clothesTagName} tag={tag} onClick={handleTagClick} />
            ))}
          </ScrollView>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const SearchModal: React.FC<SearchModalProps> = ({ onTagsSelected }) => {
  // 모달상태
  const [modalVisible, setModalVisible] = useState(false);
   // 선택된 태그 상태 추가
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // 모달이 열릴 때 이전 선택 태그 복원
  useEffect(() => {
    const getSelectedTags = async () => {
      try {
        const storedTags = await AsyncStorage.getItem('selectedTags');
        if (storedTags !== null) {
          setSelectedTags(JSON.parse(storedTags));
        }
      } catch (error) {
        console.error('태그 가져오는데 문제가 생겼어!:', error);
      }
    };

    if (modalVisible) {
      getSelectedTags();
    }
  }, [modalVisible]);

  // 모달이 닫힐 때 선택된 태그 저장
  useEffect(() => {
    const saveSelectedTags = async () => {
      try {
        await AsyncStorage.setItem('selectedTags', JSON.stringify(selectedTags));
      } catch (error) {
        console.error('태그 저장하는데 문제가 생겼어!:', error);
      }
    };

    if (!modalVisible) {
      saveSelectedTags();
    }
  }, [modalVisible, selectedTags]);

  return (
    <View>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}>
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
            <TagList onTagsSelected={onTagsSelected} />
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
  modalHeader: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
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
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: FONTSIZE.Medium,
    fontWeight: "bold",
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
  tagContainer: {
    marginHorizontal: 15,
    marginBottom: 20, // 아래 여백 추가
  },
  tagGroupTitle: {
    fontSize: FONTSIZE.Large,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  tagGroupContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap', // 수정: 한 줄에 모든 태그를 표시하고, 넘치는 경우 가로 스크롤 제공
    overflow: 'scroll', // 넘치는 경우 스크롤 표시
  },
  tagItem: {
    backgroundColor: COLORS.White,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.Black,
    borderWidth: 1,
    marginTop: 5,
    marginRight: 5,
  },
  tagTitle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-around',
    alignItems: 'center',
  },
  tagItemClicked: {
    backgroundColor: COLORS.SkyBlue,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagText: {
    fontSize: FONTSIZE.ExtraSmall,
    padding: 5,
  },
});

export default SearchModal;