package com.anonymous.ReactSample;

import androidx.annotation.NonNull;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

import ir.metrix.notification.MetrixNotification;

public class CustomFirebaseMessagingService extends FirebaseMessagingService {

    @Override
    public void onMessageReceived(@NonNull RemoteMessage message) {
        if (MetrixNotification.onMessageReceived(message)) return;
        // Here you can process your own FCM messages
    }
}
