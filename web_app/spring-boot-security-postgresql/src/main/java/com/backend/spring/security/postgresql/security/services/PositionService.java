package com.backend.spring.security.postgresql.security.services;

import org.springframework.validation.annotation.Validated;

import com.backend.spring.security.postgresql.models.Position;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Validated
public interface PositionService {

    @NotNull Iterable<Position> getAllPositions();

    Position getPosition(@Min(value = 1L, message = "Invalid Position ID.") long id);

    Position save(Position Position);
}