package com.testtbs;


import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

import pub.devrel.easypermissions.EasyPermissions;

import static android.support.v4.content.ContextCompat.startActivity;

/**
 * Created by LQ0611 on 2019/2/14.
 */

public class RNActivity extends ReactContextBaseJavaModule{
    private ReactApplicationContext mContext;
    public RNActivity(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext=reactContext;
    }
    @Override
    public String getName() {
        return "RNActivity";
    }

    @ReactMethod
    public void show(String filePath){
        //Toast.makeText(mContext, "RNActivity", Toast.LENGTH_SHORT).show();
        Activity currentActivity = getCurrentActivity();
        //String filePath = "/storage/emulated/0/test.docx";
        if(null!=currentActivity){
            //Class aimActivity = Class.forName(name);
            FileDisplayActivity.show(currentActivity, filePath);
            //Intent intent = new Intent(currentActivity,UrlActivity.class);
            //currentActivity.startActivity(intent);
        }
    }



}
