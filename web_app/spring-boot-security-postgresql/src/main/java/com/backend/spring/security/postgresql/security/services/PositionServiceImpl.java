package com.backend.spring.security.postgresql.security.services;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.backend.spring.security.postgresql.exception.ResourceNotFoundException;
import com.backend.spring.security.postgresql.models.Position;
import com.backend.spring.security.postgresql.repository.PositionRepository;
@Service
@Transactional
public class PositionServiceImpl implements PositionService {

    private PositionRepository PositionRepository;

    public PositionServiceImpl(PositionRepository PositionRepository) {
        this.PositionRepository = PositionRepository;
    }

    @Override
    public Iterable<Position> getAllPositions() {
        return PositionRepository.findAll();
    }

    @Override
    public Position getPosition(long id) {
        return PositionRepository
          .findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Position not found"));
    }

    @Override
    public Position save(Position Position) {
        return PositionRepository.save(Position);
    }
}