package com.poovi.bugtracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.poovi.bugtracker.model.Bug;

public interface BugRepository extends JpaRepository<Bug, Long> {
}
