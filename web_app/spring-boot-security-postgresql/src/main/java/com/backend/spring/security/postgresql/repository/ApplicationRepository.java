package com.backend.spring.security.postgresql.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.spring.security.postgresql.models.Application;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {
}
