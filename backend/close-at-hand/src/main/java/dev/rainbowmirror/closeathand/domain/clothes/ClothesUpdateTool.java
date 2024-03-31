package dev.rainbowmirror.closeathand.domain.clothes;

import dev.rainbowmirror.closeathand.common.util.JsonTagPaser;
import dev.rainbowmirror.closeathand.domain.OmniCommerceService;
import dev.rainbowmirror.closeathand.domain.clothes.clothesTagGroup.ClothesTagGroup;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import kong.unirest.HttpResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class ClothesUpdateTool {
    private final OmniCommerceService omniCommerceService;
    @Autowired
    private EntityManager em;

    @Transactional
    public Clothes update(Clothes clothes) {
        Clothes.Status status = clothes.getStatus();
        String clothesToken = clothes.getClothesToken();
        if (status == Clothes.Status.BASIC) {
            HttpResponse<String> response = omniCommerceService.getClothes(clothesToken);
            int statusCode = response.getStatus();

            if (201 == statusCode) { // 정상 응답
                System.out.println("SUCCESS " + statusCode);
                // 옷 업데이트 함수를 넣을건데, 업데이트 함수를 따로 만들어야겠지?
                List<ClothesTagGroup> list = JsonTagPaser.parse(response.getBody(), clothes);

                for (ClothesTagGroup tg : list) {
                    em.persist(tg);
                }
                em.flush();
                clothes.updateClothes(list);
            } else {return clothes;}
        }
        return clothes;
    }
}
