package com.ah.AHCodeCraft.webSocket;

import com.ah.AHCodeCraft.services.iServices.IMessageService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.*;

import java.io.IOException;

@AllArgsConstructor
@Component
public class AHWebSocketHandler implements WebSocketHandler {

    private static final String startMessage = """
                Hello!
                Here you can interact with the server application in the next manner:
                """;

    private IMessageService messageService;

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        this.trySendMessage(session, startMessage);
    }

    @Override
    public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {
        String payload = (String) message.getPayload();
        var responseMessage = messageService.processMessage(payload);
        this.trySendMessage(session, responseMessage);
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
        var errorMessage = "Oh, shit!!! " + exception.getLocalizedMessage();
        this.trySendMessage(session, errorMessage);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus) throws Exception {
        var connectionCloseMessage = new StringBuffer("Connection with session id: ")
                .append(session.getId())
                .append(" has been closed with status: ")
                .append(closeStatus.getCode())
                .append(" and by the reason: ")
                .append(closeStatus.getReason());
        System.out.println(connectionCloseMessage);
    }

    @Override
    public boolean supportsPartialMessages() {
        return false;
    }

    private void trySendMessage(WebSocketSession session, String message) {
        try {
            session.sendMessage(new TextMessage(message));
        } catch (IOException | IllegalStateException ex) {
            System.out.println(ex.getLocalizedMessage());
        }
    }
}

