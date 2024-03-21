package dev.rainbowmirror.closeathand.infrastructure.clothes;

import dev.rainbowmirror.closeathand.domain.clothes.Clothes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClothesRepository extends JpaRepository<Clothes, Long> {
    // token으로 할 필요없으니 일단 비워둠
}