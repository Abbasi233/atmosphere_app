package com.backend.spring.security.postgresql.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.backend.spring.security.postgresql.models.Position;

@Repository
public interface PositionRepository extends CrudRepository<Position, Long> {
}
