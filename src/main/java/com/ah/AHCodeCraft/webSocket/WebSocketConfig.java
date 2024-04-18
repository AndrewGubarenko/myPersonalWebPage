package com.ah.AHCodeCraft.webSocket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {


    private final AHWebSocketHandler webSocketHandler;

    @Autowired
    public WebSocketConfig(AHWebSocketHandler webSocketHandler) {
        this.webSocketHandler = webSocketHandler;
    }
    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(webSocketHandler, "/chat").setAllowedOrigins("*");
    }
}

