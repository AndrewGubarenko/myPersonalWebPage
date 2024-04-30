package com.ah.AHCodeCraft.dao;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
public class VigenereMessageContainer extends MessageContainer {
    private String keyword;
}
