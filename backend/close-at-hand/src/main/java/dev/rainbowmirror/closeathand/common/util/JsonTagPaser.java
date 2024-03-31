package dev.rainbowmirror.closeathand.common.util;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagGroup;

import java.util.ArrayList;
import java.util.List;

public class JsonTagPaser {

    public static List<ClothesTagGroup> parse(String responseBody, Clothes clothes){
        List<ClothesTagGroup> result = new ArrayList<>();
        // 받아온 정보들을 파싱해서 여기에 넣기
        JsonParser jsonParser = new JsonParser();
        JsonObject jsonObject = (JsonObject) jsonParser.parse(responseBody);
        JsonArray matchedObjectsArray = (JsonArray) jsonObject.get("matchedObjects");

        for (int i = 0; i < matchedObjectsArray.size(); i++) { // matchedObjects가 여러 개 일 경우를 대비
            JsonObject matchedObject = (JsonObject) matchedObjectsArray.get(i);
            JsonElement typeElement = matchedObject.get("type");
            JsonArray tagsArray = (JsonArray) matchedObject.get("tags");

            for (int j = 0; j < tagsArray.size(); j++) {
                JsonObject tagsObject = (JsonObject) tagsArray.get(j);
                System.out.println("tot"+tagsObject);
                // 넣을목록(소재, 색, 분류,
                JsonArray colorArray = (JsonArray) tagsObject.get("colors");
                JsonArray textureArray = (JsonArray) tagsObject.get("textures");
                JsonArray lookArray = (JsonArray) tagsObject.get("looks"); // clothing에만 있음
                JsonArray printArray = (JsonArray) tagsObject.get("prints");

                JsonObject categoryObject = (JsonObject) tagsObject.get("category");
                if (categoryObject!=null) {
                    JsonArray categoryArray = new JsonArray();
                    categoryArray.add(categoryObject);
                    System.out.println(categoryArray);
                    // taggroup build해
                    // mapping 되고있어서 안넣어도 옷이 들어감
                    ClothesTagGroup category = ClothesTagGroup.builder()
                            .clothesTagGroupName("category")
                            .clothes(clothes)
                            .build();
                    // 아까 넘긴 메서드를 실행
                    category.maketag(categoryArray, "category");
                    System.out.println(category.getClothesTagList());
                    // 빌드된걸 this.태그그룹리스트에 add
                    result.add(category);
                }

                JsonObject itemObject = (JsonObject) tagsObject.get("item");
                if (itemObject!=null) {
                    JsonArray itemArray = new JsonArray();
                    itemArray.add(itemObject);
                    ClothesTagGroup item = ClothesTagGroup.builder()
                            .clothesTagGroupName("item")
                            .clothes(clothes)
                            .build();
                    item.maketag(itemArray, "item");
                    result.add(item);
                }

                JsonObject shoeObject = (JsonObject) tagsObject.get("toetype"); // shoes에만 있음
                if (shoeObject!=null) {
                    JsonArray shoeArray = new JsonArray();
                    shoeArray.add(itemObject);
                    ClothesTagGroup toetype = ClothesTagGroup.builder()
                            .clothesTagGroupName("toetype")
                            .clothes(clothes)
                            .build();
                    toetype.maketag(shoeArray, "toetype");
                    result.add(toetype);
                }


                // jsonArray
                if (colorArray!=null) {
                    ClothesTagGroup colors = ClothesTagGroup.builder()
                            .clothesTagGroupName("colors")
                            .clothes(clothes)
                            .build();
                    colors.maketag(colorArray,"colors");
                    result.add(colors);
                }
                if (textureArray!=null) {
                    ClothesTagGroup textures = ClothesTagGroup.builder()
                            .clothesTagGroupName("textures")
                            .clothes(clothes)
                            .build();
                    textures.maketag(textureArray,"textures");
                    result.add(textures);

                }
                if (lookArray!=null) {
                    ClothesTagGroup looks = ClothesTagGroup.builder()
                            .clothesTagGroupName("looks")
                            .clothes(clothes)
                            .build();
                    looks.maketag(lookArray,"looks");
                    result.add(looks);

                }
                if (printArray!=null) {
                    ClothesTagGroup prints = ClothesTagGroup.builder()
                            .clothesTagGroupName("prints")
                            .clothes(clothes)
                            .build();
                    prints.maketag(printArray,"prints");
                    result.add(prints);

                }
            }
        }
        return result;
    }
}
