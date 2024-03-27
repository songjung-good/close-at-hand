package dev.rainbowmirror.closeathand.domain.clothes;

import com.google.common.collect.Lists;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import dev.rainbowmirror.closeathand.common.AbstractEntity;
import dev.rainbowmirror.closeathand.common.util.TokenGenrator;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTag.ClothesTag;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagGroup;
import dev.rainbowmirror.closeathand.domain.preset.Preset;
import dev.rainbowmirror.closeathand.domain.user.User;
import jakarta.persistence.*;
import kong.unirest.HttpResponse;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;

import java.time.ZonedDateTime;
import java.util.*;

// entity
@Slf4j
@Getter
@Entity
@NoArgsConstructor
@ToString
@Table(name = "clothes")
public class Clothes extends AbstractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long clothesId;
    private String clothesImgUrl;
    private String detection;
    private ZonedDateTime lastWashDate;
    private Integer price;

    @Column(nullable = false, unique = true)
    private String clothesToken;

    @Enumerated(EnumType.STRING)
    private Clothes.Status status;

    @Enumerated(EnumType.STRING)
    private Clothes.Location location;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany(mappedBy = "clothes")
    private Set<Preset> presets = new HashSet<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "clothes", cascade = CascadeType.PERSIST)
    private List<ClothesTagGroup> clothesTagGroupList = Lists.newArrayList();

    @Getter
    @RequiredArgsConstructor
    public enum Location {
        ENABLE("옷장"), DISABLE("세탁 바구니");


        private final String description;
    }

    public void enable(){ this.location = Location.ENABLE; }
    public void disable(){ this.location = Location.DISABLE; }

    @Getter
    @RequiredArgsConstructor
    public enum Status { // status: api에서 정보를 받아왔는지 여부 표시
        AIDONE( "정보저장완료"), BASIC("정보필요");

        private final String description;
    }

    public void aidone() {
        this.status = Clothes.Status.AIDONE;
    }

    @Builder
    public Clothes(String clothesImgUrl, User user, String userToken,
                   String clothesToken,
                   Status status,
                   Location location,
                   String detection,
                   ZonedDateTime lastWashDate,
                   Integer price) {
        // 필수인건 조건문 처리해주고, 아닌건 그냥 넣으면 됨
        // db 유저를 찾으면 넣어줌
        if (user != null) this.user = user;

        // 토큰이 있으면 유저를 찾아줘야해
        if (userToken == null) throw new RuntimeException("no userToken");

        if(clothesImgUrl == null) throw new RuntimeException("no ImgUrl");
        else this.clothesImgUrl = clothesImgUrl;


        if (StringUtils.hasLength(clothesToken)){
            this.clothesToken = clothesToken;
        }
        else {
            final String CLOTHES_PREFIX = "clo_";
            this.clothesToken = TokenGenrator.randomChracterWithPrefix(CLOTHES_PREFIX);
        }

        // 최초 등록 시 위치를 옷장으로
        if (location == null) this.location = Location.ENABLE;
        else this.location = location;

        this.detection = detection;
        this.lastWashDate = lastWashDate;
        this.price = price;
        this.status = Status.BASIC;
    }




    // db를 건드릴거니까 여기(엔티티)에 옷 업데이트를 만든다.
    public void updateClothes(String responseBody) {
        System.out.println(responseBody);
        // 받아온 정보들을 파싱해서 여기에 넣기
        JsonParser jsonParser = new JsonParser();
//        JsonArray jsonArray = (JsonArray) jsonParser.parse(responseBody);
        JsonObject jsonObject = (JsonObject) jsonParser.parse(responseBody);
        JsonArray matchedObjectsArray = (JsonArray) jsonObject.get("matchedObjects");
        System.out.println("arr" + matchedObjectsArray);

        for (int i = 0; i < matchedObjectsArray.size(); i++) { // matchedObjects가 여러 개 일 경우를 대비
            JsonObject matchedObject = (JsonObject) matchedObjectsArray.get(i);
//            System.out.println("mo " + matchedObject);
            JsonElement typeElement = matchedObject.get("type");
            System.out.println("type: "+ typeElement);
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
                            .build();
                    // 아까 넘긴 메서드를 실행
                    category.maketag(categoryArray, "category");
                    System.out.println(category.getClothesTagList());
                    // 빌드된걸 this.태그그룹리스트에 add
                    this.clothesTagGroupList.add(category);
                }

                JsonObject itemObject = (JsonObject) tagsObject.get("item");
                if (itemObject!=null) {
                    JsonArray itemArray = new JsonArray();
                    itemArray.add(itemObject);
                    ClothesTagGroup item = ClothesTagGroup.builder()
                            .clothesTagGroupName("item")
                            .build();
                    item.maketag(itemArray, "item");
                    this.clothesTagGroupList.add(item);
                }

                JsonObject shoeObject = (JsonObject) tagsObject.get("toetype"); // shoes에만 있음
                if (shoeObject!=null) {
                    JsonArray shoeArray = new JsonArray();
                    shoeArray.add(itemObject);
                    ClothesTagGroup toetype = ClothesTagGroup.builder()
                                            .clothesTagGroupName("toetype")
                                            .build();
                    toetype.maketag(shoeArray, "toetype");
                    this.clothesTagGroupList.add(toetype);
                }


                // jsonArray
                if (colorArray!=null) {
                    ClothesTagGroup colors = ClothesTagGroup.builder()
                            .clothesTagGroupName("colors")
                            .build();
                    colors.maketag(colorArray,"colors");
                    this.clothesTagGroupList.add(colors);
                }
                if (textureArray!=null) {
                    ClothesTagGroup textures = ClothesTagGroup.builder()
                            .clothesTagGroupName("textures")
                            .build();
                    textures.maketag(textureArray,"textures");
                    this.clothesTagGroupList.add(textures);

                }
                if (lookArray!=null) {
                    ClothesTagGroup looks = ClothesTagGroup.builder()
                            .clothesTagGroupName("looks")
                            .build();
                    looks.maketag(lookArray,"looks");
                    this.clothesTagGroupList.add(looks);

                }
                if (printArray!=null) {
                    ClothesTagGroup prints = ClothesTagGroup.builder()
                            .clothesTagGroupName("prints")
                            .build();
                    prints.maketag(printArray,"prints");
                    this.clothesTagGroupList.add(prints);

                }


                System.out.println("colors "+colorArray);
                System.out.println("textures "+textureArray);
                System.out.println("looks "+lookArray);
                System.out.println("prints "+printArray);
                System.out.println("category "+categoryObject);
                System.out.println("item "+itemObject);
                System.out.println("toe "+shoeObject); // shoe인 경우에만 들어옴.
//                System.out.println(Arrays.toString(clothesTagGroupList));
                clothesTagGroupList.forEach(System.out::println);
            }

        }

        // status 변경
//        aidone();
    }
}
