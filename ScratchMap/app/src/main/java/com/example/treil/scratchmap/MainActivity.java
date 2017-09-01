package com.example.treil.scratchmap;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import com.mapbox.mapboxsdk.Mapbox;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Mapbox Access token
        Mapbox.getInstance(getApplicationContext(), "mapbox_token");
    }

    public void sendMessage(View view) {
        // Respond to the menu button


        //https://www.mapbox.com/android-docs/map-sdk/overview/
        //Step 2
    }
}
