package com.poovi.bugtracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.poovi.bugtracker.model.Bug;
import com.poovi.bugtracker.repository.BugRepository;

@RestController
@RequestMapping("/api/bugs")
@CrossOrigin(origins = "http://localhost:3000")
public class BugController {

    @Autowired
    private BugRepository bugRepository;

    @GetMapping
    public List<Bug> getAllBugs() {
        return bugRepository.findAll();
    }
}




